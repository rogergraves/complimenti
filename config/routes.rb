Complimenti::Application.routes.draw do

  get "respondent/update"

  resources :signup

  resources :respondent

  root :to => "signup#new"

end
