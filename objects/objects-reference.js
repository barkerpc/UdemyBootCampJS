let myAccount = { 
    'name' : 'Barker',
    'expenses' : 0,
    'income' : 0
}

let otherAccount = myAccount //pointer to the same object
// otherAccount.income = 1000
// otherAccount  = {}

let addExpense = function(account,amount) {
    
    account.expenses = account.expenses + amount
    
}

let addIncome = function(account,income) {

    account.income = account.income + income

}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0 
}

let getAccountSummary = function(account) {

    // Account for Barker has $100. $300 in income and $100 in expenses
    let balance = account.income - account.expenses
    let summary = `Account for ${account.name} has $${balance}. $${account.income} and ${account.expenses} in expenses`
    console.log(summary)
}

// objects referenced like this point to the same object in memory

getAccountSummary(myAccount)

// add income
addIncome(myAccount,1000)

// add some expenses
addExpense(myAccount, 200)
addExpense(myAccount, 300)

// get summary
getAccountSummary(myAccount)

// reset account
resetAccount(myAccount)

// get summary
getAccountSummary(myAccount)