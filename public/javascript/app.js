/*alert('hello world!');
console.log("test");

var eingabe = confirm("Wollen Sie das wirklich?");

if (eingabe) {
	console.log("Einverstanden");
} else {
	console.log("Nicht einverstanden");
}
*/
/*
function max(a,b) {
  if(a > b) return a;
  return b;
}

function sum(array) {
  var s = 0;
  for(var i = 0; i < array.length; i++) {
    s += array[i];
  }
  return s;
}

function freq(s){
  var obj = {};
  for(var i = 0; i < s.length; i++) {
    if(obj[s[i]]) obj[s[i]]++;
    else obj[s[i]] = 1;
  }
  return obj;
}

var answer = {answer: 42};

function MyObject() {
  this.question = "unknown";
}
MyObject.prototype = answer;

var obj = new MyObject(); // {question: "unknown", answer: 42}

obj.__proto__; // {answer: 42}


//button ist leer, wenn er nicht auf der jeweiligen Seite existiert
var button = $("#mybutton")//document.getElementById('mybutton');

//ist button lee, passiert nichts
button.click(function(event) {
//button.on('click', function(event) {
  console.log(event);
  alert("Dre mol vun Hääze: Kölle Alaaf! Ruby Allaf! Javascript Alaaf!!!");
});


var optimizationLibLink = $("#optimization-libs");
var analysisLibLink = $("#analysis-libs");
var optimizationLibs = $("#optimization-lib-links");
var analysisLibs = $("#analysis-lib-links");

optimizationLibLink.click(function(event){
  optimizationLibs.toggle();
  event.preventDefault();
})

analysisLibLink.click(function(event){
  analysisLibs.toggle();
  event.preventDefault();
})

var ps = $("p");

console.log(ps);

ps.each(function(index, element){
  console.log($(element).text().length);
  if($(element).text().length > 400){
    var link_less = $("<a href=\"#\", class= \"navigationlink\" > less </a>");
    $(element).append(link_less);
    
    var subs = $(element).text().substring(0, 400) + ("...");
    $(element).hide();
    var parent = $(element).parent();
    var link_more = $("<a href=\"#\", class= \"navigationlink\"> more </a>");
    var p = $("<p>" + subs + "</p>");
    p.append(link_more);
    
    parent.after(p);
    
    link_more.click(function(event){
      p.hide();
      $(element).show();
      event.preventDefault();
    });
    
    link_less.click(function(event){
      $(element).hide();
      p.show();
      event.preventDefault();
    });
  }
  
});

var licenseCount = $("#NumberOfLicenses");

licenseCount.change(function(event){
  alert(parseFloat((licenseCount.val()) * 2000) + "€");
});




$(document).ready(function(){
  

  $('#question').submit(function(event){
    var form = $(this);
    $.post(
      form.attr('action'), 
      form.serialize(),
      function(){
        console.log("posted");
        alert("Ihre Frage wurde gespeichert.");
      },
      'json'
    );
    event.preventDefault();
  /*
    $.ajax("/question", {
    	data: form.serialize(),
    	dataType: 'json',			
    	error: function(){
    	  alert("Fehler");
    	  },	
    	success:   function(){
          alert("Ihre Frage wurde gespeichert.")
        },
    	type: 'POST'
    });
  */
//  });

//});
