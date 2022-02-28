# frozen_string_literal: true

class Backend::Api::AuthController < Backend::Api::ApplicationController
  def authenticate
    render json: { current_admin: current_admin.as_json(methods: %i[name]) }
  end
end
