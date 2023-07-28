require 'rails_helper'
require 'factory_bot_rails'
  
RSpec.describe Beer, type: :model do
  it 'is valid with brand and style' do
    beer = FactoryBot.build(:beer)
    expect(beer).to be_valid
  end

  it 'is invalid without a style' do
    beer = FactoryBot.build(:beer, style: "")
    beer.valid?

    expect(beer.errors[:style]).to include 'can\'t be blank'
  end

  it 'is invalid without a brand' do
    beer = FactoryBot.build(:beer, brand: "")
    beer.valid?

    expect(beer.errors[:brand]).to include 'can\'t be blank'
  end
end
