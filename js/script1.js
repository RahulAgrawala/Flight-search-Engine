var json = [ {
  "origin": "Delhi",
          "destination": "Pune",
          "date": "29-06-2018",
          "passanger":"1",
          "rs":"1000",
          "time":"10.00 AM"
},
{
  "origin": "Pune",
  "destination": "Delhi",
  "date": "29-07-2018",
  "passanger":"1",
  "rs":"2000",
  "time":"10.00 PM"
},
{
  "origin": "Pune",
  "destination": "Delhi",
  "date": "29-07-2018",
  "passanger":"1",
},

{
  "origin": "indore",
  "destination": "Delhi",
  "date": "29-08-2018",
  "return_date":"30-08-2018",
  "passanger":"2",
  "rs":"3000",
  "time":"11.00 PM"
},

{
  "origin": "Agra",
  "destination": "Delhi",
  "date": "31-08-2018",
  "return_date":"3-09-2018",
  "passanger":"1",
  "rs":"4000",
  "time":"11.00 PM"
}, ];

function matchIt(input) {
var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
return json.filter( function(par){

return par.origin.match(reg)
} );
}

function changeInput(val) {
if (val.length == 0) return;
var autoCompleteResult = matchIt(val);
document.getElementById("result").innerHTML = autoCompleteResult.map(function(i){
return i.origin;
} ).join('<br>')
}
