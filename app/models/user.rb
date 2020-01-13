# frozen_string_literal: true


class User < ApplicationRecord
  has_many :appointments, dependent: :destroy;
  has_many :doctors, through: :appointments


  validates_presence_of :username
end
