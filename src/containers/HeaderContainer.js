import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {toggleActivePage} from '../actions'
import Header from '../components/Header'
import { getActivePage } from '../reducers'




const HeaderContainer=({activePage,toggleActivePage}) => (
    <Header activePage={activePage} toggleActivePage ={toggleActivePage} />
)

HeaderContainer.propTypes ={
    activePage : PropTypes.string.isRequired,
    toggleActivePage : PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    activePage : getActivePage(state)
})

const mapDispatchToProps = dispatch => ({
    toggleActivePage : params => dispatch(toggleActivePage(params))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer)
