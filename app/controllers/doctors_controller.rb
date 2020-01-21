# frozen_string_literal: true


class DoctorsController < ApplicationController

  # GET /doctors
  def index
    @doctors = Doctor.all

    render json: @doctors
  end
  
  private
    # Only allow a trusted parameter "white list" through.
    def doctor_params
      params.require(:doctor).permit(:name, :education, :speciality)
    end
end
