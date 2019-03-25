import React, {Component} from 'react'
import {Button, Header, Image, Modal, Checkbox, Form} from 'semantic-ui-react'
import UserDetailsList from './UserDetailsList'


export default class Users extends Component {

    state = {
        fullname: '',
        username: '',
        email: '',
        website: '',
        company: ''
    }


    onFullNameChange = e => {
        this.setState({fullname: e.target.value})
    }


    onUserNameChange = e => {
        this.setState({username: e.target.value})
    }


    onEmailChange = e => {
        this.setState({email: e.target.value})
    }


    onWebsiteChange = e => {
        this.setState({website: e.target.value})
    }


    onCompanyChange = e => {
        this.setState({company: e.target.value})
    }


    submitUserDetails() {
        var userDetails = {
            username: this.state.username,
            fullname: this.state.fullname,
            email: this.state.email,
            website: this.state.website,
            company: this.state.company
        }
        this.props.submitUserDetails(userDetails)
        this.refs.Modal.handleClose()
    }

    handleModalClose() {
        this.setState({
            fullname: '',
            username: '',
            email: '',
            website: '',
            company: ''
        })

    }


    render() {
        return (
            <div><h1>Users PAGE</h1>
                <Modal onClose={(e) => this.handleModalClose(e)} ref={'Modal'}
                       trigger={<Button className={'create-user-btn'}>Create User</Button>}>
                    <Modal.Header>Create User</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Full Name</label>
                                <input placeholder='Full Name' value={this.state.fullname}
                                       onChange={this.onFullNameChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label>username</label>
                                <input placeholder='username' value={this.state.username}
                                       onChange={this.onUserNameChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label>email</label>
                                <input placeholder='email' value={this.state.email} onChange={this.onEmailChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label>website</label>
                                <input placeholder='website' value={this.state.website}
                                       onChange={this.onWebsiteChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Company Details</label>
                                <input placeholder='details' value={this.state.company}
                                       onChange={this.onCompanyChange}/>
                            </Form.Field>
                            <Button type='submit' onClick={(e) => this.submitUserDetails(e)}>Submit</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
                <UserDetailsList/>
                {/*<UserDetailsList />*/}
            </div>
        )
    }

}