var guestList = ["merium", "hani", "zain"];
var notComing = guestList[0];
console.log(notComing, "Not coming");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to hangout with me?")); });
