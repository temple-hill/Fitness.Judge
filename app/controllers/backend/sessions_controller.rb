class Backend::SessionsController < Backend::ApplicationController
  skip_before_action :require_login

  def new
    @admin = Admin.new
  end

  def create
    @admin = Admin.find_by!(email: admin_params[:email].downcase)
    raise unless @admin.authenticate(admin_params[:password])
    login(@admin.id)

    redirect_to backend_root_path
  rescue StandardError
    @admin = Admin.new(admin_params)
    flash[:danger] = 'メールアドレスもしくはパスワードが不正です'
    render :new
  end

  private

  def admin_params
    params.require(:admin).permit(:email, :password)
  end
end
