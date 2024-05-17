//creating array
let user_name = ["marium", "hani", "zain", "kanza"];

//using foreach loop in array
user_name.forEach(oneUser => {
    if(oneUser === "admin"){
console.log(`hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`hello ${oneUser}, thank you for logging in again.`)
    }
})



