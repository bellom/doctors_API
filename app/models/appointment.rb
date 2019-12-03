class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  validate_presence_of :date
  validate_presence_of :user_id
  validate_presence_of :doctor_id
end
