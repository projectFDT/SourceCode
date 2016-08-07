defmodule Foundation.PageController do
  use Foundation.Web, :controller

  def about(conn, _params) do
    render conn, "about.html"
  end

  def contact(conn, _params) do
    render conn, "contact.html"
  end

  def index(conn, _params) do
    render conn, "index.html"
  end

end
