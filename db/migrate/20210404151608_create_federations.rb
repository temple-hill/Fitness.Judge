class CreateFederations < ActiveRecord::Migration[6.1]
  def change
    create_table :federations do |t|
      t.string :formal_name, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
