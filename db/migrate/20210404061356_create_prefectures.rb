class CreatePrefectures < ActiveRecord::Migration[6.1]
  def change
    create_table :prefectures, id: false do |t|
      t.primary_key :code, :string, limit: 2
      t.string :name, null: false
      t.string :name_kana, null: false
      t.string :ascii, null: false
    end
  end
end
