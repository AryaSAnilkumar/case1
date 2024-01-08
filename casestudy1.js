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
