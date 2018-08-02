# "FizzBuzz"

## File

* *None*

## Instructions

* Write a script that prints the numbers 1 to 100 in the console. But for multiples of three, print `Fizz` instead of the number. For multiples of five, print `Buzz`. For numbers which are multiples of both three and five, print `FizzBuzz`.

1. loop through  i = 1 to 100 
2. if i % 3 === 0 then print Fizz
3. else if i%5 ===0 the print buzz
else if  i%3 ===0  And i%5 ===0  print fizz buzz

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}