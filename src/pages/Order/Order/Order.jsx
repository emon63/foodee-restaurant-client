import { useState } from 'react';
import Cover from '../../../Shared/Cover/Cover';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {

    const [menu] = useMenu();
    const { category } = useParams();
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    const pizza = menu.filter(item => item.category === 'pizza')

    return (
        <div>
            <Helmet>
                <title>Foodee | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title={'Order Food'}></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab><Link to='/order/salad'>Salads</Link></Tab>
                    <Tab><Link to='/order/pizza'>Pizza</Link></Tab>
                    <Tab><Link to='/order/soup'>Soups</Link></Tab>
                    <Tab><Link to='/order/dessert'>Dessert</Link></Tab>
                    <Tab><Link to='/order/drinks'>Drinks</Link></Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;