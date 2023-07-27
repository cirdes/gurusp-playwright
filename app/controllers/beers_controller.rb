class BeersController < ApplicationController
  before_action :set_beer, only: [:show]

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_beer
    @beer = Beer.find(params[:id])
  rescue ActiveRecord::RecordNotFound => error
    render json: { error: error.message }, status: :not_found
  end
end