class CreateCities < ActiveRecord::Migration[6.1]
  def change
    create_table :cities, id: false do |t|
      t.primary_key :code, :string, limit: 5
      t.string :prefecture_code, limit: 2, null: false
      t.string :parent_city_code, limit: 5
      t.string :name, null: false
      t.string :name_kana
      t.column :city_type, "ENUM('normal', 'major', 'major_child', 'county', 'county_child') NOT NULL",
                comment: 'normal: 以下のもの以外の市町村, major: 政令指定都市, major_child: 政令指定都市の各区, county: 郡, county_child: 郡の各町村'
      t.string :ascii, null: false
      t.decimal :lat, precision: 8, scale: 6
      t.decimal :lon, precision: 9, scale: 6
    end

    add_foreign_key :cities, :prefectures, column: :prefecture_code, primary_key: :code
    add_foreign_key :cities, :cities, column: :parent_city_code, primary_key: :code
  end
end
