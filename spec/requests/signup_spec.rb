require 'spec_helper'

describe "GET /" do
  context "coming in normally" do
    it "should create a new Respondent entry" do
      Respondent.count.should == 0
      get "/"
      Respondent.count.should == 1
    end
  end

  describe "coming from ad", :js => true do
    before do
      get "/?t=stupid_facebook_ad"
    end
    it "should create a new Respondent entry with tracking info attached" do
      Respondent.first.source.should == 'stupid_facebook_ad'
    end
    it "should capture entered information" do
      poll_until_true do
        page.has_content? "Giving and receiving"
      end

      sleep(10)
      #click_button("img#button_1")
      fill_in :event, :with => "Wedding"
      fill_in :number_of_donors, :with => "1000000"
      #click_button("img#button_2")

      fill_in :email, :with => "roger@something.com"
      #click_button("img#button_3")


      Respondent.first.event.should == "Wedding"
      Respondent.first.number_of_donors.should == "1000000"
      Respondent.first.email.should == "roger@something.com"
    end
  end
end