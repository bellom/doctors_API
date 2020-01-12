# frozen_string_literal: true

FactoryBot.define do
    factory :appointment do
      date { Date.new }
      association :user
      association :doctor
      doctor_name { 'Dr Sam Doe'}
      user_name { 'Bellom619'}
    end
  end