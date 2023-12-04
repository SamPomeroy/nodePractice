// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

let userFirstName = getInput(1)
let userLastName = getInput(2)
let userFullName = userFirstName + " " + userLastName
console.log("Hello, " +  userFullName + "!")
console.log(userFullName.toUpperCase() + " is your name capitalized!")
let userInitials = userFirstName[0] + "." + userLastName[0] + "."
console.log("Your initials are: " + userInitials + "!")
console.log(userFirstName.toLowerCase()[0] + userLastName.toLowerCase() + ".prsvr@gmail.com")
//str ="Kyle"
// str[0]
