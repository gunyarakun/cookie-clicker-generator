class CookieClickersController < ApplicationController
  before_action :set_cookie_clicker_editable, only: [:edit, :update, :destroy]
  before_action :set_cookie_clicker, only: [:show, :style, :main, :lang]
  before_action :authenticate_user!, :except => [:show, :style, :main, :lang]

  helper_method :cc_image_url, :cc_lang_base_url, :cc_image_map

  def cc_image_url(filename)
    # TODO: check CookieClickerGenerator::Application::CC_IMAGES[filename]
    images = Image.where(cookie_clicker_id: @cookie_clicker.id, path: filename)
    if images.count > 0
      image = images[0]
      if image and image.body
        return image.body.url
      end
    end

    "/cookie-clicker/img/#{filename}"
  end

  def cc_lang_base_url
    "/cookie-clicker/lang/"
  end

  def cc_image_map
    @cookie_clicker.image_paths
  end

  # GET /cookie_clickers
  # GET /cookie_clickers.json
  def index
    @cookie_clickers = CookieClicker.where(:user_id => current_user.id)
  end

  # GET /cookie_clickers/1/
  def show
    render :layout => false
  end

  # GET /cookie_clickers/style.css
  def style
    respond_to do |format|
      format.css
    end
  end

  # GET /cookie_clickers/main.js
  def main
    @supported_languages = []
    CookieClickerGenerator::Application::CC_LANGS.each_pair do |lang, info|
      @supported_languages << [
        lang,                       # lang (ex. 'ja'/'en')
        info[:desc],                # desc
        I18n.locale == lang.intern, # default language
      ]
    end

    respond_to do |format|
      format.js
    end
  end

  # GET /cookie_clickers/:id/lang/:lang.js
  def lang
    # TODO: add lang model
    lang = params[:lang]
    if CookieClickerGenerator::Application::CC_LANGS.has_key?(lang)
      render_template(:file => "#{Rails.root}/public/cookie-clicker/lang/#{lang}.js")
    end
  end

  # GET /cookie_clickers/new
  def new
    @cookie_clicker = CookieClicker.new(:user_id => current_user.id)
  end

  # GET /cookie_clickers/1/edit
  def edit
    if @cookie_clicker.user_id != current_user.id
      redirect_to :action => 'index'
    end

    user_images = Image.where(cookie_clicker_id: @cookie_clicker.id)

    @cc_images = {}
    images = CookieClickerGenerator::Application::CC_IMAGES
    images.each_pair do |filename, image_info|
      @cc_images[filename] = image_info.clone
    end

    user_images.each do |user_image|
      if @cc_images.has_key?(user_image.path)
        @cc_images[user_image.path][:user_image] = user_image
      else
        # invalid
      end
    end
  end

  # POST /cookie_clickers
  # POST /cookie_clickers.json
  def create
    @cookie_clicker = CookieClicker.new(cookie_clicker_params)
    @cookie_clicker.user_id = current_user.id

    respond_to do |format|
      if @cookie_clicker.save
        format.html { redirect_to :action => 'index', notice: 'Cookie clicker was successfully created.' }
        format.json { render action: 'show', status: :created, location: @cookie_clicker }
      else
        format.html { render action: 'new' }
        format.json { render json: @cookie_clicker.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /cookie_clickers/1
  # PATCH/PUT /cookie_clickers/1.json
  def update
    respond_to do |format|
      if @cookie_clicker.update(cookie_clicker_params)
        format.html { redirect_to cookie_clickers_path, notice: 'Cookie clicker was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @cookie_clicker.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /cookie_clickers/1
  # DELETE /cookie_clickers/1.json
  def destroy
    @cookie_clicker.destroy
    respond_to do |format|
      format.html { redirect_to cookie_clickers_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cookie_clicker
      @cookie_clicker = CookieClicker.find(params[:id])
    end

    def set_cookie_clicker_editable
      @cookie_clicker = CookieClicker.find(params[:id])
      if current_user.id != @cookie_clicker.user_id
        redirect_to cookie_clickers_path(params[:id], :trailing_slash => true) and return
      end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def cookie_clicker_params
      params.require(:cookie_clicker).permit(:title, :published)
    end
end
