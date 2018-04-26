import styled from 'styled-components';
import { Tab as UnstyledTab, Tabs, TabList as UnstyledTabList, TabPanel as UnstyledTabPanel } from 'react-tabs';

const leftTabNames = ['first-tab', 'buy-tab'];
const secondaryTabs = ['buy-tab', 'sell-tab'];
const isLeftTab = props =>  leftTabNames.indexOf(props.tab) >= 0;
const isSecondaryTab = props => secondaryTabs.indexOf(props.tab) >= 0;

const TabList = styled(UnstyledTabList) `
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: ${props => props.theme.introTabsHeight}px;
    margin-top: -${props => props.theme.introTabsHeight}px;
    background: transparent;
`;

const Tab = styled(UnstyledTab) `
    display: flex;
    flex-direction: column;
    justify-content: center;
    outline: none;
    height: ${props => props.theme.introTabsHeight}px;
    width: 100%;
    background-color: ${props => props.selected ? props.theme.colors.white : 'transparent'};
    color: ${props => props.selected ? props.theme.colors.black : (isSecondaryTab(props) ? props.theme.colors.white : props.theme.colors.mint)};
    font-size: ${props => props.theme.fontSizes[1]}px;
    font-family: ${props => props.theme.fontBold};
    line-height: 32px;
    letter-spacing: 1px;
    text-align: center;
    cursor: pointer;

    margin-left: ${props => isLeftTab(props) ? '-30px' : '0px'};
    margin-right: ${props => isLeftTab(props) ? '0px' : '-30px'};

    transform: ${props => isLeftTab(props) ? 'skew(30deg)' : 'skew(-30deg)'};
    -webkit-transform:${props => isLeftTab(props) ? 'skew(30deg)' : 'skew(-30deg)'};
    -moz-transform:${props => isLeftTab(props) ? 'skew(30deg)' : 'skew(-30deg)'};
    -o-transform:${props => isLeftTab(props) ? 'skew(30deg)' : 'skew(-30deg)'};

    strong {
        display: block;
        font-size: ${props => props.theme.fontSizes[4]}px;
        margin-top: ${props => props.theme.space[0]}px;
        transform: ${props => isLeftTab(props) ? 'skew(-30deg)' : 'skew(30deg)'};
        -webkit-transform: ${props => isLeftTab(props) ? 'skew(-30deg)' : 'skew(30deg)'};
        -moz-transform: ${props => isLeftTab(props) ? 'skew(-30deg)' : 'skew(30deg)'};
        -o-transform: ${props => isLeftTab(props) ? 'skew(-30deg)' : 'skew(30deg)'};
    }

    &:hover {
        background-color: ${props => props.selected ? props.theme.colors.white : (isSecondaryTab(props) ? 'transparent' : 'rgba(255, 255, 255, 0.1)')};
    }
`;

const TabPanel = styled(UnstyledTabPanel)`
    background: ${props => props.theme.colors.white};
`;

TabList.tabsRole = 'TabList';
Tab.tabsRole = 'Tab';
TabPanel.tabsRole = 'TabPanel';

export { Tabs, TabPanel, Tab, TabList };
