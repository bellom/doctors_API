class CreateDoctors < ActiveRecord::Migration[6.0]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :education
      t.string :speciality

      t.timestamps
    end
  end
end
