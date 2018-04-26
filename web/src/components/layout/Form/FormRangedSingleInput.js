import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';

import { B, Tip } from 'components/layout/Text';
import { Button } from 'components/layout/Button';

import ControlInput from './ControlInput';
import FormItem from './FormItem';

const RANGED_MODE = 'RANGED_MODE';
const SINGLE_MODE = 'SINGLE_MODE';

const fullWidth = { width: '100%' };

class RangedSingleInput extends React.Component {
    componentWillMount() {
        const { value, onChange } = this.props.input;

        if (value === '') {
            onChange({ from: '', to: '', mode: RANGED_MODE });
        }
    }

    setMode = mode => {
        const { input: { onChange } } = this.props;

        onChange({ to: '', from: '', mode });
    };

    onChangeFrom = e => {
        const { input: { onChange, value } } = this.props;

        const from = e.target.value;
        onChange({ from, to: value.to || '', mode: value.mode });
    };

    onChangeTo = e => {
        const { input: { onChange, value } } = this.props;

        const to = e.target.value;
        onChange({ from: value.from || '', to, mode: value.mode });
    };

    onChangeSingle = e => {
        const { input: { onChange, value } } = this.props;

        const single = e.target.value;
        onChange({ from: single, to: '', mode: value.mode });
    };

    render() {
        const { label, placeholder, isRequired, min, max, input, meta: { error, warning, touched } } = this.props;
        const showError = !!(touched && (error || warning));

        return (
            <FormItem name={input.name} label={label} isRequired={isRequired} showError={showError} error={error}>
                <Flex mt={2}>
                    <Button type="button" text='Ranged amount' onClick={() => this.setMode(RANGED_MODE)} style={fullWidth} primary={input.value.mode === RANGED_MODE} />
                    <Button type="button" text='Single amount' onClick={() => this.setMode(SINGLE_MODE)} style={fullWidth} primary={input.value.mode === SINGLE_MODE} />
                </Flex>
                {input.value.mode === RANGED_MODE &&
                    <Flex mt={2} alignItems='center' >
                        <ControlInput type="number" min={min} max={max} placeholder={placeholder} error={showError} onChange={this.onChangeFrom} value={input.value.from} />
                        <Box mx={2}>to</Box>
                        <ControlInput type="number" min={min} max={max} placeholder={placeholder} error={showError} onChange={this.onChangeTo} value={input.value.to} />
                    </Flex>
                }
                {input.value.mode === SINGLE_MODE &&
                    <Flex mt={2} alignItems='center' >
                        <ControlInput type="number" min={min} max={max} placeholder={placeholder} error={showError} onChange={this.onChangeSingle} value={input.value.from} />
                    </Flex>
                }
                <Box mt={2}>
                    <Tip>Please choose a <B>ranged</B> or <B>single</B> amount. Valid amounts are {min} to {max}</Tip>
                    <Tip>Example for ranged amounts: <B>60 to 70</B></Tip>
                    <Tip>Example for single amount: <B>50</B></Tip>
                </Box>
            </FormItem>
        );
    };
};

RangedSingleInput.propTypes = {
    input: PropTypes.shape({
        onChange: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string,
        warning: PropTypes.string,
    }).isRequired,
    label: PropTypes.string,
    isRequired: PropTypes.bool,
    options: PropTypes.array,
    defaultValue: PropTypes.any,
    min: PropTypes.number,
    max: PropTypes.number,
};

export default RangedSingleInput;
