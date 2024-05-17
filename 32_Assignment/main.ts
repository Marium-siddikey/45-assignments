//array of current users
let currentusers = ["ayesha", "amna", "tayyaba", "nagina", "marium"]

//array of new users
let newusers = ["hamza", "basit", "ayesha", "amna", "mahad"]

//loop thtough newusers to check for users name availibility
newusers.forEach(new_one_user =>{

    //making condition for username already exist and save in our condition variable
    let ourcondition = currentusers.some(current_one_users =>current_one_users.toLowerCase() === new_one_user.toLowerCase())

    //print different msg using if-else statement
    if(ourcondition){
    console.log(`sorry ${new_one_user} is already taken!`)
}else{
    console.log(`This username ${new_one_user} is available`)
}
})