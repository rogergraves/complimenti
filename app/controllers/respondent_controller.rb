class RespondentController < ApplicationController
  def new
    @respondent = Respondent.create

    logger.info "\n\n!!!!!!!!!!!!!!!!!!! respondent_controller#new called! params: #{params.inspect} !!!!!!!!!!!!!!!!!!!!!!!!!!\n\n"
  end

  def create
    logger.info "\n\n!!!!!!!!!!!!!!!!!!! respondent_controller#create called! params: #{params.inspect} !!!!!!!!!!!!!!!!!!!!!!!!!!\n\n"

    @respondent = Respondent.create(params)

    respond_to do |format|
      format.html
      format.json {
        render :json => @respondent.to_json
      }
    end
  end

  def update
    logger.info "\n\n!!!!!!!!!!!!!!!!!!! respondent_controller#update called! params: #{params.inspect} !!!!!!!!!!!!!!!!!!!!!!!!!!\n\n"
    @respondent = Respondent.find(params[:id])

    logger.info "\n\n!!!!!!!!!!!!!!!!!!! respondent_controller#update called! params: #{params.inspect} !!!!!!!!!!!!!!!!!!!!!!!!!!\n\n"

    @respondent.update_attributes!(:email => params[:respondent][:email], :number_of_donors => params[:respondent][:number_of_donors], :event => params[:respondent][:event])
  end
end
