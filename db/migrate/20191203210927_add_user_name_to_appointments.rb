class AddUserNameToAppointments < ActiveRecord::Migration[6.0]
  def change
    add_column :appointments, :user_name, :string
  end
end
