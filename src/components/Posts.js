import React, {Component} from 'react'
import {Button, Header, Image, Modal, Checkbox, Form,Dropdown} from 'semantic-ui-react'
import PostsList from './PostsList'


export default class Posts extends Component {

    state = {
        title: '',
        username: '',
        comments: '',
        userId: -1,

    }


    onTitleChange = e => {
        this.setState({title: e.target.value})
    }


    onCommentsChange = e => {
        this.setState({comments: e.target.value})
    }



    handUserChange = (e,data) => {
        this.setState({userId : data.value, username : e.target.textContent})
    }


    submitPostDetails() {
        var postDetails = {
            title: this.state.title,
            username: this.state.username,
            comments: this.state.comments,
            userId: this.state.userId,
        }
        this.props.submitPostDetails(postDetails)
        this.refs.Modal.handleClose()
    }

    handleModalClose() {
        this.setState({
            title: '',
            username: '',
            comments: '',
            userId: -1,
        })

    }


    render() {
        return (
            <div><h1>Posts PAGE</h1>
                <Modal onClose={(e) => this.handleModalClose(e)} ref={'Modal'}
                       trigger={<Button className={'create-user-btn'}>Create Post</Button>}>
                    <Modal.Header>Create User</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Title</label>
                                <input placeholder='Title' value={this.state.title}
                                       onChange={this.onTitleChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Comments</label>
                                <input placeholder='username' value={this.state.comments}
                                       onChange={this.onCommentsChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Username</label>
                                <Dropdown placeholder='User' onChange={this.handUserChange} options={this.props.users} />
                            </Form.Field>

                            <Button type='submit' onClick={(e) => this.submitPostDetails(e)}>Submit</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
                <PostsList/>
            </div>
        )
    }

}