# frozen_string_literal: true


require 'rails_helper'

RSpec.describe Appointment, type: :model do
  describe "to validate appointment entities" do
    it { is_expected.to validate_presence_of :date}
    it { is_expected.to validate_presence_of :user_id}
    it { is_expected.to validate_presence_of :doctor_id}
    it { is_expected.to validate_presence_of :doctor_name}
    it { is_expected.to validate_presence_of :user_name}
  end
end