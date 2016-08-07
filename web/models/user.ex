defmodule Foundation.User do
  use Foundation.Web, :model

  import Ecto.Changeset

  @fields ~w(name email password password_hash password_confirmation user_id_hash)a
  @required_fields ~w(name email password password_confirmation)a


  schema "users" do
    field :username, :string
    field :email, :string
    field :password, :string, virtual: true
    field :password_confirmation, :string virtual: true
    field :password_hash, :string
    field :user_id_hash, :string
    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, @fields)
    |> validate_required(@required_fields)
    |> validate_length(:username, min: 5, max: 32)
    |> unique_constraint(:username, message: "Username is already in use")
    |> unique_constraint(:email, message: "Email is already in use")
    |> validate_format(:username, ~r/\w/, message: "Alphanumeric characters only")
    |> validate_length(:password, min: 8, max: 100)
    |> validate_confirmation(:password, message: "Passwords do not match")
    |> generate_password_hash
  end

  defp generate_password_hash(changeset) do
    case changeset do
      %Ecto.changeset{valid?: true, changes: %{password: pass}} ->
        put_change(changeset, :password_hash, Comeonin.Bcrypt.hashpwsalt(pass))
      _ ->
        changeset
    end
  end

  defp random_string(length) do
    :crypto.strong_rand_bytes(length) 
  end

end
