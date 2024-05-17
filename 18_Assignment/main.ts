//Making an arrary of entires in its orignal order
let countriesToVisit: string[]=["Karachi", "Palestine", "Brazil", "Denmark", "Afghanistan" ]; 
console.log("Orignal order:", countriesToVisit);
 
//printing array in alphabetical order without modefiying the actual list
console.log("Alphabetical order:", [...countriesToVisit].sort());

//show that the array is still in Orignal order
console.log("still in Original order:", countriesToVisit);

//print the array in reverse order without modification
console.log("Reverse Order:", [...countriesToVisit].reverse());

//show that the array is still in Orignal order
console.log("still in Original order:", countriesToVisit);

//We have chnaged the original array order now
console.log("Orignal Array REverse:", countriesToVisit.reverse());

//prinitng back to show its orignal order
console.log("Back to orignal order:", countriesToVisit.reverse());

//order has been changed in alphabetical order now
console.log("sorted in alphabetical order:", countriesToVisit.sort)


//We have chnaged the original array order again
console.log("Orignal Array REversed again:", countriesToVisit.reverse());
