
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='md:w-1/3 mx-auto text-center my-8 mt-16'>
            <p className='text-yellow-600 py-2'>--- {subHeading} ---</p>
            <h3 className='text-4xl uppercase border-y-4 py-4 '>{heading}</h3>
        </div>
    );
};

export default SectionTitle;