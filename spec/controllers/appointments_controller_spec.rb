# frozen_string_literal: true


require 'rails_helper'

RSpec.describe AppointmentsController, type: :controller do
  subject { get :index }
  describe "GET #index" do
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "return list of appointment accordingly" do
      doctor_first = create :appointment
      doctor_last = create :appointment
      subject
      expect(json.first['id']).to eq(doctor_first.id)
      expect(json.last['id']).to eq(doctor_last.id)
    end
  end
end
