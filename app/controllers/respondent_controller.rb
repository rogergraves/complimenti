class RespondentController < ApplicationController
  def new
    @respondent = Respondent.create(:source => params[:t])
  end

  def create
    @respondent = Respondent.create(params)

    respond_to do |format|
      format.html
      format.json {
        render :json => @respondent.to_json
      }
    end
  end

  def update
    @respondent = Respondent.find(params[:id])
    @respondent.update_attributes!(:email => params[:respondent][:email], :number_of_donors => params[:respondent][:number_of_donors], :event => params[:respondent][:event])
    render :nothing => true, :status => 200
  end
end
