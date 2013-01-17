source 'https://rubygems.org'

gem 'rails', '3.2.11'                             # If you don't know what this is, you made a wrong turn somewhere
gem 'pg'                                          # Postgres gem
gem 'heroku'                                      # Heroku hosting
gem 'jquery-rails'                                # Include jquery assets in pipeline
gem "jquery-ui-rails", "~> 2.0.0"                 # More jquery goodies
gem "activerecord-postgres-hstore", "~> 0.4.1"    # allow hstore fields to replace traditional table fields

group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
end

group :development, :test do
  gem 'annotate'                    # Allows posting of database schema comments
  gem 'awesome_print'               # Nicely formatted data structures in console, for example "ap User.first"
end

