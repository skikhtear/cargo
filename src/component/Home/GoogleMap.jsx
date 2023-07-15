import React from 'react';

const GoogleMap = () => {
    return (
        <div className=''>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28770.919217485836!2d-74.02203202955178!3d40.714266188988674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1689410775580!5m2!1sen!2sbd" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default GoogleMap;
