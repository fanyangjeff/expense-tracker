import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import BASE_URL from '../baseUrl'
const BudgetContext = React.createContext()

export function useBudget() {
    return useContext(BudgetContext)
}


export function BudgetProvider({children}) {

    const [budgetList, setBudgetList] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/allBudgets`).then(res => {
            setBudgetList(res.data)
        })
    }, [])

    return (
        <BudgetContext.Provider value={{budgetList, setBudgetList}}>
            {children}
        </BudgetContext.Provider>
    )
}

