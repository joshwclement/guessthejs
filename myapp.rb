# myapp.rb
require 'sinatra'
set :bind, '0.0.0.0'

# CSS Grid sandpit
get '/' do
	erb :quiz
end
