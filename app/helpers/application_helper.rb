module ApplicationHelper
  def flash_message_for_react
    flash.each do |type, message|
      return { type: type, message: message }.to_json
    end
  end

  def error_message(form, field)
    errors = form.object.errors[field]
    error_messages = []
    Array(errors).each do |error|
      field_name = I18n.t("activerecord.attributes.#{form.object.class.name.to_s.underscore}.#{field}")
      error_messages << "#{field_name}#{error}"
    end
    error_messages.join("\n")
  end
end
