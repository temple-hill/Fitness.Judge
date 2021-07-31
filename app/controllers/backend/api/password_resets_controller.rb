class Backend::Api::PasswordResetsController < Backend::Api::ApplicationController
  skip_before_action :require_login

  def create
    admin = Admin.find_by(email: params[:email].downcase)

    if admin
      admin.create_reset_digest
      Backend::AdminMailer.password_reset(admin).deliver

      render json: { info: 'パスワード再設定用のメールが送信しました。' }
    else
      render json: { errors: ['メールアドレスが存在しません。'] }
    end
  end
end
