import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Field, Fields, reduxForm, Form, formValueSelector, change } from 'redux-form';
import { FormDropdown, FormInput, FormCheckbox, FormLabel } from 'components/layout/Form';
import { Button } from 'components/layout/Button';
import { ACCEPT_TRADE_OPTIONS } from 'components/layout/PostingForm';
import { COUNTRY_HAS_STATES } from 'constants';

const ConnectedDropdowns = (fields) => (
    <Flex mx={-3} flexWrap="wrap">
        <Box w={[1, 1, 1 / 2]} px={3}>
            <FormDropdown
                {...fields.countryCode}
                options={fields.countries}
                triggerOnChange={false}
                label="Country"
            />
        </Box>
        <Box w={[1, 1, 1 / 2]} px={3}>
            <FormDropdown
                {...fields.stateCode}
                options={fields.states}
                triggerOnChange={false}
                disabled={fields.countryCode.input.value !== COUNTRY_HAS_STATES}
                label="State"
            />
        </Box>
    </Flex>
);

const Amount = styled(Box)`
    flex-grow: 1;
`;

const Hr = styled.hr`
    border: none;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.darkGray}; 
`;

class Filters extends React.PureComponent{

    componentWillUpdate(nextProps) {
        const { countryCode, stateCode } = this.props;
        if (countryCode !== nextProps.countryCode && nextProps.countryCode !== COUNTRY_HAS_STATES && stateCode !== '') {
            this.props.dispatch(change('filters', 'stateCode', ''));
        }
    }


    render(){
        const { countries, states, currencies, handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit} noValidate>
                <Flex py={3} mx={-3} flexWrap="wrap">
                    <Box w={[1, 1, 1 / 2]} px={3}>
                        <Fields
                            names={[ 'countryCode', 'stateCode' ]}
                            component={ConnectedDropdowns}
                            countries={countries}
                            states={states}
                        />
                    </Box>
                    <Box w={[1, 1 / 2, 1 / 4]} px={3}>
                        <Field component={FormInput} name="city" label="City" />
                    </Box>
                    <Flex w={[1, 1 / 2, 1 / 4]} px={3}>
                        <Amount pr={2}>
                            <Field component={FormInput} name="amount" label="Amount" />
                        </Amount>
                        <Field component={FormDropdown} options={currencies} name="currency" triggerOnChange={false} />
                    </Flex>
                </Flex>
                <Hr/>
                <Flex py={3} mx={-3} flexWrap="wrap" alignItems="flex-end">
                    <Box w={[1, 1, 3 / 4]} px={3}>
                        <FormLabel>Trade</FormLabel>
                        <Flex>
                            {ACCEPT_TRADE_OPTIONS.length > 0
                            && ACCEPT_TRADE_OPTIONS.map(o =>
                                <Field key={`filter-${o.title}`} component={FormCheckbox} name={o.value} label={o.title} />
                            )}
                        </Flex>
                    </Box>
                    <Box w={[1, 1, 1 / 4]} px={3}>
                        <Button type="submit" text="Search" primary block />
                    </Box>
                </Flex>
            </Form>
        );
    }
}

Filters = reduxForm({
    form: 'filters',
    enableReinitialize: true,
    initialValues: {
        tradeCashInPerson: false,
        tradeCashByMail: false,
        tradeMoneyOrderByMail: false,
        tradeOther: false,
    },
})(Filters);

const formSelector = formValueSelector('filters');

const mapStateToProps = state => ({
    initialValues: state.search.filters,
    countryCode: formSelector(state, 'countryCode'),
    stateCode: formSelector(state, 'stateCode'),
});

Filters = connect(mapStateToProps)(Filters);

export default Filters;
