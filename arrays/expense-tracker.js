const account = {
    name: 'Paul Barker',
    expenses: [],
    income: [],
    addExpense: function (description,amount) {
        this.expenses.push({
            description: description,
            amount: amount

        })

    },
    addIncome: function (description,amount) {
        this.income.push({
            description: description,
            amount: amount

        })

    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
           

        }),
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
           

        })
        let balance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${balance}. $${totalExpenses} in expenses, and $${totalIncome} income`
    }
}

// 1. Add an income array to account
// 2. Setup addIncome method  --> description and amount
// 3. Tweak getAccountSummary to get the balance

account.addIncome('Pay check',1950)
account.addIncome('Bribes', 200)
account.addExpense('Rent',950)
account.addExpense('Coffe', 2)
//console.log(account)
console.log(account.getAccountSummary())