// creating a guest list Arrary
let guestList = ["merium", "hani", "zain"];

//Making variable for those who are not coming 
let notComing = guestList [0];

//printing the name how are not coming
console.log(notComing, "Not coming");

//Adding and removing guests
guestList.splice(0 , 1 ,  "Amir");

//messagefor good news 
console.log("Good news ! we have found a bigger dinning table for dinner");

//adding a new value at starting index of arrary
guestList.unshift("Ali");

//Adding a new value at ending index of arrary
guestList.push("zainab");

//aget a middle index of our guest list array
let middleIndex: number =Math.floor(guestList.length / 2 );

//adding a new guest to middle index of arrary
guestList.splice(middleIndex, 0, "fathey" );

console.log("updated list of guest");

guestList.forEach(oneguest => console.log (`salam ${oneguest}, would you like to have dinner with me?`));

//inform that only two of them are allowed on dinner
console.log("Unfortunately the dinner table has'nt arrived yet, so I've to invite any two of you for the dinner");

//Using while loop to remove guests for two guest remain.
while(guestList.length > 2) {
let removeGuests = guestList.pop();
console.log(`sorry, ${removeGuests}I can't inivite you to dinner`);
}

//printing invitation to the last two guests
console.log("Invitation to the last two guests");
guestList.forEach(lasttwo => console.log(`luckyly ${lasttwo}, you are still invited to dinner`));

//removing last two guests from the list
guestList.pop();
guestList.pop();

console.log("Empty List:",guestList);
