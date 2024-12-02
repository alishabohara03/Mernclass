let students = [
    {name: "ramesh", haspaidStatus: false},
    {name: "ram", haspaidStatus: true},
    {name: "mesh", haspaidStatus: false}
];

students.forEach(student => {
    if (student.haspaidStatus) {
        console.log(`${student.name} can give exam`);
    } else {
        console.log(`${student.name} cannot give exam`);
    }
});



let cartItems = [
    {
        name: "rohan",
        products: [
            { title: "laptop", price: 20 },
            { title: "mobile", price: 10 },
            { title: "tab", price: 50 },
        ],
    },
    {
        name: "ronisha",
        products: [
            { title: "clothes", price: 30 },
            { title: "bag", price: 40 },
            { title: "shoe", price: 60 },
        ],
    },
];


cartItems.map((prod)=>{
    let total =prod.products.reduce((sum,product)=> sum+ product.price ,0)
    console.log("total price",total);
})


cartItems.forEach((person) => {
    const total = person.products.reduce((sum, product) => sum + product.price, 0);
    console.log(`${person.name}'s total price: $${total}`);
});



cartItems.map((prod)=>{
    let total =prod.products.reduce((sum,product)=> sum+ product.price ,0)
    console.log(`${prod.name} spends ${total}`);
})

// double equal and tripple equal

//5== five true
//5=== five false



let x = 5;
console.log(typeof x); 

let fruits = [
    {
        name: "orange",
        scientificName: "xyz",
        prices: [
            {
                country: "Nepal",
                price: 20
            },
            {
                country: "India",
                price: 30
            },
            {
                country: "Australia",
                price: 2
            },
            {
                country: "USA",
                price: 1
            }
        ]
    }
];

// price of orange in different countries
fruits[0].prices.forEach(priceInfo => {
    console.log(`Price of orange in ${priceInfo.country}: ${priceInfo.price}`);
});

// changing the price of orange in a specific country, for eg, Nepal:
fruits[0].prices.find(priceInfo => priceInfo.country === "Nepal").price = 25;

console.log(fruits[0].prices);














