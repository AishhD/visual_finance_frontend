import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, Input } from 'semantic-ui-react';

const requiredNumber = (value) => {
    if (!value) {
        return 'Required'
    } else if (parseInt(value) === isNaN) {
        return 'Must be a number'
    }

}

const validate = values => {
    const errors = {}
    errors.food = requiredNumber(values.food)
    errors.alcohol = requiredNumber(values.alcohol)
    errors.household = requiredNumber(values.household)
    errors.transport = requiredNumber(values.transport)
    errors.resturants = requiredNumber(values.resturants)
    errors.clothing = requiredNumber(values.clothing)
    errors.recreation = requiredNumber(values.recreation)
    errors.education = requiredNumber(values.education)
    errors.other = requiredNumber(values.other)
    for (var key in errors) {
        if (errors[key] == undefined) {
            delete errors[key]
        }
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
            placeholder="£"
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
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <Form onSubmit={handleSubmit} >

            <Form.Group widths='equal'>
                <Field name="food" type="number" component={renderField} label="Food & non-alcholic drinks" />
                <Field name="alcohol" type="number" component={renderField} label="Alcoholic drinks, tobacco & narcotics" />
            </Form.Group>
            <Form.Group widths='equal'>
                <Field name="household" type="number" component={renderField} label="Household and bills" />
                <Field name="transport" type="number" component={renderField} label="Transport" />
            </Form.Group>
            <Form.Group widths='equal'>
                <Field name="resturants" type="number" component={renderField} label="Resturants & Hotels" />
                <Field name="clothing" type="number" component={renderField} label="Clothing & footwear" />
            </Form.Group>
            <Form.Group widths='equal'>
                <Field name="recreation" type="number" component={renderField} label="Recreation & Culture" />
                <Field name="education" type="number" component={renderField} label="Education" />
            </Form.Group>
            <Form.Group widths='equal'>
                <Field name="other" type="number" component={renderField} label="Other" />
                <Button type="submit" disabled={submitting}>Submit</Button>
            </Form.Group>

        </Form>
    )
}


export default reduxForm({
    form: 'syncValidation',  // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
    warn                     // <--- warning function given to redux-form
})(SyncValidationForm)