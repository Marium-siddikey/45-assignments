//defining a function by using rest parameters
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n lets make a chicken cheese sandwich: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now enjoy your sandwich");
}
//calling function with 3 arrguments
makeSandwich("chicken", "cheese", "mayo and ketchup", "with some salads");
makeSandwich("taccosSandwich", "with loaded fries");
makeSandwich("parhata", "including colanext");
