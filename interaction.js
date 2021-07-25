class tempConverter{
    constructor(tempType, temp) {


        this.tempType = tempType;
        this.temp = temp;

        if (tempType === "Farenheight" || tempType === "farenheight" || tempType === "F" || tempType === "f")   {
            
            let tempType = "Farenheit";
            document.getElementById('header').innerHTML = tempType;
            toCelsius(this.temp);

        }   else if (tempType === "Celsius" || tempType === "celsius" || tempType === "C" || tempType === "c")    {
            toFarenheit(this.temp);
        }   else {
            console.log("---Error---");
        }

        function toCelsius(temp) {
            console.log("Converting to Celsius...");
        }

        function toFarenheit(temp) {
            console.log("Converting to Farenheight...");
        }
        
    }
    // toFarenheight; 
    // toCelsius; 
}

myTemp = new tempConverter("F", 25);

// module.export = tempConverter;