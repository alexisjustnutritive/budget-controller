import React from 'react';
import Uuid from 'uuid/v4'
import { Popover, OverlayTrigger, Button } from 'react-bootstrap'

const WeekExpenses = ( { expenses } ) => {

    return (
        <div className="card">
            <div className="card-body">
                <h5>Expenses</h5>
                <ul className="list-group">
                    { expenses.map( expense => {
                        const popover = (
                            <Popover id="popover-basic">
                                <Popover.Content>
                                    { expense.description }    
                                </Popover.Content>
                            </Popover>
                        );
                        const PopoverButton = ( textValue ) => (
                            <OverlayTrigger trigger="click" placement="left" overlay={ popover }>
                              <Button variant="success">{ textValue }</Button>
                            </OverlayTrigger>
                        );
                        return (
                            <li key={ Uuid() } className="list-group-item d-flex align-items-center justify-content-between">
                            <p className="m-0">{ expense.name }</p>
                            { PopoverButton( expense.cost ) }
                        </li>
                        )
                    })}                  
                </ul>
            </div>
        </div>
    )
}

export default WeekExpenses
