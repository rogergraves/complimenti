class Respondent < ActiveRecord::Base
  attr_accessible :number_of_donors, :email, :event, :source
end
