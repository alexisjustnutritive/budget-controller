import React from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap'

const WeekExpenses = () => {

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Popover right</Popover.Title>
          <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Content>
        </Popover>
    );

    const PopoverButton = ( textValue ) => (
        <OverlayTrigger trigger="click" placement="left" overlay={ popover }>
          <Button variant="success">{ textValue }</Button>
        </OverlayTrigger>
      );


    return (
        <div className="card">
            <div className="card-body">
                <h5>Expenses</h5>
                <ul className="list-group">
                    <li className="list-group-item d-flex align-items-center justify-content-between">
                        <p className="m-0">comida</p>
                        { PopoverButton( 'click aqui' ) }
                    </li>
                    <li className="list-group-item d-flex align-items-center justify-content-between">
                        <p className="m-0">perreo</p>
                        { PopoverButton( 'click aqui' ) }
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WeekExpenses
