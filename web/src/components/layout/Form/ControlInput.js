import styled from 'styled-components';
import { getBorderColor } from './helper';

const ControlInput = styled.input`
    width: 100%;
    height: ${props => props.theme.controlHeight}px;
    padding: ${props => props.theme.space[0]}px ${props => props.theme.space[1]}px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => getBorderColor(props)};
    background: transparent;
    font-family: ${props => props.theme.fontLight};
    font-size: ${props => props.theme.fontSizes[1]}px;
    
    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.colors.blue};
    }
`;

export default ControlInput;
