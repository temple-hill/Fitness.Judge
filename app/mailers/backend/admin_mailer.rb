class Backend::AdminMailer < ApplicationMailer

  def password_reset(admin)
    @admin = admin

    mail(
      to: admin.email,
      subject: '【審査in】パスワード再設定',
      body: render_to_string(
        template: 'mailer/backend/password_reset',
        layout: false
      )
    )
  end
end
