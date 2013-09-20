class Image < ActiveRecord::Base
  acts_as_paranoid
  belongs_to :user
  belongs_to :cookie_clicker

  validates_presence_of :user_id, :cookie_clicker_id, :path
#  validates_attachment_presence :body
  attr_accessible :path, :cookie_clicker_id, :body
  validates_inclusion_of :path, :in => CookieClickerGenerator::Application::CC_IMAGES.keys

  has_attached_file :body,
    :storage => :s3,
    :s3_credentials => "#{Rails.root}/config/s3.yml",
    :path => ":user_id/:cookie_clicker_id/:id.:extension",
    :processor => 'mini_magick',
    :styles => {:original => '100%'},
    :convert_options => {
      :original => lambda {|attachment|
        "-resize '#{attachment.cc_image_size}' -background none -compose Copy -gravity center -extent #{attachment.cc_image_size}"
      }
    }

  def body_url
    if body.present?
      body.url
    else
      nil
    end
  end

  def cc_image_size
    image_info = CookieClickerGenerator::Application::CC_IMAGES[path]
    "#{image_info[:width]}x#{image_info[:height]}"
  end

  def cc_image_format
    image_info = CookieClickerGenerator::Application::CC_IMAGES[path]
    image_info[:format]
  end
end
