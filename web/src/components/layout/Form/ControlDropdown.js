import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getBorderColor } from './helper';

const SelectWrapper = styled.div`
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: ${props => props.theme.space[2]}px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 4px 0 4px;
        border-color: ${props => props.theme.colors.grayBlue} transparent transparent transparent;
        transform: translateY(-50%);
    }
`;

const Select = styled.select`
    width: 100%;
    height: ${props => props.theme.controlHeight}px;
    padding: ${props => props.theme.space[0]}px ${props => props.theme.space[5]}px ${props => props.theme.space[0]}px ${props => props.theme.space[1]}px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => getBorderColor(props)};
    border-radius: 0;
    background: transparent;
    font-family: ${props => props.theme.fontLight};
    font-size: ${props => props.theme.fontSizes[1]}px;
    -webkit-appearance: none;
    
    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.colors.blue};
    }
`;

const ControlDropdown = ({ name, options, defaultValue, onChange, error, input, disabled }) => (
    <SelectWrapper>
        <Select name={name} value={input && input.value} onChange={onChange} defaultValue={defaultValue} error={error} disabled={disabled} >
            <option value="" disabled>Select</option>
            {options.map((item, i) => <option value={item.value} key={i}>{item.text}</option>)}
        </Select>
    </SelectWrapper>
);

ControlDropdown.propTypes = {
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        text: PropTypes.string.isRequired,
    })),
};

export default ControlDropdown;
