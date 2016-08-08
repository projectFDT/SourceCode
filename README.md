# Foundation

## Installing Dependencies
___
  * The first dependency that we need to install is Elixir. Find your
  distribution and follow the instructions on this [`site`](http://elixir-lang.org/install.html)

  * The second thing that we need to ensure that we have is Phoenix. Here are
  the instructions for that [`Phoenix Install Instructions`](http://www.phoenixframework.org/docs/installation)
  **Note: You don't need to install Erlang as you will have already done that but make sure you have all other dependencies installed.**

  * Final note: Make sure you have Node.js installed as our project relies on
  that.

## Setting Up the Environment Variables
  * This project makes use of environment variables so in order for the project to
  run we need to set these up. These variables are located in `config/dev.exs`
  The values of the database variables are available over Slack.

  * Line 10: `http: [port: System.get_env("WEB_PORT")]` this denotes which port you
  want your app to use when you fire it up in the browser.

  * Line 42: `username: System.get_env("FOUNDATION_DATABASE_USER")` this denotes your
  database username.

  * Line 43: `password: System.get_env("FOUNDATION_DATABASE_PASSWORD")` this denotes
  your database password.

  * Line 45: `port: System.get_env("FOUNDATION_DATABASE_URL")` this denotes where
  the database is at.(Our case we are using amazon.)

  * Line 47: `port: System.get_env("FOUNDATION_DATABASE_PORT")` this denotes what port
  your database is running at.

  * In order to run the app these environment variables need to be defined in the
  .bashrc


## Running the Project

To start your Phoenix app:

  * Install npm dependencies with `npm install`
  * Install dependencies with `mix deps.get`
  * Start Phoenix endpoint with `mix phoenix.server`
