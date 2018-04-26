import styled from 'styled-components';

const ErrorMessage = styled.p`
    padding: ${props => props.theme.space[3]}px; ${props => props.theme.space[3]}px;
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes[1]}px;
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.success};
`;

export default ErrorMessage;
