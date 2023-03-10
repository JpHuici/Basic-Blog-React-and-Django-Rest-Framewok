import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import ModalHeader from 'react-bootstrap/ModalHeader'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';

// The Blogs component is defined as a function that accepts two properties: blogs and setBlogs. blogs is a list of posts and setBlogs is a function that is used to update blogs.
export default function Blogs({blogs = [], setBlogs}) {
    
    const [show, setShow] = useState(false); // useState is used to initialize the state of the component and update it when necessary. The state is initialized with show, record and body and updated using functions like setShow, setRecord and setBody.
    const [record, setRecord] = useState(null);
    const handleUpdate = async (id, value) => {
        return axios.put(`/put/${id}/`, value).then((response) => {
            const {data} = response;
            // The Blogs component renders a list of blog posts. It uses the map function to traverse the list of posts and create a ListGroupItem for each post.
            const newBlogs = blogs.map (blog => {
                if (blog.id === id) {
                    return data;
                } 
                return blog;
            })
            setBlogs(newBlogs)
        }).catch(() => {
            alert("Something went wrong!")
        }) 
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleSaveChanges = async () => {
        await handleUpdate(record.id, {body: record.body});
        handleClose();
    }

    const handleChange = (e) => {
        setRecord({
            ...record,
            body: e.target.value
        })
    }

    const handleDelete = (id) => {
        axios.delete(`/delete/${id}/`).then(() => {
            const newBlogs = blogs.filter(blog => {
                return blog.id !== id
            }); setBlogs(newBlogs)
        }).catch(() => {
            alert("Something went wrong!")
        })
    }

    return (
            <div>
                <ListGroup>
                    {blogs.map(blog => {
                        return (

                            <ListGroupItem key={blog.id} className='d-flex justify-content-between align-items-center'>
                            {blog.body}
                            <div>
                                {/* Each ListGroupItem has two buttons: FaEdit and FatrashAlt. FaEdit is used to edit the post and FatrashAlt is used to delete the post. These buttons are handled by onClick events. */}

                                {/* When the FaEdit button is clicked, the record state is set with the corresponding publication and a modal opens that allows editing the publication content. The modal contains two buttons: Close and Save. Close is used to close the modal and Save is used to save the changes. */}
                                <FaEdit onClick={() => {setRecord(blog); setShow(true)}} size={20} style={{ cursor: 'pointer' }}/>
                                {/* When the FatrashAlt button is clicked, the handleDelete function is called, which deletes the corresponding post and updates the blogs state using the setBlogs function. */}
                                <FaTrashAlt onClick={() => {handleDelete (blog.id)}} size={20} style={{ cursor: 'pointer' }}/>
                            </div>
                        </ListGroupItem>

                        )
                    })}
                </ListGroup>

                {/* The modal is handled by the show property. When set to true, the modal is shown and when set to false, it is hidden. The modal contains a form field which is used to edit the post. The value of the form field is set to the record state. */}
                <Modal show={show} onHide={handleClose}>
                    <ModalHeader>
                        <Modal.Title>
                            Edit Blog
                        </Modal.Title>
                    </ModalHeader>
                    <Modal.Body>
                        <FormControl value={record ? record.body: ''}
                        onChange={handleChange}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='dark' onClick={handleClose}>
                            Close
                        </Button>

                        {/* When the Save button is clicked, the handleSaveChanges function is called, which updates the corresponding post using the handleUpdate function. handleUpdate makes an HTTP request to the API and updates the blogs state using the setBlogs function. */}
                        <Button variant='dark' onClick={handleSaveChanges}>
                            Save
                        </Button>
                    </Modal.Footer>


                </Modal>
            </div>
    )
}