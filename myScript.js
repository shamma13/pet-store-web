function startTime() {
    var today = new Date();

    var date = 'Date: ' + today.getDate() + ' / ' + (today.getMonth() + 1) + ' / ' + today.getFullYear();

    document.getElementById("currentDate").innerHTML = date;

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    document.getElementById("currentTime").innerHTML = "Current Time: " + hours + ":" + minutes + ":" + seconds;

    setTimeout(function(){startTime()}, 1000);
}