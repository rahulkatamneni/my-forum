import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPostsList } from '../reducers'
import {Table } from 'semantic-ui-react'

const PostsList=({postDetailsList}) => {
    var list = []

    for(var i=0; i<postDetailsList.length ;i++){
        list.push(<Table.Row>
            <Table.Cell>{postDetailsList[i].id}</Table.Cell>
            <Table.Cell>{postDetailsList[i].title}</Table.Cell>
            <Table.Cell>{postDetailsList[i].comments}</Table.Cell>
            <Table.Cell>{postDetailsList[i].username}</Table.Cell>
            <Table.Cell>{postDetailsList[i].userId}</Table.Cell>
            <Table.Cell />
        </Table.Row>)
    }
    return (<Table celled structured>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Comments</Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>UserID</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {list}
        </Table.Body>
    </Table>)

}





const mapStateToProps = state => ({
    postDetailsList: getPostsList(state)
})


export default connect(
    mapStateToProps,
    null

)(PostsList)