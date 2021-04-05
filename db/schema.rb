# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_04_151629) do

  create_table "admins", charset: "utf8mb4", force: :cascade do |t|
    t.string "family_name", null: false
    t.string "given_name", null: false
    t.string "family_name_kana", null: false
    t.string "given_name_kana", null: false
    t.string "account_name", null: false
    t.string "password_digest", null: false
    t.string "remember_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["account_name"], name: "index_admins_on_account_name", unique: true
  end

  create_table "cities", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "prefecture_id", null: false
    t.integer "parent_city_id"
    t.string "name", null: false
    t.string "kana"
    t.string "ascii", null: false
    t.string "type", null: false
    t.decimal "lat", precision: 8, scale: 6
    t.decimal "lon", precision: 9, scale: 6
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_cities_on_name"
    t.index ["prefecture_id"], name: "index_cities_on_prefecture_id"
  end

  create_table "federations", charset: "utf8mb4", force: :cascade do |t|
    t.string "formal_name", null: false
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "prefecture_federations", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "federation_id"
    t.bigint "prefecture_id"
    t.string "prefecture_code", limit: 2
    t.string "formal_name"
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["federation_id"], name: "index_prefecture_federations_on_federation_id"
    t.index ["prefecture_id"], name: "index_prefecture_federations_on_prefecture_id"
  end

  create_table "prefectures", charset: "utf8mb4", force: :cascade do |t|
    t.string "name", null: false
    t.string "kana", null: false
    t.string "ascii", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_prefectures_on_name"
  end

  create_table "staffs", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "federation_id", null: false
    t.bigint "prefecture_federation_id"
    t.string "family_name", null: false
    t.string "given_name", null: false
    t.string "family_name_kana", null: false
    t.string "given_name_kana", null: false
    t.string "email", null: false
    t.string "account_name", null: false
    t.string "password_digest", null: false
    t.string "remember_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email", "account_name"], name: "index_staffs_on_email_and_account_name"
    t.index ["federation_id"], name: "index_staffs_on_federation_id"
    t.index ["prefecture_federation_id"], name: "index_staffs_on_prefecture_federation_id"
  end

  add_foreign_key "cities", "prefectures"
  add_foreign_key "prefecture_federations", "federations"
  add_foreign_key "prefecture_federations", "prefectures"
  add_foreign_key "staffs", "federations"
  add_foreign_key "staffs", "prefecture_federations"
end
