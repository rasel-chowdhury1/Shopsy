import React from 'react';
import img1 from '../../assets/banner3.jpg';
import { FaStar } from "react-icons/fa6";


const ProductsData = [
    {
        id: 1,
        img: img1,
        title: 'Women Ethenic',
        rating: 5.0,
        color: 'Yellow',
        aosDelay: '0'
    },
    {
        id: 2,
        img: img1,
        title: 'Women Ethenic',
        rating: 5.0,
        color: 'Yellow',
        aosDelay: '200'
    },
    {
        id: 3,
        img: img1,
        title: 'Women Ethenic',
        rating: 5.0,
        color: 'Yellow',
        aosDelay: '400'
    },
    {
        id: 4,
        img: img1,
        title: 'Women Ethenic',
        rating: 5.0,
        color: 'Yellow',
        aosDelay: '600'
    },
    {
        id: 5,
        img: img1,
        title: 'Women Ethenic',
        rating: 5.0,
        color: 'Yellow',
        aosDelay: '800'
    },
    {
        id: 6,
        img: img1,
        title: 'Women Ethenic',
        rating: 5.0,
        color: 'Yellow',
        aosDelay: '1000'
    },
]

const Products = () => {
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/** Header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos='fade-up' className='text-sm text-primary'>Top Selling Products for you</p>
                    <h1 data-aos='fade-up' className='text-3xl font-bold'>Products</h1>
                    <p data-aos='fade-up'  className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut expedita esse odio blanditiis eveniet numquam.</p>
                </div>
                {/** body section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-3'>
                        {/** card section */}
                        {
                            ProductsData.map(data => (
                                <div 
                                 data-aos='fade-up'
                                 data-aos-delay={data.aosDelay}
                                 key={data.id} className='space-y-3'>
                                    <img src={data.img} alt="" 
                                    className='h-[220px] w-[150px] rounded-md object-cover'/>
                                    <div>
                                        <h3 className='font-semibold'>{data.title}</h3>
                                        <p className="text-sm text-gray-600">
                                            {data.color}
                                        </p>
                                        <div className='flex items-center gap-1'>
                                            <FaStar className='text-yellow-500' />
                                            <span>{data.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;