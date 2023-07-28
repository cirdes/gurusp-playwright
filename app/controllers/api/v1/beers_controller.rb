class Api::V1::BeersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_beer, only: %i[show edit update destroy]

  # GET /beers
  # GET /beers.json
  def index
    @beers = Beer.all.order(brand: :asc)
    render json: @beers
  end

  # GET /beers/1
  # GET /beers/1.json
  def show
    if @beer
      render json: @beer
    else
      render json: @beer.errors
    end
  end

  # GET /beers/new
  def new
    @beer = Beer.new
  end

  # GET /beers/1/edit
  def edit
    if @beer
      render json: @beer
    else
      render json: @beer.errors
    end
  end

  # POST /beers
  # POST /beers.json
  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render json: @beer
    else
      render json: @beer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /beers/1
  # PATCH/PUT /beers/1.json
  def update
    if @beer.update(beer_params)
      render json: @beer
    else
      render json: @beer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /beers/1
  # DELETE /beers/1.json
  def destroy
    @beer.destroy
    render json: { notice: 'Beer was successfully removed.' }
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_beer
    @beer = Beer.find(params[:id])
  rescue ActiveRecord::RecordNotFound => error
    render json: { error: error.message }, status: :not_found
  end

  # Only allow a list of trusted parameters through.
  def beer_params
    params.permit(:brand, :style, :country, :quantity)
  end
end
