require 'sendgrid-ruby'

class MainController < ApplicationController
  def index
  end

  def email
	# data = JSON.parse('{
	#   "personalizations": [
	#     {
	#       "to": [
	#         {
	#           "email": "numsmt2@gmail.com"
	#         }
	#       ],
	#       "subject": "EMAIL FROM WEBSITE"
	#     }
	#   ],
	#   "from": {
	#     "email": "test@example.com"
	#   },
	#   "content": [
	#     {
	#       "type": "text/plain",
	#       "value": "This is an email from your website."
	#     }
	#   ]
	# }')
	# sg = SendGrid::API.new(api_key: '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')
	# response = sg.client.mail._("send").post(request_body: data)
	# puts response.status_code
	# puts response.body
	# # puts response.parsed_body
	# puts response.headers

	from = SendGrid::Email.new(email: 'test@example.com')
  	subject = 'WEBSITE MESSAGE'
  	to = SendGrid::Email.new(email: 'numsmt2@gmail.com')
  	content = Content.new(type: 'text/plain', value: 'Message From Website!')
  	mail = Mail.new(from, subject, to, content)
  	# puts JSON.pretty_generate(mail.to_json)
  	puts mail.to_json
	
  	sg = SendGrid::API.new(api_key: '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', host: 'https://api.sendgrid.com')
  	response = sg.client.mail._('send').post(request_body: mail.to_json)
  	puts response.status_code
  	puts response.body
  	puts response.headers

  end
end
