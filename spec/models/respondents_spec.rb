require 'spec_helper'

describe Respondent do
  context "records :email, :number_of_donors, :source, :event" do
    let(:respondent) {Respondent.create(:number_of_donors => '400', :email => 'someone@gmail.com', :event => 'Wedding', :source=>'Facebook Ad')}

    it "should have a valid record" do
      respondent.number_of_donors.to_i.should == 400
      respondent.email.should == 'someone@gmail.com'
      respondent.event.should == 'Wedding'
      respondent.source.should == 'Facebook Ad'

    end

  end

end