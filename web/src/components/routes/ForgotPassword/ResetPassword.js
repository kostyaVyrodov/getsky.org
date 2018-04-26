import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, Form } from 'redux-form';
import { Box } from 'grid-styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import qs from 'qs';

import Container from 'components/layout/Container';
import { H2 } from 'components/layout/Text';
import { Button } from 'components/layout/Button';
import { FormInput, FormMessage } from 'components/layout/Form';

import { required, minLength, } from 'validation/rules';

import { saveNewPassword } from './actions';

const BackToLogin = styled(Link) `
    display: block;
    margin-top: ${props => props.theme.space[1]}px;
    color: ${props => props.theme.colors.blue};

    &:hover {
        text-decoration: underline;
    }
`;

const r = required();
const minLength8 = minLength(8);
const passwordsMatch = (value, allValues) => allValues.password && value !== allValues.password ? 'Passwords does not match' : undefined;

const ResetPasswordForm = reduxForm({
    form: 'resetPasswordForm',
})(class extends React.Component {
    render() {
        const {
            handleSubmit,
            pristine,
            submitting,
        } = this.props;

        return (
            <Form onSubmit={handleSubmit}>
                <Box width={1 / 2}>
                    <Field
                        name="password"
                        component={FormInput}
                        type="password"
                        label="Password"
                        placeholder="Password"
                        description="8 characters or more"
                        validate={[r, minLength8]}
                        isRequired
                    />
                    <Field
                        name="confirmPassword"
                        component={FormInput}
                        type="password"
                        label="Confirm password"
                        placeholder="Confirm password"
                        validate={[r, passwordsMatch]}
                        isRequired
                    />
                </Box>

                <Button type="submit" disabled={pristine || submitting} text="Save new password" primary />
            </Form>
        );
    }
})

class ResetPassword extends React.Component {
    state = {
        code: null,
        passwordBeenReset: false,
    }
    componentWillReceiveProps(newProps) {
        const { code } = qs.parse(this.props.location.search.replace('?', ''));
        this.setState({ code });
    }
    resetPassword = async () => {
        const { form, saveNewPassword, } = this.props;
        await saveNewPassword(form.values.password, this.state.code);
        this.setState({ ...this.state, passwordBeenReset: true, });
    }
    render() {
        return (
            <Container flex='1 0 auto' flexDirection="column" py={4}>
                <H2>Resetting the password</H2>

                {this.state.passwordBeenReset && <FormMessage color="success">
                    New password has been applied.
                    <BackToLogin to="/login">Back to login</BackToLogin>
                </FormMessage>}

                {!this.state.passwordBeenReset && <ResetPasswordForm onSubmit={this.resetPassword} />}

            </Container>
        );
    }
}

export default connect(({
    form: { resetPasswordForm },
}) => ({
    form: resetPasswordForm
}), { saveNewPassword })(ResetPassword);
