# frozen_string_literal: true


class DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show]

  # GET /doctors
  def index
    @doctors = Doctor.all

    render json: @doctors
  end

  # GET /doctors/1
  def show
    render json: @doctor
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_doctor
      @doctor = Doctor.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def doctor_params
      params.require(:doctor).permit(:name, :education, :speciality)
    end
end
