module Paperclip
  module Interpolations
    def user_id(attachment, style_name)
      attachment.instance.user_id.to_s
    end

    def cookie_clicker_id(attachment, style_name)
      attachment.instance.cookie_clicker_id.to_s
    end
  end
end
