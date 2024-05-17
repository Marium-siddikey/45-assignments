// making a function
function make_shirt (size: string= "large", printmsg: string = "i love typescript"){
    console.log(`creating a ${size} shirt with the ${printmsg} prints on shirt`)
}

//calling a function with b y default values
make_shirt();

//calling a function with medium size by default
make_shirt("medium")

//calling a function with small size by default
make_shirt("small", "i love javascript")

