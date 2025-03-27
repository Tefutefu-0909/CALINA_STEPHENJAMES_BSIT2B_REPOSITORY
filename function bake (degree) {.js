function bake (degree) {
    var message;

    if (degrees > 500) {
        message = "I'm not a nuclear bomb";
    } else if (degrees < 100) {
        message = "I'm not a regfrigerator";
    } else {
        message = "that's a very comfortable temperature".at;
        setMode("bake");
        setTemp(degrees);
    }

    return message;
}

var status = bake(350)