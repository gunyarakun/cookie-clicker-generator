class CookieClicker < ActiveRecord::Base
  acts_as_paranoid
  belongs_to :user
  has_many :images

  validates_presence_of :title, :user_id
  attr_accessible :title, :user_id, :published

  def image_paths
    paths = {}
    CookieClickerGenerator::Application::CC_IMAGES.keys.each do |filename|
      paths[filename] = "/cookie-clicker/img/#{filename}"
    end
    images.each do |image|
      if image.body
        paths[image.path] = image.body.url
      end
    end
    paths
  end
end
