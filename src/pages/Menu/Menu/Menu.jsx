import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    const pizza = menu.filter(item => item.category === 'pizza')

    return (
        <div>
            <Helmet>
                <title>Foodee | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            <SectionTitle heading="today's offer" subHeading="Don't Miss"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert}
                img={dessertImg} title='Dessert'></MenuCategory>

            <MenuCategory items={pizza}
                img={dessertImg} title='Pizza'></MenuCategory>

            <MenuCategory items={salad}
                img={saladImg} title='Salads'></MenuCategory>

            <MenuCategory items={soup}
                img={soupImg} title='Soups'></MenuCategory>
        </div>
    );
};

export default Menu;