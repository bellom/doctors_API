# frozen_string_literal: true


class AppointmentsController < ApplicationController

  # GET /appointments
  def index
    @appointments = Appointment.all

    render json: @appointments
  end

  # POST /appointments
  def create
    @appointment = Appointment.new(appointment_params)

    if @appointment.save
      render json: @appointment, status: :ok, location: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def appointment_params
      params.require(:appointment).permit(:date, :user_id, :doctor_id, :doctor_name, :user_name)
    end
end
