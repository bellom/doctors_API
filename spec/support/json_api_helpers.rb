# frozen_string_literal: true

module JsonApiHelpers
  def json
    JSON.parse(response.body)
  end
end
