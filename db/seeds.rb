# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

masters = Dir.glob(Rails.root.join('db/seeds/master/*.rb')).sort
masters.each do |f|
  p f
  load(f)
end

admin = Admin.new(
  family_name: '寺岡',
  given_name: 'テスト',
  email: 'temple.hill@icloud.com',
  password: 'password'
)

admin.save!(validate: false)
