use Mix.Config

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with brunch.io to recompile .js and .css sources.
config :foundation, Foundation.Endpoint,
  http: [port: System.get_env("WEB_PORT")],
  debug_errors: true,
  code_reloader: true,
  check_origin: false,
  watchers: [
    #For front end development you might want to add, the "--watch" parameter too.
    node: ["node_modules/webpack/bin/webpack.js", "--color","--watch",
            "--display-error-details", cd:  Path.expand("..", __DIR__)]
  ]


# Watch static and templates for browser reloading.
config :foundation, Foundation.Endpoint,
  live_reload: [
    patterns: [
      ~r{priv/static/.*(js|css|png|jpeg|jpg|gif|svg)$},
      ~r{priv/gettext/.*(po)$},
      ~r{web/views/.*(ex)$},
      ~r{web/templates/.*(eex)$}
    ]
  ]

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 20

# Configure your database
config :foundation, Foundation.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("FOUNDATION_DATABASE_USER"),
  password: System.get_env("FOUNDATION_DATABASE_PASSWORD"),
  database: "foundation_dev",
  hostname: System.get_env("FOUNDATION_DATABASE_URL"),
  pool_size: 10,
  port: System.get_env("FOUNDATION_DATABASE_PORT")
