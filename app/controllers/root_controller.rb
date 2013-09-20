class RootController < ApplicationController
  def index
    @cookie_clickers = CookieClicker.where(:published => true).order('created_at desc').page(params[:page])
    respond_to do |format|
      format.html
      format.js
    end
  end
end
