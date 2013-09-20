# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20130921065337) do

  create_table "cookie_clickers", force: true do |t|
    t.integer  "user_id"
    t.string   "title",      limit: 128
    t.boolean  "published"
    t.boolean  "easy_mode"
    t.datetime "deleted_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "cookie_clickers", ["updated_at", "published"], name: "index_cookie_clickers_on_updated_at_and_published", using: :btree

  create_table "images", force: true do |t|
    t.string   "path"
    t.integer  "user_id"
    t.integer  "cookie_clicker_id"
    t.string   "external_source"
    t.string   "external_url"
    t.datetime "deleted_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "body_file_name"
    t.string   "body_content_type"
    t.integer  "body_file_size"
    t.datetime "body_updated_at"
  end

  add_index "images", ["cookie_clicker_id", "path"], name: "index_images_on_cookie_clicker_id_and_path", unique: true, using: :btree
  add_index "images", ["user_id"], name: "index_images_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "oauth_token"
    t.string   "oauth_token_secret"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "uid"
    t.string   "name"
    t.string   "provider"
    t.string   "password"
  end

  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
