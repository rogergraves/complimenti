Complimenti::Application.routes.draw do
  get "signup/index"

  get "signup/create"

  get "signup/edit"

  root :to => "signup#index"

end
