class CreateCities < ActiveRecord::Migration[6.1]
  def change
    create_table :cities do |t|
      t.references :prefecture, foreign_key: true, null: false
      t.integer :parent_city_id, null: true
      t.string :name, null: false
      t.string :kana, null: true
      t.string :ascii, null: false
      t.string :type, null: false
      t.decimal :lat, precision: 8, scale: 6, null: true
      t.decimal :lon, precision: 9, scale: 6, null: true

      t.timestamps
    end

    add_index :cities, :name
  end
end
