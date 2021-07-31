class Backend::Api::SessionsController < Backend::Api::ApplicationController
  skip_before_action :require_login

  def create
    admin = Admin.find_by(email: session_params[:email].downcase)
    if admin&.authenticate(session_params[:password])
      login(admin.id)
      render json: {}, status: :ok
    else
      render json: { errors: ['メールアドレスまたはパスワードが間違っています。'] }
    end
  end

  def destroy
    logout
    flash[:success] = 'ログアウトしました。'
    render json: {}, status: :ok
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
