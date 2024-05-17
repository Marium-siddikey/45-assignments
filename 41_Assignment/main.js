// Define a function to print each magician names from array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define an array containing magicians name
var magician_names = ["harry porter", "marium", "hani"];
//call the function to print each magician name
show_magicians(magician_names);
