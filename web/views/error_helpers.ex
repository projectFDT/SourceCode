defmodule Foundation.ErrorHelpers do
  @moduledoc """
  Conveniences for translating and building error messages.
  """

  use Phoenix.HTML

  @doc """
  This is a helper method that was created in order to ouput all the current
  errors associated with a field. The error_tag method only provides a single
  error this however returns all errors associated with the given key.
  """
  def get_error_list(error_keyword, key) do
    Keyword.get_values(error_keyword_list, key)
  end

  @doc """
  Generates the inlined error tag. Since the error_tag helper does not provide
  a list of all things that may be incorrect we use a special method in order to
  grab all such possible values. This method then is used to output each of the
  values from that list one-by-one
  """
  def generate_content_tag(error) do
    content_tag :span, translate_error(error), class: "help-block"
  end
  @doc """
  Generates tag for inlined form input errors.
  """
  def error_tag(form, field) do
    if error = form.errors[field] do
      content_tag :span, translate_error(error), class: "help-block"
    end
  end

  @doc """
  Translates an error message using gettext.
  """
  def translate_error({msg, opts}) do
    # Because error messages were defined within Ecto, we must
    # call the Gettext module passing our Gettext backend. We
    # also use the "errors" domain as translations are placed
    # in the errors.po file.
    # Ecto will pass the :count keyword if the error message is
    # meant to be pluralized.
    # On your own code and templates, depending on whether you
    # need the message to be pluralized or not, this could be
    # written simply as:
    #
    #     dngettext "errors", "1 file", "%{count} files", count
    #     dgettext "errors", "is invalid"
    #
    if count = opts[:count] do
      Gettext.dngettext(Foundation.Gettext, "errors", msg, msg, count, opts)
    else
      Gettext.dgettext(Foundation.Gettext, "errors", msg, opts)
    end
  end
end
