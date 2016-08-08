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

    get "/", PageController, :index
    get "/about", PageController, :about
    get "/contact", PageController, :contact

    resources "/users", UserController, only: [:create, :new]
    get "/users/:user_id_hash", UserController, :show

  end

  # Other scopes may use custom stacks.
  # scope "/api", Foundation do
  #   pipe_through :api
  # end
end
