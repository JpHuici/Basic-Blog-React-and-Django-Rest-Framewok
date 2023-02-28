import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import ModalHeader from 'react-bootstrap/ModalHeader'
import {FaEdit, FatrashAlt} from 'react-icons/fa';
import axion from 'axios';

export default function Blogs({blogs = [], setBlogs}) {
    return (
            <div>
                <ListGroup>
                    {blogs.map(blog => {
                        return (

                            <ListGroupItem key={blog.id} className='d-flex justify-content-between align-items-center'>
                            {blog.body}
                            <div>
                                <FaEdit size={20} style={{ cursor: 'pointer' }}/>
                                <FatrashAlt size={20} style={{ cursor: 'pointer' }}/>
                            </div>
                        </ListGroupItem>

                        )
                    })}
                </ListGroup>

                <Modal>
                    <ModalHeader>
                        <Modal.Title>
                            Edit Blog
                        </Modal.Title>
                    </ModalHeader>
                    <Modal.Body>
                        <FormControl/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='dark'>
                            Close
                        </Button>
                        <Button variant='dark'>
                            Save
                        </Button>
                    </Modal.Footer>


                </Modal>
            </div>
    )
}