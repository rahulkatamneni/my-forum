import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

const Header =({activePage, toggleActivePage}) => (
    <div style={{backgroundColor:'green'}}>
        <Button onClick={() => toggleActivePage('USERS')}>Users</Button>
        <Button onClick={() => toggleActivePage('POSTS')} >Posts</Button>
    </div>
)

Header.propTypes = {
    activePage : PropTypes.string.isRequired,
    toggleActivePage : PropTypes.func.isRequired
}

export default Header