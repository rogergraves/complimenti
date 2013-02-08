class SignupController < ApplicationController
  def new
    @respondent = Respondent.create(:source => params[:t])
    render "index"
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
  end
end
