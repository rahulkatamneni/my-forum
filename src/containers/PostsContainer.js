import React from 'react'
import Posts from "../components/Posts";
import {connect} from "react-redux";
import {getUserOptions} from "../reducers";
import {submitPostDetails} from "../actions";


const PostsContainer=({users,submitPostDetails}) => (
    <Posts submitPostDetails={submitPostDetails} users={users} />
)

const mapStateToProps = state => ({
    users : getUserOptions(state)
})


const mapDispatchToProps = dispatch => ({
    submitPostDetails : params => dispatch(submitPostDetails(params))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsContainer)
