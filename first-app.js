// the alphabet: 'abcdefghijklmnopqrstuvwxyz'
// function findTheNumberPlate(customerID){
    //the code goes here...
    
//     const padZero = num => String(num).padStart(3,0);
    
//     const alpha = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m" , "n", "o", "p", "q", "s", "t", "u", "v", "w", "x", "y", "z"];
    
//     let id = +customerID;
//     let answer = ""
    
//     if(Math.floor(id/999) === 0) {
//       answer = `aaa${padZero(id+1)}`
      
//     }else {
//       let alphaId = Math.floor(id/999);
//       let rem = id % 999
//       let index = 0;
//       let changing = 
//       let alphaSeq = "baa";
      
//       while (alphaId > alpha.length) {
//         alphaId -= 25
        
//         ++index
        
//       }
//       if(index > 0) alphaSeq = `${alpha[alphaId-1]}ba`
      
//       answer = `${alphaSeq}${padZero(rem+1)}`
      
//     }
//     return answer;
//   }


// const getRate = (startPriceOld, startPriceNew , savingperMonth, percentLossByMonth) => {
//     // Define the variables locally within the func
//     let oldCar = startPriceOld;
//     let newCar = startPriceNew ;
//     let saving = 0;
//     let rate = percentLossByMonth;

//     let months = 0;
//     while ((oldCar + saving) < newCar) {
//         ++months

//         console.log(months, "months")
//         if(months % 2 === 0) rate += 0.5
        
//         console.log(rate, "rate")
        
//         oldCar -= (oldCar * (rate/100))
//         newCar -= (newCar * (rate/100))
//         saving += savingperMonth
    
//     }

//     let change = (oldCar + saving) - newCar;
     
//     return [months, change.toFixed(0) * 1]
// }

// console.log(getRate(2000, 8000, 1000, 1.5))


const fs = require("fs")

// fs.writeFileSync("hello.html", "Hello from Node.js")

class Book {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.printFunc()    
        this.printDist()    
    }

    printFunc() {
        console.log(this)
    }

    printDist = () => {
        console.log(this.name)
    }
}


const John = new Book("John", 50)
// John.printDist()
// John.printFunc()