const socket = new WebSocket("ws://localhost:8080");

socket.onopen = () => {
    console.log("WebSocket connection established.");
}

socket.addEventListener("open", (event) => {
socket.send("Hello Server!");
});

socket.addEventListener("message", (event) => {
console.log("Message from server ", event.data);
});

socket.onclose = (event) => {
    console.log("WebSocket connection closed with code:", event.code);
};