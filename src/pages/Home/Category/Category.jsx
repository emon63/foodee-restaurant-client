import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import chefService from '../../../assets/home/chef-service.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';



const Category = () => {
    return (
        <section>
            <SectionTitle
                heading={'order now'}
                subHeading={'From 11.00am to 10.00pm'}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-12"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-center text-white -mt-16 text-4xl uppercase'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-center text-white -mt-16 text-4xl uppercase'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-center text-white -mt-16 text-4xl uppercase'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-center text-white -mt-16 text-4xl uppercase'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-center text-white -mt-16 text-4xl uppercase'>Salads</h3>
                </SwiperSlide>
            </Swiper>
            <div className="hero mb-6" style={{ backgroundImage: `url(${chefService})`, height: '70vh' }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl bg-white">
                        <h1 className="mb-5 text-5xl text-black font-bold">Foodee Restuerant</h1>
                        <p className="mb-5 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Category;