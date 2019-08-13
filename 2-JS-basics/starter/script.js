/**Primitive Javascript Data Types
 * 1. Number: floating point numbers, for decimals and integers.
 * 2. String: Sequence of characters used for text
 * 3. Boolean: Data type of a variable that does not have a value yet
 * 4. Undefinded: Data tyoe of a variable that does not have a value yet
 * 5. Null: Also means NON-Existent
 */

 /****************************
  * variable and Data Types
  * Lession 1
  **/

/** 
var firstName = 'Jess';
var lastName = 'Palacios';
var age = 31;
console.log('what is the name value? ' + firstName + ' ' + lastName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
//console.log results in Undefinded 
//because the variable is Job but didn't assign a value to the variable. 

job = 'Teacher';
console.log(job);

var _3years = 3;
var johnMark = 'John and Mark';
*/

/*****************************************
 * Variable mutation and type coercion
 * Lession 2
 */

 /** 
 var firstName = 'Jess';
 var age = 31;

 //tyoe coercion
 console.log(firstName + ' ' + age);

 //assigining more than one variable.
 var job, isMarried;
 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' ' + 'is a '+ age + ' ' + 'year old '+ job + '. Is she married? '+ isMarried);

 //variable mutuation
 age = 'thirty one';
job = 'driver';
alert(firstName + ' ' + 'is a ' + age + ' ' + 'year old ' + job + '. Is she married? ' + isMarried);

var lastName = prompt('What is her last name?');
console.log(firstName + 's'+ ' last name is ' + lastName );
*/
/*****************************************
 * Basic Operators
 * Lession 3
 */
var now,yearJess, yearMark
var now = 2019;
//so we dont repeat the year in the variables belonging to people.
ageJess = 31;
ageMark = 33;

//Math operators
var yearJess = now - ageJess;
var yearMark = now - ageMark;

console.log('Jessica\'s birth year is ' + yearJess);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical Operators 
// If we want to compare the age of Jess & mark we can use logical operators.

var jessOlder = ageJess > ageMark;
console.log(jessOlder); // will show false since Mark is older.