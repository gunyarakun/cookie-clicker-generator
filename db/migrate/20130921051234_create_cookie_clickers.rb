class CreateCookieClickers < ActiveRecord::Migration
  def change
    create_table :cookie_clickers do |t|
      t.integer :user_id
      t.string :title, :limit => 128
      t.boolean :published
      t.boolean :easy_mode
      t.datetime :deleted_at # for rails4_acts_as_paranoid

      t.timestamps
    end

    add_index :cookie_clickers, [:updated_at, :published]
  end
end
