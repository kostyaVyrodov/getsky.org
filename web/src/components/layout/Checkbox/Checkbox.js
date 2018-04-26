import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled'

import 'font-awesome/css/font-awesome.min.css';

const CheckBoxInput = styled.input`
    font: normal normal normal 14px/1 FontAwesome;
    -webkit-appearance: none;
    background-color: transparent;
    color: black;
    border: 1px solid ${props => props.theme.colors.grayBlue};
    padding: 10px;
    display: inline-block;
    position: relative;
    outline: none;

    &:hover {
        cursor: pointer;
    }

    &:active, &:focus {
        border: 1px solid ${props => props.theme.colors.blue};
        outline: none;
    }

    &:checked:before {
        content: '';
        position: absolute;
        top: 3px;
        left: 7px;
        width: 4px;
        height: 10px;
        border: solid ${props => props.theme.colors.black};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }

    + label {
        color: ${props => props.theme.colors.black};
    }
`;

const Label = styled.label`
    margin-right: ${props => props.isInline ? props.theme.space[1] : 0}px;
    font-size: 14px;
    font-family: ${props => props.theme.fontLight};
`;

const CheckBox = ({ labelText, checked, onClick, onChange, inline }) => {
    return (
        <Flex alignItems='center'>
            <Box>
                <CheckBoxInput type="checkbox" checked={checked} onChange={onChange} />
            </Box>
            <Box ml={1}>
                <Label isInline={inline}>{labelText}</Label>
            </Box>
        </Flex>
    )
};

CheckBox.propTypes = {
    labelText: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    inline: PropTypes.bool
};

CheckBox.defaultProps = {
    inline: false
};

export default CheckBox;
