import React, { useState } from 'react';

const ExpenseForm = ( { addExpense } ) => {

    const [expense, setExpense] = useState( {} );

    const onChange = e => {
        setExpense( { 
            ...expense,
            [e.target.name]: e.target.value
         } ) 
    }

    const onSubmit = e => {
        e.preventDefault();
        setExpense( expense );
        addExpense( expense );
    }

    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={ onSubmit }>
                    <div className="form-group">
                        <label htmlFor="expense-input">Expense name</label>
                        <input 
                            type="text" 
                            id="expense-input" 
                            className="form-control" 
                            placeholder="expense name..." 
                            name="name"
                            onChange={ onChange } 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cost-input">Cost</label>
                        <input 
                            type="number" 
                            id="cost-input" 
                            className="form-control" 
                            placeholder="how much to expense..." 
                            name="cost"
                            onChange={ onChange } 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description-ta">Description</label>
                        <textarea 
                            id="description-ta" 
                            cols="10" rows="3" 
                            placeholder="expense description..." 
                            className="form-control"
                            name="description" 
                            onChange={ onChange }
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit" 
                            className="form-control btn btn-block btn-primary text-white font-weight-bold" 
                            value="Add"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ExpenseForm
