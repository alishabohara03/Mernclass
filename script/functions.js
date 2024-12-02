//console.log("hello world from top");

/*function abcd(name) {
   // console.log("hello," + name + "!");
    console.log(`hello, ${name} !`);

    
}
abcd("ram")



function add(x,y) {
    return x + y 
    
}

const k = add(2,3)
console.log(k);

const result = k * 2; 
console.log(result); 
*/

/*
setTimeout(() =>{
    console.log("hello from middle");
},2000);

function  mul(x,y) {
    return x * y 
    
}

const t = mul(2,3)
console.log(t);




function sum(...numbers) {
    let total=0
    for(let num of numbers){
        total += num
    }
    return total
}
console.log(sum(1,2,3,4));


console.log("hello from middle")


console.log("hello world from button");



try {
    let firstName= "Ronish"
    let lastName= "Poudel"
    let fullName =firstName + lastName
    console.log("this is full name" , fullName);
} catch (error) {
    console.log("this is error",error.message);
    
}
*/
//traditional function

//function add(x, y){
   // return x+y
//}
//let total=add(2,1)
//console.log(total);
/*

const add = (x, y) => {
    return x + y;
};

let arrowTotal=add(2,1)
console.log(arrowTotal);
*/


/*
function Normal() {
    this.message = "hello, world";
    setTimeout(() => {
        console.log(this.message);
    }, 2000);
}

let instance = new Normal();*/


/*

function Normal() {
    if (!(this instanceof Normal)) {
        return new Normal();
    }
    this.message = "hello, world";
    setTimeout(() => {
        console.log(this.message);
    }, 2000);
}
    */



//Assignment

//let name=["SHyam", "Hari", "Sita","Gita", "Ramesh"]

/*
const showAlert = (type, message) => {
    console.log(`${type}: ${message}`); 
};

showAlert("warning", "you are not a user");
let name = ["Shyam", "Hari", "Sita", "Gita", "Ramesh"];

console.log(name);



 fetchData=(callbacks)=>{
    console.log("api is listening");
    setTimeout(()=>{
        callbacks("api is sucessfully fetched")
    }, 3000);
}

fetchData((message)=>{
    console.log(message)
})
    */





//Assignment

let names = ["Shyam", "Hari", "Sita", "Gita", "Ramesh"];


function checkAuthorization(userName) {
 
  if (names.includes(userName)) {
    return `${userName} is authorized.`;
  } else {
    return `Non-authorized user: ${userName}. Access denied.`;
  }
}


console.log(checkAuthorization("Hari"));  
console.log(checkAuthorization("John"));  
console.log(checkAuthorization("Gita"));

/*

const authorizedUser=["Alice", "Bob", "Charlie"]
const checkUser =()=>{
    const enterName = prompt("enter your name")
   if(authorizedUser.includes(enterName)){
    alert("authorized user")
   }else {
    alert(unauthorized )
   }
}
   */




//Promise takes resolve and reject as an argument

/*
let Promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //reject("internal server error")
        resolve({
            data:{
                name:"Umesh",
                email:"umesh@gmail.com"
            }
        })
    },3000);
})

Promise.then((res)=>{
    console.log("response",res);
})

.catch((err)=>{
    console.log("this is error", err);
})
console.log(promise);
*/



let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("internal server error");
        resolve({
            data: {
                name: "Umesh",
                email: "umesh@gmail.com"
            }
        });
    }, 3000);
});

myPromise
    .then((res) => {
        console.log("response", res);
    })
    .catch((err) => {
        console.log("this is error", err);
    });

console.log(myPromise);









