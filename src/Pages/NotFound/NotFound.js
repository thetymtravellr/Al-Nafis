import React from 'react';
import ghost from '../../Assets/images/icons/ghost.png';

const NotFound = () => {
    return (
        <section className='min-h-screen  max-w-7xl mx-auto flex justify-center items-center my-20 lg:my-0 relative'>
            <div>
                <img src={ghost} alt="" />
            </div>
        </section>
    );
};

export default NotFound;