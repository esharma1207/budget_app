//Local storasge function

export const waait = () => new Promise(res => setTimeout(res, Math.random() * 2000))

const generateRandomColor = () => {
    const existingBudgetsLength = fetchData("budgets")?.length ?? 0 
    return `${existingBudgetsLength * 34} 65% 50%`
}
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

//delete item
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)

}

export const createBudget = ({name, amount}) =>{
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        color: generateRandomColor()

    }
    const existingBudgets = fetchData("budgets") ?? [];
    return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]))

    
}

export const createExpense = ({name, amount, budgetId}) =>{
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        budgetId: budgetId

    }
    const existingExpenses = fetchData("expenses") ?? [];
    return localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem]))

    
}

//Format curr

export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "currency", 
        currency: "USD"

    })

}

export const calculateSpentByBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? [];
    const budgetSpent = expenses.reduce((acc, expense) =>
    {
        //check for if expense.id is equal to the passed in id
        if(expense.budgetId != budgetId) return acc

        //add curr to total
        return acc += expense.amount

    }, 0)
    return budgetSpent;
}

export const percentage = (amt) =>{
    return amt.toLocaleString(undefined, {
        style: "percent",
        minimumFractionDigits: 0
    })
}