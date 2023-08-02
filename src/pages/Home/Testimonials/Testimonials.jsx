import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('../../../../public/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="py-5">
            <SectionTitle
                subHeading='What Our Client Say'
                heading='Testimonials'
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(rev => <SwiperSlide key={rev._id}>
                        <div className="flex flex-col items-center my-8 mx-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rev.ratingfl}
                                readOnly
                            />
                            <p>{rev.details}</p>
                            <h3 className="text-2xl text-orange-400 py-6">{rev.name}</h3>
                        </div>
                    </SwiperSlide>
                    )


                }
            </Swiper>

        </section >
    );
};

export default Testimonials;