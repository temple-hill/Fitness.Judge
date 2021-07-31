class CreateAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :admins do |t|
      t.string :family_name, null: false
      t.string :given_name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :remember_digest
      t.string :reset_password_token
      t.datetime :reset_password_sent_at

      t.timestamps
    end

    add_index :admins, :email, unique: true
  end
end
