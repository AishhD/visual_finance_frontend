import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, Input, Segment, Grid, } from 'semantic-ui-react';

const requiredNumber = (value) => {
    if (!value) {
        return 'Required that you enter a number'
    } else if (parseInt(value) === isNaN) {
        return 'Required that you enter a number'
    } else if (parseInt(value) > 1000) {
        return 'Value must be less than 1000'
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
        // if (errors[key] == undefined)
        if (errors[key] === undefined) {
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
        {touched && ((error && <span style={{ color: 'red' }}>{error}</span>) || (warning && <span style={{ color: 'red' }}>{warning}</span>))}
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
        <Form onSubmit={handleSubmit} celled='internally' columns='equal' stackable >

            <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Field name="food" type="number" component={renderField} label="Food & non-alcoholic drinks" width={20} />
                            <Field name="household" type="number" component={renderField} label="Household and bills" />
                            <Field name="resturants" type="number" component={renderField} label="Resturants & Hotels" />
                            <Field name="recreation" type="number" component={renderField} label="Recreation & Culture" />
                            <Field name="other" type="number" component={renderField} label="Other" />
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Field name="alcohol" type="number" component={renderField} label="alcoholic drinks, tobacco & narcotics" />
                            <Field name="transport" type="number" component={renderField} label="Transport" />
                            <Field name="clothing" type="number" component={renderField} label="Clothing & footwear" />
                            <Field name="education" type="number" component={renderField} label="Education" />
                            <br /><Button type="submit" disabled={submitting}>Submit</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Segment>
        </Form>
    )
}


export default reduxForm({
    form: 'syncValidation',  // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
    warn                     // <--- warning function given to redux-form
})(SyncValidationForm)