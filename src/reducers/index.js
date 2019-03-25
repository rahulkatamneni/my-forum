import { combineReducers } from 'redux'
import _ from 'underscore';


const initialState = {
    activePage : 'USERS',
    userDetailsList : [],
    postDetailsList : [],
    userDetails: {},
    postDetails:{}
}


const toggleActivePage = (state = initialState, action) => {

    switch (action.type) {
        case 'TOGGLE_PAGE':
            return {
                ...state,
                activePage : action.activePage
            }

        default:
            return state
    }
}


const submitUserDetails = (state=initialState,action) => {
    switch (action.type){
        case 'SUBMIT_USER' : {
            var userDetailsList = [...state.userDetailsList]
            var currentUserId = computeCurrentUserId(userDetailsList)
            var userDetails = action.userDetails
            userDetails.id = currentUserId
            userDetailsList.push(action.userDetails)
            return {
                ...state,
                userDetailsList : userDetailsList

            }
        }

        default:
            return state
    }
}


const submitPostDetails = (state=initialState,action) => {
    switch (action.type){
        case 'SUBMIT_POST' : {
            var postDetailsList = [...state.postDetailsList]
            var currentPostId = computeCurrentPostId(postDetailsList)
            var postDetails = action.postDetails
            postDetails.id = currentPostId
            postDetailsList.push(action.postDetails)
            return {
                ...state,
                postDetailsList : postDetailsList

            }
        }

        default:
            return state
    }
}




export default combineReducers({
    toggleActivePage,
    submitUserDetails,
    submitPostDetails
})


//export default toggleActivePage


export const getActivePage = state => {
    return state.toggleActivePage.activePage
}

export const getUserDetailsList = state => {
    return state.submitUserDetails.userDetailsList
}


export const getPostsList = state => {
    return state.submitPostDetails.postDetailsList
}



export  function computeCurrentUserId(userDetailsList){
    if(userDetailsList.length == 0){
        return 1;
    }
    var currentUserId = 1;
    var currentUser =_.max(userDetailsList,function (userDetails) {
        return userDetails.id;
    })
    currentUserId = currentUser.id+1;
    return currentUserId
}

export  function computeCurrentPostId(postDetailsList){
    if(postDetailsList.length == 0){
        return 1;
    }
    var currentPostId = 1;
    var currentPost =_.max(postDetailsList,function (userDetails) {
        return userDetails.id;
    })
    currentPostId = currentPost.id+1;
    return currentPostId
}


export const getUserOptions = state => {
    var users = []
    var userOptions = state.submitUserDetails.userDetailsList
    for(var i=0 ; i< userOptions.length ; i++){
        var user = {
            key : userOptions[i].id,
            text : userOptions[i].username,
            value : userOptions[i].id

        }
        users.push(user)
    }
    return users;

}



