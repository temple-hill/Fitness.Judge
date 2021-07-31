class Backend::PasswordResetsController < Backend::ApplicationController
  skip_before_action :require_login
  # before_action :check_expiration

  def new
    fail
  end

  def edit
    fail
  end

  def update
  end

  private

  def password_reset_params
    params.require(:admin).permit(:password, :password_confirmation)
  end

  # def check_expiration
  #   return unless @admin.password_reset_expired?

  #   redirect_to backend_login_path
  # end
end
