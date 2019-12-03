class Doctor < ApplicationRecord
  has_many :appointments
  has_many :user through: :appointments


  validate_presence_of :name
  validate_presence_of :education
  validate_presence_of :speciality
end