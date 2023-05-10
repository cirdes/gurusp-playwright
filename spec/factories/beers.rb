# frozen_string_literal: true

FactoryBot.define do
  factory :beer do
    brand { 'itaipava' }
    style { 'pilsen' }
    country { 'brasil' }
    quantity { 10 }
  end
end
