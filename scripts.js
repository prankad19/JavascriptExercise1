var temp = prompt("Please enter a number");
if (Number(temp) || Number(temp) === 0) {
  var table = "<table border=1>" + "<th>" + "Fahrenheit" + "</th>" + "<th>" + "Celcius" + "</th>";
  for (var i=0; i<10; i++) {
    var temp2 = (5/9 * (temp - 32));
    table = table + "<tr>" + "<td>" + temp + "</td>" + "<td>" + temp2 + "</td>" + "</tr>";
    document.getElementById("unique").innerHTML = table;
    var temp = (temp - 5);
    table = table + "</table";
  }
}else {
   alert("Error.  Please enter a number.");
}
