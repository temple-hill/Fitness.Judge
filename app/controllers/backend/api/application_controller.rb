class Backend::Api::ApplicationController < Backend::ApplicationController
  def require_login
    render json: { status: 401 } unless login?
  end
end
