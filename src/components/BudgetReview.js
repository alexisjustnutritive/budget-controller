import React from 'react';
import './budgetReview.css';

const BudgetReview = ( { budget, remaining, useReviewColor } ) => {

    return (
        <div className="card">
            <div className="card-body text-left">
                <h5>Budget: <small>{ budget }</small></h5>
                <h5 style={ useReviewColor }>Remaining: <small>{ remaining }</small></h5>
            </div>
        </div>
    )
}

export default BudgetReview
