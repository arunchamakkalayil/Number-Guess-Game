
let number;

function start(){
    let random = Math.random() * 101
    let final = Math.floor(random)
    console.log(final)
    do{
        number = prompt('Enter a number between 0 - 100')
        if(number==final){
            alert('Congratulations, You Won')
           
        }else{
            alert('Wrong Guess')
        }
    }while(number != final)
}

