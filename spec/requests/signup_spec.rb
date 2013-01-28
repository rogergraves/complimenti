require 'spec_helper'

describe "GET /" do
  context "coming in normally" do
    it "should create a new Respondent entry" do
      Respondent.count.should == 0
      get new_signup_path
      Respondent.count.should == 1
    end
  end

  context "coming from ad"
end