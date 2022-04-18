import React from 'react';

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    return (
        <footer className='h-40 grid place-content-center bg-gray-200'>
            <p>All Right Reserved By Al Nafis. {year}</p>
        </footer>
    );
};

export default Footer;