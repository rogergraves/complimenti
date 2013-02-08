Capybara.configure do |config|
  config.server_port = 9887 + ENV['TEST_ENV_NUMBER'].to_i
end

module CapybaraHelper
  def poll_until_true(timeout = Capybara.default_wait_time, &block)
    timeout.times do
      return if yield
      sleep 1
    end
    assert false, "Poll failed to return true"
  end
end

RSpec.configure do |config|
  config.include CapybaraHelper, :type => :request
end
