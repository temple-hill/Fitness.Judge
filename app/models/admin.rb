class Admin < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze
  has_secure_password

  before_save { self.email = email.downcase }
  validates :email, presence: true,
                    uniqueness: { case_sensitive: true },
                    format: { with: VALID_EMAIL_REGEX, allow_blank: true }
  validates :password, presence: true,
                       length: { minimum: 8, message: 'は8文字以上の英数字にしてください' },
                       format: { with: /\A[A-Za-z0-9]+\z/, message: 'には英数字のみが使えます' }
  validates :password_confirmation, presence: true
  # validate :current_password_correct, on: :update

  attr_accessor :current_password

  class << self
    def new_token
      SecureRandom.urlsafe_base64
    end
  end

  def name
    "#{family_name} #{given_name}"
  end

  def create_reset_digest
    update_columns(reset_password_token: Admin.new_token, reset_password_sent_at: Time.zone.now)
  end

  def password_reset_expired?
    reset_password_sent_at < 2.hours.ago
  end

  # def create_sorted_errors
  #   return if errors.blank?
  #   %i[email password password_confirmation].flat_map do |key|
  #     errors.full_messages_for(key)
  #   end.uniq
  # end

  # def update_sorted_errors
  #   return if errors.blank?
  #   %i[current_password password password_confirmation].flat_map do |key|
  #     errors.full_messages_for(key)
  #   end
  # end

  private

  # def current_password_correct
  #   errors[:current_password] << 'が間違っています' unless Admin.find(id).authenticate(current_password)
  # end
end
