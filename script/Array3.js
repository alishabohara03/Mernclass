let  cart =[
    {
        price: 200,
        qty: 3
    },

    {
        price: 300,
        qty: 3
    },
    {
        price: 300,
        qty: 3
    }
]

const total =cart.reduce((acc , curr)=> acc +curr.price *curr.qty , 0)
console.log("this is total", total);
let items= cart.slice(0, 2)
console.log(items);


let course =[
    {
        class:"mern",
        completeStatus: true
    },

    {
        class:"python",
        completeStatus: false
    },

    {
        class:"ui/ux",
        completeStatus: true
    },

    {
        class:"php",
        completeStatus: false
    }


]

let completed=[]
let inComplete=[]
for (let index = 0; index < course.length; index++) {
    const element = course[index];
    if(element.completeStatus) {
        completed.push(element)
    }else{
        inComplete.push(element)
    }
    
}

console.log(completed);
console.log(inComplete);

let number=[1, 2, 3, 4, 5, 6, 7]
const filterNumber= number.filter( function (num){
    return num> 4
})

console.log(filterNumber);

let number1=[1, 2, 3, 4, 5, 6, 7]
const foundNumber= number.find( function (num){
    return num> 4
})

console.log(foundNumber);





let countries = [
    {
        name: "Nepal",
        code: "Np"
    },
    {
        name: "India",
        code: "In"
    },
    {
        name: "Australia",
        code: "Aus"
    },
    {
        name: "Japan",
        code: "Jp"
    },
    {
        name: "China",
        code: "Ch"
    }
];

function getCountryCode(countryName) {
  
    let country = countries.find(c => c.name.toLowerCase() === countryName.toLowerCase());
    if (country) {
        return country.code;
    } else {
        return "Country not found";
    }
}


console.log(getCountryCode("Nepal")); 
console.log(getCountryCode("India")); 
console.log(getCountryCode("USA"));   
console.log(getCountryCode("China"));



let sentence="he/is/a/good/boy"
let wordSeperator= sentence.split("/");
console.log(wordSeperator);
console.log(wordSeperator.length);

let num = [1,2,3,4];
let newnum= num.push(5);
console.log(newnum);
console.log(num);


let removeNum= num.pop();
console.log(num);

//spread operator 
let num1 =[1, 2, 3]
let num2 =[...num1 , 5, 6, 7,8]
console.log(num2);


//Assignment  shift unshift include charAt 

let numbers1 = [10, 20, 30, 40];
let firstElement = numbers1.shift();
console.log(firstElement); 
console.log(numbers1);     

let numbers2 = [20, 30, 40];
let newLength = numbers2.unshift(10);
console.log(newLength);    
console.log(numbers2);      



let fruits = ["apple", "banana", "mango"];
console.log(fruits.includes("banana")); 
console.log(fruits.includes("grape"));  



let word = "Noisy";
console.log(word.charAt(1)); 
console.log(word.charAt(4)); 



let number4 = [10, 20, 30, 40];
number4 = number4.filter(num => num !== 40);

console.log(number4); 




let number5 = [10, 20, 40];
number5.unshift(30, 50, 60);
console.log(number5);

//parse and stringify

//const jsonString ='{name":"alisha", "age": 20}'


//const name1 =jsonString.name

//const obj = JSON.parse(jsonString);
//console.log(obj.name);


const jsonString = '{"name": "alisha", "age": 20}'; 
const obj = JSON.parse(jsonString); 
console.log(obj.name); 


//const jsonObject1=  {"name": "alisha", "age": 20}
//const jsonString1= JSON.stringify(jsonObject1)
//console.log(jsonString1);


const jsonObject1 = { "name": "alisha", "age": 20 }; 
const jsonString1 = JSON.stringify(jsonObject1); 
console.log(`'${jsonString1}'`) 


let numbers= [1, 2, 3, 4]
let double= numbers.map((num)=>{
    return num *2
}
)

console.log(double);


















