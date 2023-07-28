class Beer < ApplicationRecord
  validates :style, :brand, presence: true
end
