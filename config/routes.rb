Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  mount LetterOpenerWeb::Engine, at: "/letter_opener" unless Rails.env.production?

  scope module: :frontend do
    root 'index#index'
  end

  namespace :backend do
    root to: 'index#index'
    get '/login', to: 'sessions#new'

    namespace :api do
      get '/authenticate', to: 'auth#authenticate'
      post '/login', to: 'sessions#create'
      delete '/logout', to: 'sessions#destroy'
    end
  end
end
