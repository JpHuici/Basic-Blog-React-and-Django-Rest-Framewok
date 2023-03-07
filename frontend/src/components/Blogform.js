import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';

// This code defines a React component called BlogForm, which uses several external libraries such as react-bootstrap and axios
export default function BlogForm({blogs, setBlogs}) {
    const [body, setBody] = useState(''); // The component defines a local state using the useState hook, which contains the body variable initialized as an empty string.
    // The handleChange updates the state of body whenever a change occurs in the text input field
    const handleChange = e => {
        setBody(e.target.value);
    }
    // The handleSubmit function is triggered when the form is submitted and performs a POST request using the axios library to send the contents of the input field to the server's /post/ URL. If the field is empty, it displays an alert to the user. If the request is successful, it updates the blogs state using the setBlogs function passed as prop to the component and adds the new blog to the existing blogs array.
    const handleSubmit = e => {
        e.preventDefault();
        if (!body) {
            return alert("Write something to post!")
        }
        axios.post('/post/', {
            body:body
        }).then((response) => {
            setBody('');
            const {data} = response;
            setBlogs([
                ...blogs,
                data
            ]).catch(() => {
                alert("Something went wrong!")
            })
        })
    }

    // The component returns a form that uses several react-bootstrap components to render a text input field and a submit button. When the button is clicked, the handleSubmit function is called to send the form information to the server.
    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className='mb-3'>
                <FormControl onChange={handleChange} value={body} type='text' placeholder='Type Here!'/>
                    <Button variant='dark' type='submit'>
                        POST
                    </Button>
                
            </InputGroup>
        </Form>
    )
} 
