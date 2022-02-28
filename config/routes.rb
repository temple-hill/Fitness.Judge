Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  mount LetterOpenerWeb::Engine, at: "/letter_opener" unless Rails.env.production?

  scope module: :frontend do
    root 'index#index'
  end

  namespace :backend do
    root to: 'index#index'
    get '/login', to: 'sessions#new'
    post '/login', to: 'sessions#create'
    get '/password_resets/new', to: 'password_resets#new', as: :new_password_resets
    get '/password_resets/edit', to: 'password_resets#edit', as: :edit_password_resets
    put '/password_resets/update', to: 'password_resets#update', as: :update_password_resets

    namespace :api do
      get '/authenticate', to: 'auth#authenticate'
      post '/login', to: 'sessions#create'
      delete '/logout', to: 'sessions#destroy'
      scope :admins do
        get '/admin_list', to: 'admins#admin_list', as: :admin_list
        post '/create', to: 'admins#create', as: :create_admin
      end
      scope :password_resets do
        post '/create', to: 'password_resets#create', as: :create_password_resets
        put '/update', to: 'password_resets#update', as: :update_password_resets
      end
    end

    get '*/path', to: 'index#index'
  end
end
