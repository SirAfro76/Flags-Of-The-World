// Console message
function message_fetch() {
    fetch('../php/signup.php')
    .then(Response => Response.json())
    .then(yolo => {
            const yolo = data.yolo
            document.getElementById('message_check').textContent = yolo;
        })
        .catch(error => console.error('Failed to Recieve message', error));
}
message_fetch();