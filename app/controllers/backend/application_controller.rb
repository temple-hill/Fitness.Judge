class Backend::ApplicationController < ApplicationController
  before_action :require_login
  # layout 'backend'

  def require_login
    redirect_to backend_login_path unless login?
  end

  def login(admin_id)
    session[:admin_id] = admin_id
  end

  def login?
    current_admin.present?
  end

  def logout
    session.delete(:admin_id)
    @current_admin = nil
  end

  def current_admin
    @current_admin ||= Admin.find_by(id: session[:admin_id]) if session[:admin_id]
  end
end
