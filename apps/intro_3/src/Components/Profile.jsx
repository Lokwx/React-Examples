import React from 'react'

export default function Profile({user, imageUrl}) {
  return (
    <>
        <h1>{user.name}</h1>
        <img
            className='avatar'
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            styl={{
                width: user.imageSize,
                height: user.imageSize
            }}
        />
    </>
  )
}

export default Profile;
