function placeOrder() {
    var xhtmlPrice = 19.99;
    var phpPrice = 86.00;
    var jqueryPrice = 55.00;

    var xhtml = document.getElementById("XHTML").value;
    var php = document.getElementById("PHP").value;
    var jquery = document.getElementById("JQuery").value;

    if(xhtml.length == 0 || isNaN(xhtml)) {
        alert("The quantity for 'Basic HTML' is invalid!")
    }

    if(php.length == 0 || isNaN(php)) {
        alert("The quantity for 'Intro to PHP' is invalid!")
    }

    if(jquery.length == 0 || isNaN(jquery)) {
        alert("The quantity for 'Advanced JQuery' is invalid!")
    }

    if(xhtml.length != 0 && php.length != 0 && jquery.length != 0) {
    var xhtmlTotal = xhtmlPrice * xhtml;
    var phpTotal = phpPrice * php;
    var jqueryTotal = jqueryPrice * jquery;
    var final = xhtmlTotal + phpTotal + jqueryTotal;

    document.getElementById("orderDetails").innerHTML = "<b>Basic XHTML (Quantity = " + xhtml + "): $" + xhtmlTotal.toFixed(2) + "<br>Intro to PHP (Quantity = " + php + "): $" 
    + phpTotal.toFixed(2) + "<br>Advanced JQuery (Quantity = " + jquery + "): $" + jqueryTotal.toFixed(2) + "<br><br>Final Total: $" + final.toFixed(2);
    }
} 
