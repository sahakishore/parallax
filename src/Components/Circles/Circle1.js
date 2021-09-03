import React from 'react';

const Circle1 = (props) => {
    const {name}=props
    return (
      <div style={{
    backgroundColor: '#00a9f4',
    borderRadius: '50%',
    width: '38px',
    height: '38px',
    opacity:'0.2',
    position:"absolute",
      }}>
        {/* <h1>{name}</h1> */}
    </div>
    )
  }

export default Circle1