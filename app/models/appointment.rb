# frozen_string_literal: true


class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  validates_presence_of :date
  validates_presence_of :user_id
  validates_presence_of :doctor_id
  validates_presence_of :doctor_name
  validates_presence_of :user_name
end