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

  scope "/", Foundation do
    pipe_through :browser # Use the default browser stack

    get "*path", PageController, :index
  end

  scope "/api", Foundation do
    pipe_through :api
    scope "/v1" do
      post "/registrations", RegistrationController, :create
    end
  end
  # Other scopes may use custom stacks.
  # scope "/api", Foundation do
  #   pipe_through :api
  # end
end
