# frozen_string_literal: true

FactoryBot.define do
    factory :doctor do
      name { 'Dr Sam doe' }
      education { 'Harvard University' }
      speciality { 'General Doctor' }
    end
  end