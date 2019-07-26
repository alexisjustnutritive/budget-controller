import React from 'react';

const BudgetReview = ( { budget, remaining } ) => {

    return (
        <div className="card">
            <div className="card-body text-left">
                <h5>Budget: <small>{ budget }</small></h5>
                <h5>Remaining: <small>{ remaining }</small></h5>

            </div>
        </div>
    )
}

export default BudgetReview
