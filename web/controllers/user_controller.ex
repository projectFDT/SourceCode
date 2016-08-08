defmodule Foundation.UserController do
  use Foundation.Web, :controller

  alias Foundation.User

  require Logger

  def new(conn, _params) do
    changeset = User.registration_changeset(%User{})
    Logger.debug(inspect(changeset))
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"user" => user_params}) do
    changeset = User.registration_changeset(%User{}, user_params)
    Logger.debug(inspect(changeset))
    case Repo.insert(changeset) do
      {:ok, _user} ->
        Logger.debug "User created successfully"
        conn
        |> put_flash(:info, "User created successfully.")
        |> redirect(to: page_path(conn, :index))
      {:error, changeset} ->
        Logger.debug "User creation failed"
        conn
        |> put_flash(:error, "Please fix the errors below")
        |> render("new.html", changeset: changeset)
    end
  end

end
