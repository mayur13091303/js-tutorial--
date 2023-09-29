const account_Id = 987654
let account_Email ="mayureshpawar339@gmail.com"
var account_password ="1234"
account_city ="Mumbai"
let account_state ;

// account_Id=2// not allowed

account_Email="hc.hc@gmail.com"
account_password="6549"
account_city="Delhi"

console.log(account_Id);


/*
Prefer not to use var because of issue in block scope and functional scope 
*/


console.table([account_Email,account_Id,account_password,account_city,account_state])