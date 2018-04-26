import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Box } from 'grid-styled';

import Container from 'components/layout/Container';
import Table from 'components/layout/Table';
import { AdvertRow } from 'components/layout/TableAdverts';

import Spinner from 'components/layout/Spinner';

import { Tab, Tabs, TabList, TabPanel } from 'components/layout/Tabs';
import { getAdverts } from './actions';
import bgImage from './intro-bg.jpg';

const Intro = styled.div`
    background: ${props => props.theme.colors.black} url(${bgImage}) 50% 20% no-repeat;
    background-size: cover;
    padding: ${props => props.theme.space[8] * 2}px 0 ${props => props.theme.introTabsHeight + props.theme.space[8]}px;
    color: ${props => props.theme.colors.white};
    
    h1 {
        font-family: ${props => props.theme.fontBold};
        font-size: 38px;
        line-height: 44px;
        padding-top: 10px;
    }
    
    p {
        max-width: 650px;
        font-size: ${props => props.theme.fontSizes[2]}px;
        line-height: 30px;
    }
`;

export const buyAdvertsColumns = [
    { name: 'Seller' },
    { name: 'Will sell' },
    { name: 'Trade options' },
    { name: 'Expired', style: { width: '170px' } },
];

export const sellAdvertsColumns = [
    { name: 'Buyer' },
    { name: 'Will pay' },
    { name: 'Trade options' },
    { name: 'Expired', style: { width: '170px' } },
];

class LatestAdverts extends React.Component {
    componentWillMount() {
        this.props.getAdverts();
    }

    render() {
        const { skyPrices, buyAdverts, sellAdverts } = this.props;

        const sellAdvertsWithPrice = sellAdverts.map(i => ({ ...i, price: skyPrices['USD'] }));
        const buyAdvertsWithPrice = buyAdverts.map(i => ({ ...i, price: skyPrices['USD'] }));
        return (
            <Box>
                <Intro className="intro">
                    <Container flexDirection="column">
                        <h1>Buy and sell Skycoin <br />person-to-person with cash, by mail,<br /> money order & more…</h1>
                        <p>We never store Skycoin on this site so your money can't be hacked or stolen. All transactions are completely peer-to-peer (seller to buyer) and no email is required.</p>
                    </Container>
                </Intro>
                <Tabs>
                    <TabList>
                        <Tab tab={'first-tab'}><strong>Buy Skycoin</strong></Tab>
                        <Tab tab={'second-tab'}><strong>Sell Skycoin</strong></Tab>
                    </TabList>
                    <TabPanel>
                        <Container flex='1 0 auto' flexDirection="column" pt={'50px'}>
                            {this.props.loading && <Spinner />}
                            <Table columns={buyAdvertsColumns} rowComponent={AdvertRow} rowData={sellAdvertsWithPrice} />
                        </Container>
                    </TabPanel>
                    <TabPanel>
                        <Container flex='1 0 auto' flexDirection="column" pt={'50px'}>
                            {this.props.loading && <Spinner />}
                            <Table columns={sellAdvertsColumns} rowComponent={AdvertRow} rowData={buyAdvertsWithPrice} />
                        </Container>
                    </TabPanel>
                </Tabs>
            </Box>
        );
    }
}

export default connect(({ latestAdverts, app: { skyPrices } }) => ({ ...latestAdverts, skyPrices }),
    ({ getAdverts }))(LatestAdverts);
