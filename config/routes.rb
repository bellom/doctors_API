Rails.application.routes.draw do
  scope 'api' do
    resources :doctors, only: :index
    resources :users, only: [:create, :index] 
    resources :appointments, only: [:create, :index]
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  
end