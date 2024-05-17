//creating array
var user_name = ["marium", "hani", "zain", "kanza"];
//using foreach loop in array
user_name.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
