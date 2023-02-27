import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';

export default function BlogForm() {
    return (
        <Form>
            <InputGroup className='mb-3'>
                <FormControl type='text' placeholder='Type Here!'/>
                    <Button variant='dark' type='submit'>
                        POST
                    </Button>
                
            </InputGroup>
        </Form>
    )
} 