
max = (a,b) ->
  if a > b 
    a
  else
    b


sum = (array) ->
  s = 0
  s+=i for i in array
  s


freq = (s) ->
  obj = {}
  for i in s
    if obj[s[i]] 
      obj[s[i]]++
    else 
      obj[s[i]] = 1
  obj



button = $("#mybutton")

button.click (event) ->
  console.log event
  alert("Dre mol vun Hääze: Kölle Alaaf! Ruby Allaf! Javascript Alaaf!!!")


optimizationLibLink = $("#optimization-libs")
analysisLibLink = $("#analysis-libs")
optimizationLibs = $("#optimization-lib-links")
analysisLibs = $("#analysis-lib-links")

optimizationLibLink.click (event) ->
  optimizationLibs.toggle()
  event.preventDefault()

analysisLibLink.click (event) ->
  analysisLibs.toggle()
  event.preventDefault()



ps = $("p")

console.log(ps)

ps.each (index, element) ->
  console.log($(element).text().length)
  if $(element).text().length > 500
    console.log(element)
    link_less = $("<a href=\"#\", class= \"navigationlink\" > less </a>")
    $(element).append(link_less)
    
    subs = $(element).text().substring(0, 400) + ("...")
    $(element).hide()
    parent = $(element).parent()
    link_more = $("<a href=\"#\", class= \"navigationlink\"> more </a>")
    p = $("<p>" + subs + "</p>")
    p.append(link_more)

    parent.after(p)
    
    link_more.click (event) ->
      p.hide()
      $(element).show()
      event.preventDefault()


    link_less.click (event) ->
      $(element).hide()
      p.show()
      event.preventDefault()



licenseCount = $("#NumberOfLicenses")

licenseCount.change (event) ->
  alert parseFloat(licenseCount.val() * 2000) + "€"


  $ ->
    $('#question').submit (event) ->
      form = $(this)
      $.post(form.attr('action'), form.serialize(), () ->
        console.log("posted")
        alert "Ihre Frage wurde gespeichert."
      , 'json'
      )
      event.preventDefault()
