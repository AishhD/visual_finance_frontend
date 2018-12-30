import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, Input } from 'semantic-ui-react';

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length > 15) {
        errors.password = 'Must be 15 characters or less'
    }
    return errors
}

const warn = values => {
    const warnings = {}

    return warnings
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    < div >
        <Form.Field
            {...input}
            control={Input}
            label={label}
            type={type}
        />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div >
)

// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//     <div>
//         <label>{label}</label>
//         <div>
//             <input {...input} placeholder={label} type={type} />

//         </div>
//     </div>
// )

const SyncValidationForm = (props) => {
    const { handleSubmit, submitting } = props
    return (

        <Form onSubmit={handleSubmit}>
            <Field name="username" type="text" component={renderField} label="Username" />
            <Field name="password" type="text" component={renderField} label="Password" />
            <Button type="submit" disabled={submitting}>Submit</Button>
        </Form>
    )
}


export default reduxForm({
    form: 'syncValidation',  // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
    warn                     // <--- warning function given to redux-form
})(SyncValidationForm)