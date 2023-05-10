Rails.application.routes.draw do
  # resources :beers

  namespace :api do
    namespace :v1 do
      get 'beers/index'
      post 'beers/create'
      get 'beers/edit/:id', to: 'beers#edit'
      post 'beers/update'
      delete 'beers/:id', to: 'beers#destroy'
    end
  end

  root 'pages#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resource :factories, only: %i[create destroy] if Rails.env.test?
end
