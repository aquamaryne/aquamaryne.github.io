function Time(){
    let date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if(hour === 0){
        hour = 24
    };

    if(hour > 24){
        hour = hour - 24;
    };

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    let time = hour + ":" + min + ":" + sec;
    let fullDate = day + "/" + month + "/" + year;
    let t = setTimeout(function() { Time() }, 1000);

    document.getElementById("time").innerText = time;
    document.getElementById("date").innerText = fullDate;
};

Time();
