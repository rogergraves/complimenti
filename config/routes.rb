Complimenti::Application.routes.draw do

  resources :respondent
  match "/:id" => "respondent#new"

  root :to => "respondent#new"

end
