import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
       <div className='lg:mb-96'>
         <div className="hero bg-[#9538E2]  py-12 lg:relative ">
        <div className="hero-content text-center text-white mb-36">
          <div className="lg:w-[1000px]">
            <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="py-6">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn text-xl text-[#9538E2] rounded-lg">Shop Now</button>
          </div>
        </div>
      </div>

      <div className='lg:absolute left-60 -mt-40 border-2 p-5 rounded-lg'>
        <img className='lg:w-[1000px] lg:h-[500px] rounded-lg' src={banner} alt="" />
      </div>

       </div>
    );
};

export default Banner;