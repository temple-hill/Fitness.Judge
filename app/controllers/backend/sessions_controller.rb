class Backend::SessionsController < Backend::ApplicationController
  skip_before_action :require_login

  def new; end
end
