class tempConverter{
    constructor(tempType) {

        if (tempType === "Farenheight" || tempType === "farenheight" || tempType === "F" || tempType === "f")   {
            console.log("Converting to Celsius...");
        }

        else if (tempType === "Celsius" || tempType === "celsius" || tempType === "C" || tempType === "c")    {
            console.log("Converting to Farenheight...");
        }

        else {
            console.log("---Error---");
        }

    }
    // toFarenheight; 
    // toCelsius; 
}

myTemp = new tempConverter("Celsius");

module.export = tempConverter;