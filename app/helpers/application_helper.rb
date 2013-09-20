module ApplicationHelper
  def cc_image_resize(name, max_width = CookieClickerGenerator::Application::THUMBNAIL_MAX_PIXELS, max_height = CookieClickerGenerator::Application::THUMBNAIL_MAX_PIXELS)
    cc_image_info = CookieClickerGenerator::Application::CC_IMAGES[name]
    if cc_image_info
      w_ratio = max_width * 1.0 / cc_image_info[:width]
      h_ratio = max_height * 1.0 / cc_image_info[:height]
      if w_ratio > 1.0 and h_ratio > 1.0
        return { :width => cc_image_info[:width], :height => cc_image_info[:height] }
      elsif w_ratio < h_ratio
        return {
          :width => (cc_image_info[:width] * w_ratio).to_i,
          :height => (cc_image_info[:height] * w_ratio).to_i
        }
      else
        return {
          :width => (cc_image_info[:width] * h_ratio).to_i,
          :height => (cc_image_info[:height] * h_ratio).to_i
        }
      end
    else
      return {
        :width => 0,
        :height => 0,
      }
    end
  end
end
