let name = "  Gift Ojo ";
let data = "my name is john and i like "
let number = 32.6555

/*this trim(), trims a empty space from assigned code */
console.log(name.trim());

/*this slice() remove the specified index from assigned variable */
let newData = data.slice(0, 16)
console.log(newData);

/* replace(), the first argument in the replace is the item to be replaced and the second is the new value*/
console.log(newData.replace("john", "Gift"));

/*Math.floor(); this does not round up but removes the decimal and evrythign after it*/
console.log(Math.floor(number));

/*Math.random(), this creates a random number.*/
let randomNumber = Math.random();
/*the *5 here creats a random number between 1 and 4 */
randomNumber = Math.random() * 5
/*the reason for the + 1 here is to make the random number include 5 asd one of it's number */
randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);
