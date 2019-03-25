import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUserDetailsList } from '../reducers'
import {Table } from 'semantic-ui-react'

const UserDetailsList=({userDetailsList}) => {
    var list = []

    for(var i=0; i<userDetailsList.length ;i++){
        list.push(<Table.Row>
            <Table.Cell>{userDetailsList[i].id}</Table.Cell>
            <Table.Cell>{userDetailsList[i].fullname}</Table.Cell>
            <Table.Cell>{userDetailsList[i].username}</Table.Cell>
            <Table.Cell>{userDetailsList[i].email}</Table.Cell>
            <Table.Cell>{userDetailsList[i].website}</Table.Cell>
            <Table.Cell>{userDetailsList[i].company}</Table.Cell>
            <Table.Cell />
        </Table.Row>)
    }
    return (<Table celled structured>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Full Name</Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Website</Table.HeaderCell>
                <Table.HeaderCell>Company</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {list}
        </Table.Body>
    </Table>)

}





const mapStateToProps = state => ({
    userDetailsList: getUserDetailsList(state)
})


export default connect(
    mapStateToProps,
    null

)(UserDetailsList)