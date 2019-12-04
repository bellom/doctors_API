class Doctor < ApplicationRecord
  has_many :appointments
  has_many :users, through: :appointments


  validates_presence_of :name
  validates_presence_of :education
  validates_presence_of :speciality
end