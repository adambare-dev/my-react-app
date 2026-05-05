import React from 'react'

const Profile_card = ({ image, name, Role, }) => {
    return (
        <div className='cards'>
            <img src={image} alt={name} />
            <p><b>name:</b>{name}</p>
            <p>Role: {Role}</p>
        </div>
    );
}

export default Profile_card