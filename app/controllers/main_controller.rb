require 'sendgrid-ruby'
# include SendGrid

class MainController < ApplicationController
  def index
  end

  def email
	from = SendGrid::Email.new(email: 'test@example.com')
  	subject = 'WEBSITE MESSAGE'
  	to = SendGrid::Email.new(email: 'numsmt2@gmail.com')
  	content = SendGrid::Content.new(type: 'text/plain', value: 'This is a message from your portfolio website!')
  	mail = SendGrid::Mail.new(from, subject, to, content)
  	# puts JSON.pretty_generate(mail.to_json)
  	puts mail.to_json
	
  	sg = SendGrid::API.new(api_key: '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', host: 'https://api.sendgrid.com')
  	response = sg.client.mail._('send').post(request_body: mail.to_json)
  	puts response.status_code
  	puts response.body
  	puts response.headers

  end
end
