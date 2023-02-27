import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import ModalHeader from 'react-bootstrap/ModalHeader'
import {FaEdit, FatrashAlt} from 'react-icons/fa';
import axion from 'axios';

export default function Blogs() {
    return (
        <ListGroup>
            <ListGroup className='d-flex justify-content-between align-items-center'>
                Content
                <FaEdit/>
                <FatrashAlt/>
            </ListGroup>

        </ListGroup>
    )
}