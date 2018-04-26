import styled from 'styled-components';

const ErrorMessage = styled.p`
    margin-top: ${props => props.theme.space[0]}px;
    margin-bottom: ${props => props.theme.space[0]}px;
    font-size: ${props => props.theme.fontSizes[0]}px;
    color: ${props => props.theme.colors.red};
`;

export default ErrorMessage;
