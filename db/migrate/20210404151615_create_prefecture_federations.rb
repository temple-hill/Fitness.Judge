class CreatePrefectureFederations < ActiveRecord::Migration[6.1]
  def change
    create_table :prefecture_federations do |t|
      t.references :federation, foreign_key: true, null: true
      t.string :prefecture_code, limit: 2, null: true
      t.string :formal_name, null: true
      t.string :name, null: true

      t.timestamps
    end

    add_foreign_key :prefecture_federations, :prefectures, column: :prefecture_code, primary_key: :code
  end
end
