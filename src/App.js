import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AddBudgetForm from './components/AddBudgetForm'
import Expenses from './components/Expenses';
import BudgetReview from './components/BudgetReview';

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
                <BudgetReview budget={ budget } remaining={ remaining } />
            </Col>
            <Col xs={12}>
                <Expenses addExpense={ addExpense } />
            </Col>
        </Row>
    </Container>
  );
}

export default App;