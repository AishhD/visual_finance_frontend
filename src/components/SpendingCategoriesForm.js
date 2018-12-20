import React from 'react';
import { Form, Input, } from 'semantic-ui-react'


const InputSection = (props) => {
    return (
        <Form.Field
            control={Input}
            label={props.label}
            placeholder="£"
            onChange={event => props.update(event.target.value)}
            type="number"
        />
    )
}

export default InputSection