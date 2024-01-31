import React from 'react';

const TopProducts = () => {
    return (
        <div>
            <div className="container">
                {/** Header Section */}
                <div className='text-left mb-10'>
                    <p data-aos='fade-up' className='text-sm text-primary'>Top Rated Products for you</p>
                    <h1 data-aos='fade-up' className='text-3xl font-bold'>Best Products</h1>
                    <p data-aos='fade-up'  className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut expedita esse odio blanditiis eveniet numquam.</p>
                </div>
                {/** Body Section */}
            </div>
        </div>
    );
};

export default TopProducts;