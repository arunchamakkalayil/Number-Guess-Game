let random = Math.random() * 11
let final = Math.floor(random)
let number;

function start(){
    
    do{
        number = prompt('Enter a number between 0 - 10')
        if(number==final){
            alert('You Won')
            document.getElementById('message').innerText= 'Congratulations'
        }else{
            alert('Wrong Guess')
        }
    }while(number != final)
}

