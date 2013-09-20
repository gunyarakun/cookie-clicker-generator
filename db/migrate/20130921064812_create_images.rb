class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :path
      t.integer :user_id # NOTE: This is duplicated column
      t.integer :cookie_clicker_id
      t.string :external_source # for easy mode like '@tasukuchan'
      t.string :external_url # for easy mode
      t.datetime :deleted_at # for rails4_acts_as_paranoid

      t.timestamps
    end

    add_index :images, [:cookie_clicker_id, :path], :unique => true
    add_index :images, :user_id
  end
end
