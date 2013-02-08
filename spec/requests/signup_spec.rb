require 'spec_helper'

describe "GET /" do
  context "coming in normally" do
    it "should create a new Respondent entry" do
      Respondent.count.should == 0
      get "/"
      Respondent.count.should == 1
    end
  end

  context "coming from ad", :js => true do
    it "should create a new Respondent entry with tracking info attached" do
      get "/?t=stupid_facebook_ad"
      Respondent.first.source.should == 'stupid_facebook_ad'
    end
  end
end