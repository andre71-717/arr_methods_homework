//Ստեղծել երկու select , առաջինում մարզերն են, երկրորդում՝ քաղաքները։ Ամեն մարզ ընտրելիս երկրորդում պիտի մնան միայն այդ մարզի քաղաքները։ 

// let regions = document.getElementById("region").value

// regions.addEventListener("change", function(){
//     let city =  document.getElementById("city").innerHTML=output
//     let output = "";

//     if(regions ==="Armavir"){
//         city = ["Ejmiatsin", "Hoktemberyan", "Arshaluys"]
//     }
//     else if(regions ==="Lori"){
//         city = ["Kirovakan", "Stepanavan", "Alaverdi"]
//     }
//     else{
//         city =[]
//     }

//     city.forEach(function(value) {
//         return output=output+ "<option>" + value + "</option>";
//     });
//         output= "<select>" + output + "</select"
// })

// Ստեղծել ֆունցկիա , getAvgAgeByColor անունով,
//  որը որպես արգումենտ ստանում է զանգված,
//  որի ամեն անդամը օբյեկտ է որտեղ գրված է մարդու մասին ինֆորմացիա (անուն, տարիք, մազերի գույն) եվ ստանում է երկրորդ արգումենտ մազերի գույն։ 
//  Ֆունկցիան պետք է վերադարձնի միջին տարիքը այն մարդկանց ում մազերի գույնը համապատասխանում է երկրորդ արգումենտով փոխանցված գույնին։
    // getAvgAgeByColor([
//     {name: "Joe", age: 13, hairColor: "red"}, 
//     {name: "Mike", age: 10, hairColor: "brown"}, 
//     {name: "Jane", age: 4, hairColor: "red"}, 
//     {name: "Susan", age: 30, hairColor: "brown"}
// ], "brown"); 
// պետք է վերադարձնի 20,  միջին տարիքը այն մարդկանց ում մազերի գույնը շագանակագույն է։

// function getAvgAgeByColor(array, color) {

//     let filter = array.filter(function (obj) {
//         return obj.hairColor === color;
//     });

//     let ages = filter.reduce(function (aggr, obj) {
//         return aggr + obj.age;
//     }, 0);

//     return ages / filter.length
// }

// console.log(getAvgAgeByColor([
//     { name: "Joe", age: 13, hairColor: "red" },
//     { name: "Mike", age: 10, hairColor: "brown" },
//     { name: "Jane", age: 4, hairColor: "red" },
//     { name: "Susan", age: 30, hairColor: "brown" }
// ], "brown"))


// Ստեղծել reduce անունով ֆունկցիա, որը կաշխատի ճիշտ նույն ձև ինչպես Array.prototype.reduce()  մեթոդը։    
// reduce([5, 9, 10], function(acc, val, i) {   // should return 24
//     return acc + val;
// }, 0);

// let sum = [5, 9, 10].reduce(function(aggr, val){

//     return aggr + val

// },0)

// console.log(sum)


// Ֆունկցիա, որը կստանի տեքստային արժեք ու դրա միջից կգտնի այն տառը, որը մի անգամ է կրկնվում ու վերադարձնի այն։
// singleOccurrence("EFFEAABbc") ➞ "C"
// singleOccurrence("AAAAVNNNNSS") ➞ "V"
// singleOccurrence("S") ➞ "S"

// function singleOccurrence(string){

//     let chars = string.split('');

//     for (let i = 0; i < string.length; i++) {

//       if (chars.filter(function(j) { 

//            return j == string.charAt(i); 

//               }).length == 1) return string.charAt(i);
//     }
//     }
    
//     console.log((singleOccurrence("EFFEAABbc")))
   


// Գրել ֆունկցիա removeAtIndex անունով, որը կստանա զանգված ու թիվ և կվերադարձնի նոր զանգված: 
// Նոր զանգվածը կպարունակի առաջինի բոլոր արժեքները, բայց տրված թվով ինդեքսի արժեքը հեռացված կլինի: 
//      removeAtIndex([5, 10, 15, 20], 2); // վերադարձնում է [5, 10, 20]

let removeAtIndex = function(arr, aggr ){

    return arr.filter(function(val, i){
        
        return i !== aggr;

     })


}

console.log(removeAtIndex([5, 10, 15, 20], 2))