json.extract! @image, :path, :body
if @image.body.present?
  thumb_size = cc_image_resize(@image.path)
  json.set! :thumb_width, thumb_size[:width]
  json.set! :thumb_height, thumb_size[:height]
end
