require 'rails_helper'
require 'factory_bot_rails'

RSpec.describe 'Beers', type: :request do
  describe "GET /api/v1/beers" do
    context 'when there is beers persisted on database' do
      before do
        FactoryBot.create_list(:beer, 3)
      end

      it do
        get '/api/v1/beers/index'
        json = JSON.parse(response.body)
  
        expect(json.length).to eq 3
      end
    end

    context 'when there is no beers persisted on database' do
      it do
        get '/api/v1/beers/index'
        json = JSON.parse(response.body)
  
        expect(json).to be_empty
      end
    end
  end
  describe 'GET /api/v1/beers/:id' do
    context 'with an existent beer' do
      let(:beer) { FactoryBot.create(:beer, brand: "mano lelo") }

      it 'returns the beer' do
        get "/api/v1/beers/#{beer.id}"
        json = JSON.parse(response.body)

        expect(json["brand"]).to eq "mano lelo"
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

  describe 'POST /api/v1/beers/create' do
    context 'with valid data' do
      let(:beer_attributes) { FactoryBot.attributes_for(:beer) }

      it 'creates a beer' do
        expect {
          post '/api/v1/beers/create', params: beer_attributes
        }.to change(Beer, :count).by(1)

        expect(response).to have_http_status(:success)
      end
    end

    context 'with invalid data' do
      let(:invalid_beer_attributes) { FactoryBot.attributes_for(:beer, style: "") }

      it 'does not creates a beer' do
        expect {
          post '/api/v1/beers/create', params: invalid_beer_attributes
        }.not_to change(Beer, :count)

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
  
  describe 'POST /api/v1/beers/update' do
    let(:beer) { FactoryBot.create(:beer) }

    context 'with valid data' do
      it 'updates a beer' do
        expect {
          post '/api/v1/beers/update', params: {id: beer.id, brand: 'mano lelo'}
          beer.reload
        }.to change { beer.brand }.from("itaipava").to("mano lelo")

        expect(response).to have_http_status(:success)
      end
    end

    context 'with invalid data' do
      it 'does not updates a beer' do
        expect {
          post '/api/v1/beers/update', params: { id: beer.id, brand: '' }
        }.not_to change { beer.brand }

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'DELETE /api/v1/beers/:id' do
    context 'with existent beer' do
      let(:beer) { FactoryBot.create(:beer) }

      it 'deletes the beer' do
        delete "/api/v1/beers/#{beer.id}"
        expect(response).to have_http_status(:success)
      end
    end

    context 'with inexistent beer' do
      let(:beer) { FactoryBot.create(:beer) }

      it do
        delete "/api/v1/beers/999"
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end