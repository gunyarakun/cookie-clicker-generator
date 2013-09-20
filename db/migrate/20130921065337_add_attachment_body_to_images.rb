class AddAttachmentBodyToImages < ActiveRecord::Migration
  def self.up
    change_table :images do |t|
      t.attachment :body
    end
  end

  def self.down
    drop_attached_file :images, :body
  end
end
