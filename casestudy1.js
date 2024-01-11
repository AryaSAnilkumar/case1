//Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
function firstElement(arr1)
{
if (arr1.length===0)
{
    return "Array is empty";
}
const element1=arr1[0];
if(element1<=1)
{
    return "First elemet of an array is not a prime number.";
}
for (let i= 2; i<=Math.sqrt(element1); i++) {
    if(element1%i===0)
     {
        return "First element of an array is not a prime number."
     }
    }
     return "First element of an array is a prime number."
    }
let arr=[7,3,4,8,10];
console.log(firstElement(arr));

 //Write a JavaScript program to find the most frequent item of an array.
 function findMostFrequentItem(array) {
    const frequencyMap = {};
    array.forEach(item => {
      frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    });
    let mostFrequentItem;
    let maxFrequency = 0;
  
    for (const item in frequencyMap) {
      if (frequencyMap[item] > maxFrequency) {
        mostFrequentItem = item;
        maxFrequency = frequencyMap[item];
      }
    }
  
    return mostFrequentItem;
  }
  const myArray = [1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5];
  const mostFrequent = findMostFrequentItem(myArray);
  console.log(`The most frequent item is: ${mostFrequent}`);
  
  //Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.

  for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even.`);
    } else {
      console.log(`${i} is odd.`);
    }
  }

  //Write a JavaScript program to find the sum of squares of the elements of an array.

  function sumOfSquares(arr2) {
    let sum = 0;
  
    for (let i = 0; i < arr2.length; i++) {
      sum += arr2[i] * arr2[i];
    }
  
    return sum;
  }
  
  const array = [1, 2, 3, 4, 5];
  const result = sumOfSquares(array);
  console.log(`The sum of squares is: ${result}`);
  