//def a function to create a car object with opyional options
function create_car(manufacturer, model, ...options){
    //initialize a car object with manufacturer and models
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    
    //add aditional options to the car object

    options.forEach(options => {
        let [key, value] = options.split(":");
        car[key.trim()] = value.trim();
    })

    return car;
}
//call the fuction to create a car object
let my_car = create_car("nissan", "sunny", "color: white", "sunRoof: true",);

//print the variable to ensure all the info is stored properly
console.log(my_car);
