import React from 'react'

import MenuItem from 'material-ui/MenuItem'
import Delete from 'material-ui/svg-icons/action/delete'

const SingleTask = (props) => (
    <MenuItem 
    primaryText={'Task test'}
    rightIcon={<Delete onClick={() => alert('Kliknąłeś w przycisk Delete')}/>}
    />
)

export default SingleTask