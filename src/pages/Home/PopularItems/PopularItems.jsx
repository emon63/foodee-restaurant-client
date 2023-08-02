import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularItems = () => {
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })
    // }, [])
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section>
            <SectionTitle
                heading='From Our Menu'
                subHeading='Check It Out'
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-9 mb-5'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <div className='flex justify-center mb-12'><button className="btn btn-outline border-0 border-b-4 mt-3">Show All</button>
            </div>

        </section>
    );
};

export default PopularItems;