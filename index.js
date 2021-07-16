// Code your solutions in this file
for (let age=30;  age <40; age++) {
    console.log (`I'm ${age} years old. Happy birthday to me!`);
    
}

const gifts = ["Teddy Bear","Drone","Doll"]

function wrapGifts(gifts) {
    for (let i=0; i <gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }
    return gifts
    
}

wrapGifts(gifts);

const names = [ 'Lisa', 'Kaitlin', 'Jan']
const event = `surprise`


function writeCards (names, event) {
    let newArray = []
    for (let i=0; i <gifts.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return newArray
}

writeCards()

function countDown(x) {
    let countdown = x;
    while (countdown>=0) {
        console.log(countdown --)
    }
return x
}

countDown();




