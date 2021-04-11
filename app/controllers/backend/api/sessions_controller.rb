class Backend::Api::SessionsController < Backend::Api::ApplicationController
  skip_before_action :require_login

  def create
  end

  def destroy
  end
end
