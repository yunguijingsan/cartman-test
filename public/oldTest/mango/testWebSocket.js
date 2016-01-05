var ws = new WebSocket("ws://172.18.33.99:8080/user/websocket");

ws.open = function () {
    console.log("open");
}
ws.onmessage = function (evt) {
    evt.data;
}
ws.onclose = function(){
    console.log("close")
}

ws.onerror = function(){
    console.log("error");
}