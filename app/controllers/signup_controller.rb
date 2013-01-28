class SignupController < ApplicationController
  def new
    @respondent = Respondent.create(:source => params[:t])

    render "index"
    logger.info "\n\n!!!!!!!!!!!!!!!!!!! signup_controller#new called! params: #{params.inspect} !!!!!!!!!!!!!!!!!!!!!!!!!!\n\n"
  end

  def create
    logger.info "\n\n!!!!!!!!!!!!!!!!!!! signup_controller#create called! params: #{params.inspect} !!!!!!!!!!!!!!!!!!!!!!!!!!\n\n"

    @respondent = Respondent.create(params)

    respond_to do |format|
      format.html
      format.json {
        render :json => @respondent.to_json
      }
    end
  end

  def update
    logger.info "\n\n!!!!!!!!!!!!!!!!!!! signup_controller#update called! params: #{params.inspect} !!!!!!!!!!!!!!!!!!!!!!!!!!\n\n"

  end
end
