defmodule Foundation.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do

    create table(:users) do

      add :username, :string
      add :email, :string
      add :user_id_hash, :string, size: 10
      add :password_hash, :string

      timestamps()
    end

    create unique_index(:users, [:email])
    create unique_index(:users, [:username])
    create unique_index(:users, [:user_id_hash])

  end
end
