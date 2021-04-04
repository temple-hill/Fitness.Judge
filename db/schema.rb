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

ActiveRecord::Schema.define(version: 2021_04_04_061402) do

  create_table "cities", primary_key: "code", id: { type: :string, limit: 5 }, charset: "utf8mb4", force: :cascade do |t|
    t.string "prefecture_code", limit: 2, null: false
    t.string "parent_city_code", limit: 5
    t.string "name", null: false
    t.string "name_kana"
    t.column "city_type", "enum('normal','major','major_child','county','county_child')", null: false, comment: "normal: 以下のもの以外の市町村, major: 政令指定都市, major_child: 政令指定都市の各区, county: 郡, county_child: 郡の各町村"
    t.string "ascii", null: false
    t.decimal "lat", precision: 8, scale: 6
    t.decimal "lon", precision: 9, scale: 6
    t.index ["parent_city_code"], name: "fk_rails_bd48dc1cda"
    t.index ["prefecture_code"], name: "fk_rails_bd5ee70183"
  end

  create_table "prefectures", primary_key: "code", id: { type: :string, limit: 2 }, charset: "utf8mb4", force: :cascade do |t|
    t.string "name", null: false
    t.string "name_kana", null: false
    t.string "ascii", null: false
  end

  add_foreign_key "cities", "cities", column: "parent_city_code", primary_key: "code"
  add_foreign_key "cities", "prefectures", column: "prefecture_code", primary_key: "code"
end
