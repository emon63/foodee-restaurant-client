import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item text-white pt-3 bg-fixed">
            <SectionTitle heading='featured item' subHeading='Check It Out'></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center gap-4 pt-6 pb-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="">
                    <p>Aug 5,2023</p>
                    <p className="uppercase text-2xl">where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium facilis animi vero, excepturi nobis quis eos nesciunt culpa molestiae, error incidunt nulla hic autem unde, in adipisci provident. Dolorem deleniti facere dolor consectetur quos eveniet quibusdam tempora sunt earum maxime magni ratione architecto deserunt exercitationem vitae corrupti, aliquam aut excepturi.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-3">Order Now</button>
                </div>
            </div>

        </div>

    );
};

export default Featured;