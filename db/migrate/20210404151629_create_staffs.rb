class CreateStaffs < ActiveRecord::Migration[6.1]
  def change
    create_table :staffs do |t|
      t.references :federation, foreign_key: true, null: false
      t.references :prefecture_federation, foreign_key: true, null: true
      t.string :family_name, null: false
      t.string :given_name, null: false
      t.string :family_name_kana, null: false
      t.string :given_name_kana, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :remember_digest

      t.timestamps
    end

    add_index :staffs, :email, unique: true
  end
end
