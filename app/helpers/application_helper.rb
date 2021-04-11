module ApplicationHelper
  def flash_message_for_react
    flash.each do |type, message|
      return { type: type, message: message }.to_json
    end
  end
end
