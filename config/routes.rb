Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :follows, only: [:create, :show, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end


end
