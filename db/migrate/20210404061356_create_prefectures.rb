class CreatePrefectures < ActiveRecord::Migration[6.1]
  def change
    create_table :prefectures do |t|
      t.string :name, null: false
      t.string :kana, null: false
      t.string :ascii, null: false

      t.timestamps
    end

    add_index :prefectures, :name
  end
end
