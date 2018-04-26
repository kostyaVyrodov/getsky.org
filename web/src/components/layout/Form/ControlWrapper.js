import styled from 'styled-components';
import isUndefined from 'lodash/isUndefined';

const ControlWrapper = styled.div`
    margin-top: ${props => props.theme.space[0]}px;
    margin-bottom: ${props => props.theme.space[2]}px;
    padding-top: ${props => isUndefined(props.label) ? 21 : 0}px;
`;

export default ControlWrapper;
