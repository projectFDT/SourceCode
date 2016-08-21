defmodule Foundation.Router do
  use Foundation.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  # Other scopes may use custom stacks.
  scope "/api", Foundation do
    pipe_through :api

    scope "/v1" do
      #Future api calls go here
    end

  end

  scope "/", Foundation do
    pipe_through :browser # Use the default browser stack
    get "/*path", PageController, :index

    #For now these are not commented out to allow the project to compile
    get "/", PageController, :index
    resources "/users", UserController, only: [:create, :new]
    get "/users/:user_id_hash", UserController, :show


  end

end
