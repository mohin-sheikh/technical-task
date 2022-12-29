
//  -------- I Used Javascript To solve this problems -----------

const numbersArray = [
    { name: 'Ganesh', fruits: 3 },
    { name: 'Ashu', fruits: 19 },
    { name: 'Sneha', fruits: 89 },
    { name: 'Vishu', fruits: 33 },
    { name: 'Suraj', fruits: 73 },
    { name: 'Prem', fruits: 29 },
    { name: 'Pranita', fruits: 51 },
    { name: 'Pratik', fruits: 47 },
    { name: 'Himesh', fruits: 4 },
    { name: 'Vishal', fruits: 12 },
    { name: 'Raj', fruits: 58 },
    { name: 'Sumit', fruits: 42 },
    { name: 'Rudra', fruits: 30 },
    { name: 'Bakula', fruits: 66 },
    { name: 'Amruta', fruits: 76 },
    { name: 'Sandip', fruits: 80 },
];

// Initialize two arrays to store the even and odd numbered fruit lists
let evenFruits = [];
let oddFruits = [];

// Loop through the numbersArray
for (let i = 0; i < numbersArray.length; i++) {
    let fruit = numbersArray[i];

    // Check if the number of fruits is even or odd
    if (fruit.fruits % 2 === 0) {
        // If the number of fruits is even, add it to the evenFruits array
        evenFruits.push(fruit);
    } else {
        // If the number of fruits is odd, add it to the oddFruits array
        oddFruits.push(fruit);
    }
}

// Calculate the total number of fruits in the evenFruits array
let totalEvenFruits = 0;
for (let i = 0; i < evenFruits.length; i++) {
    totalEvenFruits += evenFruits[i].fruits;
}

// Calculate the total number of fruits in the oddFruits array
let totalOddFruits = 0;
for (let i = 0; i < oddFruits.length; i++) {
    totalOddFruits += oddFruits[i].fruits;
}

// Output the results
console.log("Even numbered fruits:", evenFruits);
console.log("Total number of even numbered fruits:", totalEvenFruits);
console.log("Odd numbered fruits:", oddFruits);
console.log("Total number of odd numbered fruits:", totalOddFruits);
/*
Output : Even numbered fruits: [
  { name: 'Himesh', fruits: 4 },
  { name: 'Vishal', fruits: 12 },
  { name: 'Raj', fruits: 58 },
  { name: 'Sumit', fruits: 42 },
  { name: 'Rudra', fruits: 30 },
  { name: 'Bakula', fruits: 66 },
  { name: 'Amruta', fruits: 76 },
  { name: 'Sandip', fruits: 80 }
]
Total number of even numbered fruits: 368
Odd numbered fruits: [
  { name: 'Ganesh', fruits: 3 },
  { name: 'Ashu', fruits: 19 },
  { name: 'Sneha', fruits: 89 },
  { name: 'Vishu', fruits: 33 },
  { name: 'Suraj', fruits: 73 },
  { name: 'Prem', fruits: 29 },
  { name: 'Pranita', fruits: 51 },
  { name: 'Pratik', fruits: 47 }
]
Total number of odd numbered fruits: 344
*/