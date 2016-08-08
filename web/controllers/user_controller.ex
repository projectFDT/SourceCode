defmodule Foundation.UserController do
  use Foundation.Web, :controller

  alias Foundation.User

  require Logger

  def new(conn, _params) do
    changeset = User.changeset(%User{})
    Logger.debug(inspect(changeset))
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"user" => user_params}) do
    changeset = User.changeset(%User{}, user_params)
    Logger.debug(inspect(changeset))
    case Repo.insert(changeset) do
      {:ok, _user} ->
        conn
        |> put_flash(:info, "User created successfully.")
        |> redirect(to: user_path(conn, :index))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

end
