//  ******Arrays******
// Create a function that takes in an array of numbers, 
// alert the sum.

// let numbs = [2, 5, 8, 3, 100]
// let total = numbs.reduce( ( acc,c) => acc + c, 0 )
// let  total = numbs.reduce( (acc, c) => acc + Number(c), 0 )
// alert(total)

// let num = [5, 10, 10, 4]
// let sum = num.reduce((acc,c) => acc + c, 0)
// alert(sum)


// let nums = ["5", 10, 12, 4]
// let total = nums.reduce( (acc,c) => acc + Number(c), 0 )

// alert(total)



// Found at 1:27 of class 22

// Create a function that takes in an array of numbers, 
// return a new array of numbers that is every original
// number squared

// var numbers = [2, 7, 13, 24]
// var newArray = []

// console.log(numbers.map(v => Math.pow(v, 2)))

// Create a function that takes in a string
// Print the reverse of that string to the console

function reverse(str){
    return str.split("").reverse().join("")
}
console.log(reverse('dog'))


function revStr (word) {
    return word.split("").reverse().join("")
}
console.log(revStr('cosmopolitan'))
console.log(revStr('craps'))


function revsString (string) {
    return string.split("").reverse().join("")
}
console.log(revsString('fernando'))

// Create a funtion that takes in a string
// Alert if the string is a palindrome or not

function checkPalindrome(str) {  
    // get the total length of the words  
    const len = str.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
        // validate the first and last characters are the same  
        if (str[i] !== str[len - 1 - i]) {  
          alert( 'It is not palindrome'); 
          return
        }  
    }  
  // If they are not the same, then it is not a palindrome
    alert( 'It is a palindrome')
}
console.log(checkPalindrome('White'))
console.log(checkPalindrome('eye'))
