require 'rails_helper'
require 'factory_bot_rails'

RSpec.describe 'Beers', type: :request do
  describe 'GET /api/v1/beers/:id' do
    context 'with an existent beer' do
      let(:beer) { FactoryBot.create(:beer, brand: "mano lelo") }

      it 'returns the beer' do
        get "/beers/#{beer.id}"
        
        # expect(response).to render_template(:show)
        # expect(assigns(:beer)).to eq beer
        expect(response).to have_http_status(:success)
      end
    end

    context 'with an inexistent beer' do
      it do
        get '/api/v1/beers/999'
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end