import React, {useState, useRef} from 'react'
import {useBudget} from '../useContexts/BudgetProvider'
import BASE_URL from '../baseUrl'
import axios from 'axios'
import {v1 as uuid} from "uuid"
import {Form, Button} from 'react-bootstrap'
export default function CreateBudget() {

    const [incomeChecked, setIncomeChecked] = useState(false)
    const [expenseChecked, setExpenseChecked] = useState(true)
    const {setBudgetList} = useBudget()

    const titleRef = useRef()
    const amountRef = useRef()

    const handleChecked = () => {
        setIncomeChecked(prevState => !prevState)
        setExpenseChecked(prevState => !prevState)
    }


    const handleSubmit = () => {
        if (isNaN(Number(amountRef.current.value))) {
            return
        } 

        const newBudget = {
            _id: uuid(),
            title: titleRef.current.value,
            amount: expenseChecked? -Number(amountRef.current.value):Number(amountRef.current.value),
            expense: expenseChecked
        }

        axios.post(`${BASE_URL}/add`, newBudget)
            .then(res => {
                console.log(res)
                setBudgetList(prevList => {
                    return [...prevList, newBudget]
                })

            })
            .catch(err => {
                alert(err)
            })

    }

    return (
        <div className='border border-dark' style={{position: 'relative', top: '120px', padding: '10px 10px 10px 10px'}}>
            <Form.Group>
                <Form.Control ref={titleRef} type="email" placeholder="title" onChange={e => {}}/>
                <Form.Control ref={amountRef} type="amount" placeholder="amount" onChange={e => {}} />
                <Form.Check type='radio' checked={incomeChecked} label='income' onClick={handleChecked} onChange={e => {}}></Form.Check>
                <Form.Check type='radio' checked={expenseChecked} label='expense' onClick={handleChecked} onChange={e => {}}></Form.Check>
                <Button type='submit' variant='primary' onClick={handleSubmit} style={{width: '100%'}}>submit</Button>
                
            </Form.Group>
        </div>
    )
}
