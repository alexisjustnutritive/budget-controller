import React, { useState } from 'react';

const AddBudgetForm = ( { setBudget, setRemaining } ) => {

    const [budgetValue, setBudgetValue] = useState( 0 );

    const onChange = e => {
        setBudgetValue( e.target.value );
    }

    const onSubmit = e => {
        e.preventDefault();
        setBudget( budgetValue );
        setRemaining( budgetValue );
    }

    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={ onSubmit }>
                    <div className="form-group">
                        <label htmlFor="input-budget"><h3>Week Budget</h3></label>
                        <input 
                            type="number" 
                            id="input-budget" 
                            className="form-control" 
                            placeholder="enter you week budget..." 
                            name="input_budget"
                            onChange={ onChange }
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit" 
                            className="form-control btn btn-block btn-primary" 
                            value="Set" 
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBudgetForm;
