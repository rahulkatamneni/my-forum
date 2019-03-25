import React from 'react'
import PropTypes from 'prop-types'
import {getActivePage} from "../reducers";
import { connect } from 'react-redux'
import PostsContainer from './PostsContainer'
import UsersContainer from './UsersContainer'


const MainSectionContainer=({activePage}) => {
    if(activePage == "POSTS"){
       return (<PostsContainer/>)
    }
    else {
        return (<UsersContainer/>)
    }
}


const mapStateToProps = state => ({
    activePage : getActivePage(state)
})

export default connect(mapStateToProps,null)(MainSectionContainer)