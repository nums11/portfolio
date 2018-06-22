$(document).on 'turbolinks:load', ->
return unless $('meta[name=psj]').attr('controller') == 'main'

alert("Hello World");
