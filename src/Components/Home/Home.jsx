import React from 'react';
import Banner from './Banner/Banner';
import Categories from './CategoriesFeatures/Categories';
import Cards from '../../Features/Cards/Cards';
import Partners from './Partners/Partners';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='space-y-2.5 mx-1 md:mx-3'>
             <Helmet>
        <title>Brimmart | Wholesale Marketplace</title>
      </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <Partners></Partners>
            <Cards></Cards>
        </div>
    );
};

export default Home;