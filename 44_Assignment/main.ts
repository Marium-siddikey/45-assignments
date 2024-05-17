//defining a function by using rest parameters
function makeSandwich(... items: string[]){
    console.log("\n lets make a chicken cheese sandwich: \n");
    items.forEach(singleItem => console.log(singleItem));

    console.log("\n Now enjoy your sandwich");
}

//calling function with 3 arrguments
makeSandwich("chicken", "cheese", "mayo and ketchup", "with some salads");

makeSandwich("taccosSandwich", "with loaded fries");

makeSandwich("parhata", "including colanext");