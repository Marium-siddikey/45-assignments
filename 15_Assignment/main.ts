let guestList = ["merium", "hani", "zain"];

let notComing = guestList [0];

console.log(notComing, "Not coming");

guestList.splice(0 , 1 ,  "Amir");

guestList.forEach(guest => console.log (`salam ${guest}, would you like to hangout with me?`));
