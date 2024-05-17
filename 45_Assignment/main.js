//def a function to create a car object with opyional options
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize a car object with manufacturer and models
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //add aditional options to the car object
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the fuction to create a car object
var my_car = create_car("nissan", "sunny", "color: white", "sunRoof: true");
//print the variable to ensure all the info is stored properly
console.log(my_car);
