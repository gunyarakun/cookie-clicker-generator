ActionController.add_renderer :css do |template, options|
  string = render_to_string template, options
  self.content_type ||= Mime::CSS
  self.response_body = string
end
