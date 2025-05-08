function sendMessage(){
    let messageBox = document.getElementById('message-content');
    messageBox.value = ''

    fetch('http://localhost:3000/info',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            name: 'Alice',
            age: 30
        })
    }).then(val=> val.json())
    .then((val)=> console.log(val,'Response recieved'))
}
