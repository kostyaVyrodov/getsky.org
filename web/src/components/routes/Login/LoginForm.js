import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { Box } from 'grid-styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from 'components/layout/Button';
import { FormInput } from '../../layout/Form';

const ForgotPasswordLink = styled(Link) `
    display: block;
    margin-top: ${props => props.theme.space[1]}px;
    color: ${props => props.theme.colors.blue};

    &:hover {
        text-decoration: underline;
    }
`;

const LoginForm = props => {
    const { handleSubmit, pristine, submitting } = props;

    return (
        <Form onSubmit={handleSubmit}>
            <Box width={1 / 2}>
                <Field name="userName" component={FormInput} type="text" label="Username" placeholder="Username" />
                <Field name="password" component={FormInput} type="password" label="Password" placeholder="Password" />
            </Box>

            <Button type="submit" disabled={pristine || submitting} text="Login" primary />
            <ForgotPasswordLink to="/forgot-password">Forgot your password?</ForgotPasswordLink>
        </Form>
    )
};

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
    form: 'loginForm'
})(LoginForm);
