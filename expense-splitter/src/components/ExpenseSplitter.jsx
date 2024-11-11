import React ,{useState} from "react";

const ExpenseSplitter=()=>{
    const [expense,setTotalExpense]= useState(' ')
    const[people, setTotalNumberofPeople] = useState('')

     const Split = ()=>{
        expense/people;
     }

    return (
        <div>
            <label>expense:</label>
            <input type= "number" value= {expense} onChange = {setTotalExpense(e.target.value)}/>

            <label>people:</label>
            <input type= "number" value= {people} onChange = {setTotalNumberofPeople(e.target.value)}/>

            <button onClick={Split}>SplitExpenses</button>
        </div>
    )
}

export default ExpenseSplitter