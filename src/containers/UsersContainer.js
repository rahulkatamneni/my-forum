import React from 'react'
import Posts from "../components/Posts";
import {connect} from "react-redux";
import Users from "../components/Users";
import {getUserDetailsList} from "../reducers";
import {submitUserDetails} from "../actions";


const UsersContainer=({userDetailsList,submitUserDetails}) => (
    <Users submitUserDetails={submitUserDetails} userDetailsList={userDetailsList} />
)

const mapStateToProps = state => ({
    userDetailsList : getUserDetailsList(state)
})

const mapDispatchToProps = dispatch => ({
    submitUserDetails : params => dispatch(submitUserDetails(params))
})


export default connect(
    null,
    mapDispatchToProps
)(UsersContainer)
