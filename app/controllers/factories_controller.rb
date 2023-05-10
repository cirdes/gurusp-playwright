# frozen_string_literal: true

require 'factory_bot'

class FactoriesController < ApplicationController
  respond_to :json
  rescue_from Exception, with: :show_errors

  def create
    factory = factory_params[:factory]
    attrs = factory_params[:attrs]

    record =
      if traits.empty? && attrs.nil?
        FactoryBot.create!(factory)
      elsif attrs
        FactoryBot.create(factory, *traits, **attrs)
      else
        FactoryBot.create(factory, **attrs)
      end

    render(json: to_json(record), status: :created)
  end

  def destroy
    DatabaseCleaner.strategy = :truncation
    DatabaseCleaner.clean

    head(:no_content)
  end

  private

  def to_json(record)
    inc = factory_params[:nested_models]

    return record.to_json(inc.to_h) if inc

    record.to_json
  end

  def factory_params
    params.permit(:factory, traits: [], nested_models: {}, attrs: {})
  end

  def traits
    traits = factory_params[:traits]
    return [] if traits.blank?

    traits.map(&:to_sym)
  end

  def show_errors(exception)
    error = {
      error: "#{exception.class}: #{exception}",
      backtrace: exception.backtrace.join("\n")
    }

    render(json: error, status: :bad_request)
  end
end
