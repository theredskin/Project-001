class tempConverter{
    constructor(tempType, temp) {

        this.tempType = tempType;
        this.temp = temp;

        if (tempType === "Farenheight" || tempType === "farenheight" || tempType === "F" || tempType === "f")   {
            
            let tempType = "Farenheit";
            //document.getElementById('header').innerHTML = tempType;
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

}

//myTemp = new tempConverter("C", 25);
//module.export.tempCoverter = tempConverter;

// var names = ["Joselyn", "Erika", "Jenna"];

// console.log(names);
// console.log(names.length);
// console.log(names.sort());

// var name2 = new String('ryuk');
// console.log(name2);


// const person = {
//     name: '',
//     isHuman: true,
//     introduction: function() {
//         console.log(`Hello! My name is ${this.name}. Am I human? ${this.isHuman}`);
         
//     }

// }


// const Joselyn = Object.create(person);
// Joselyn.name = "Joselyn Pivarel";
// Joselyn.age = 23;
// Joselyn.ethnicity = "Hispanic";
// Joselyn.color = "Brown";
// Joselyn.language = "Biligual";

// console.log(Joselyn);
// console.log(person);

function personBuilder(first, last, age){
    this.first = first; 
    this.last = last; 
    this.age = age;
    // this.hairColor = hairColor;
    // this.height = height;
   
    let name = this.first + " " + this.last;

    (function() {
        console.log(`Hello! I am ${name} and my age is: ${age}`);
    })();
    // return this;
}
personBuilder.prototype.nationality() =   (function(){
    console.log(`I am ${this.nationality}`);
})();

let p1 = new personBuilder("Matthew","Lane", 23);
p1.nationality = "American"; 
// console.log("\n\n",p1,"\n\n");
