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

function addTodo(){
    let toDo = prompt('Enter what you want to do.')
    fetch('http://localhost:3000/addTodo',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            string: toDo,
            done: false
        })
    }).then(val=> val.json())
    .then((val)=> console.log(val,'Response recieved'))
}

(function getTodos(){
    fetch('http://localhost:3000/getTodo',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            page: 1,
            limit : 5
        })
    }).then(val=> val.json())
    .then((val)=> console.log(val,'Response recieved'))
})()