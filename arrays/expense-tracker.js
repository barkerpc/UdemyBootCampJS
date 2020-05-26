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
        let balance = 0
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount           

        }),
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount           

        })
        balance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${balance}. $${totalExpenses} in expenses, and $${totalIncome} income`
    }
}

account.addIncome('Pay check',1950)
account.addIncome('Bribes', 200)
account.addExpense('Rent',950)
account.addExpense('Coffe', 2)

console.log(account.getAccountSummary())