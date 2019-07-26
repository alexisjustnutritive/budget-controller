import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AddBudgetForm from './components/AddBudgetForm'
import BudgetReview from './components/BudgetReview';
import WeekExpenses from './components/WeekExpenses';
import ExpenseForm from './components/ExpenseForm';

function App() {

    const [budget, setBudget] = useState( 0 );
    const [remaining, setRemaining] = useState( 0 );
    const [expenses, setExpenses] = useState( [] ); // expenses array objets { name: '', cost: '', description: '' }

    const addExpense = expense => {
        let updatedExpenses = [ ...expenses, expense ];
        setExpenses( updatedExpenses );
    };

    useEffect( () => {
        console.log( expenses );
    }, [ expenses ] );

  return (
    <Container className="mt-4 text-center">
        <Row>
            <Col xs={12} className="my-2">
                <AddBudgetForm setBudget={ setBudget }/>
            </Col>
            <Col xs={12} className="my-2">
                { budget > 0 ? <BudgetReview budget={ budget } remaining={ remaining } /> : null }
            </Col>
        </Row>
        <Row>
            <Col xs={ 6 }>
                { budget > 0 ? <ExpenseForm addExpense={ addExpense }/> : null }
            </Col>
            <Col xs={ 6 }>
                { expenses.length > 0 ? 
                    <WeekExpenses expenses={ expenses } /> : null 
                } 
            </Col>
        </Row>
    </Container>
  );
}

export default App;