import React, {useState, useEffect} from 'react'
import {useBudget} from '../useContexts/BudgetProvider'
import {ListGroup} from 'react-bootstrap'
import {Popover, Button} from 'antd'
import axios from 'axios'
import BASE_URL from '../baseUrl'
export default function Budgets() {
    const {budgetList, setBudgetList} = useBudget()
    const [balance, setBalance] = useState(0)
    const [popOverVisible, setpopOverVisible] = useState(false)

    useEffect(() => {
        
        setBalance(prevBalance => {
            let totalAmount = 0
            budgetList.forEach(budget => {
                totalAmount += budget.amount
            })
            return totalAmount
        })
    }, [budgetList])

    const handleDelete = (_id) => {
        axios.delete(`${BASE_URL}/delete/${_id}`)
            .then(res => {
                console.log(res)
                setBudgetList(prevList => {
                    return prevList.filter(item => {
                        return item._id != _id
                    })
                })
                
            })
            .catch(err => {
                console.log(err)
            })
    }

    const popOverContent = (_id) => {
        return (
            <div className='d-flex flex-column'>
                <a href='#' onClick={() => {handleDelete(_id)}}>delete</a>
                <a href='#' onClick={()=> {console.log('edit')}}>edit</a>
            </div>
        )
    }
    
    return (
        <div style={{height: '180px'}} className='border border-dark'>
           <ListGroup style={{height: '150px', overflowY: 'scroll'}}>
               {budgetList.map(budget => {
                   return (
                   <ListGroup.Item key={budget._id} style={{height: '60px'}} className='d-flex flex-row justify-content-between'>
                       <div>
                        <div>{budget.title}   {budget.amount}</div>
                        <p className='text-muted'></p>
                       </div>

                       <Popover
                            content={popOverContent(budget._id)}
                            trigger='click'
                            placement='top'
                        >
                            <Button type='primary'>...</Button>
                   
                        </Popover>

                    </ListGroup.Item>
                   )
               })}

           </ListGroup>
           <div className='d-flex flex-column align-items-center justify-content-center border border-dark' 
           style={{height: '100px', border:'yellow 1px', position: 'relative', top: '40px'}}>
            <h5 style={{color: balance >= 0?'green':"red"}}>balance: {balance < 0? '':'+'}{balance}</h5>
           </div>

        </div>
    )
}
