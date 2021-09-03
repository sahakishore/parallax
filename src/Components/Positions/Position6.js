import React from 'react'
import PropTypes from 'prop-types'

import Circle1 from './../Circles/Circle1';
import Circle2 from './../Circles/Circle2';
import Circle3 from './../Circles/Circle3';
import Circle4 from './../Circles/Circle4';


const Position6 = (props) => {
    const {clicked1, clicked2, clicked3 } =props 
    
    console.log("position data:",clicked1)

    return (
        <>
            {clicked1 ?
                <Circle3/>: ""
            }
            {clicked2 ?
                <Circle4/>: ""
            }
            {clicked3 ?
                <Circle1/>: ""
            }
            
            
        </>
    )
}

export default Position6

// Position1.propTypes = {
//     clicked1: PropTypes.bool,
//     clicked2: PropTypes.bool,
//     clicked3: PropTypes.bool
// }

// Position1.defaultProps = {
//     clicked1: false,
//     clicked2: false,
//     clicked3: false
// }