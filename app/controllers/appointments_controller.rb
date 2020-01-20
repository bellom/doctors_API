# frozen_string_literal: true


class AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show]

  # GET /appointments
  def index
    @appointments = Appointment.all

    render json: @appointments
  end

  # GET /appointments/1
  def show
    render json: @appointment
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
    # Use callbacks to share common setup or constraints between actions.
    def set_appointment
      @appointment = Appointment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def appointment_params
      params.require(:appointment).permit(:date, :user_id, :doctor_id, :doctor_name, :user_name)
    end
end
