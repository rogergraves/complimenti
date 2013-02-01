Complimenti::Application.routes.draw do

  resources :respondent

  root :to => "respondent#new"

end
