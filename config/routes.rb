Rails.application.routes.draw do
  scope 'api' do
    resources :doctors
    resources :users
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
