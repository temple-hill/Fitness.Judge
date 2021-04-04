class CreateAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :admins do |t|
      t.string :family_name, null: false
      t.string :given_name, null: false
      t.string :family_name_kana, null: false
      t.string :given_name_kana, null: false
      t.string :account_name, null: false
      t.string :password_digest, null: false
      t.string :remember_digest

      t.timestamps
    end

    add_index :admins, :account_name, unique: true
  end
end
