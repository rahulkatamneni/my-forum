export const toggleActivePage = (selectedPage) => {
    return{
        type: 'TOGGLE_PAGE',
        activePage: selectedPage
    }
}

export const setInitialState = () => dispatch => {
    dispatch({
        type : "SET_INITIAL_STATE"
    })

}


export const submitUserDetails = (userDetails) => {
    return {
        type : 'SUBMIT_USER',
        userDetails : userDetails
    }
}



export const submitPostDetails = (postDetails) => {
    return {
        type : 'SUBMIT_POST',
        postDetails : postDetails
    }
}
