// import { AiOutlineCalendar } from 'react-icons/ai';

const Banner = () => {
    return (
        <div className="mt-16 rounded-lg lg:w-full bg-cover h-[90vh] bg-[url('https://i.ibb.co/bFxn2JF/virtual-product-launch-event-examples.jpg')] shadow-xl">

           
            <div className="bg-gradient-to-r from-blue-500 via-yellow-700 ... text-blue-300 font-medium p-4 rounded-t-lg w-[100px] lg:w-[550px]">
            <h1 className="text-xl lg:text-3xl lg:ml-12">The future is here</h1>
            </div>

            <div className="relative lg:left-[1000px] top-20">
                {/* <h1 className=" text-red-500 text-5xl">icon</h1>
                <AiOutlineCalendar className='text-white w-5 h-5'></AiOutlineCalendar>
                icon1 */}
            </div>
        </div>
    );
};

export default Banner;