//array of current users
var currentusers = ["ayesha", "amna", "tayyaba", "nagina", "marium"];
//array of new users
var newusers = ["hamza", "basit", "ayesha", "amna", "mahad"];
//loop thtough newusers to check for users name availibility
newusers.forEach(function (new_one_user) {
    var ourcondition = currentusers.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    if (ourcondition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
