document.getElementById('cat-btn').addEventListener('click',getCat);
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

function getCat(){
    fetch('http://localhost:3000/getCat',{
        method : 'POST'
    }).then(val=> val.blob()).then((val)=>{
        let imgUrl = URL.createObjectURL(val);
        let cat = document.createElement('img')
        cat.src = imgUrl
        document.querySelector('.cat-container').append(cat);
        document.getElementById('cat-btn').removeEventListener('click',getCat,false);
    })
}
