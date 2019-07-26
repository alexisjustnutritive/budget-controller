import React from 'react';
import WeekExpenses from './WeekExpenses';
import BudgetReview from './BudgetReview';
import { Container, Row, Col } from 'react-bootstrap';
import ExpenseForm from './ExpenseForm';

const Expenses = ( { addExpense } ) => {
    return (
        <Container fluid={ true } className="pl-0 pr-0">
            <Row>
                <Col xs={ 6 }>
                    <ExpenseForm addExpense={ addExpense }/>
                </Col>
                <Col xs={ 6 }>
                    <WeekExpenses />
                </Col>
            </Row>
        </Container>
    )
}

export default Expenses;