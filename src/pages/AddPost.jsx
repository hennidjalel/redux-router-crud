import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { insertPost } from '../redux/postSlice';
import Loading from "../components/Loading"

import { useNavigate } from 'react-router-dom';


const AddPost = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.posts)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")


    const handelSubmit = (e) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * 10)
        dispatch(insertPost({ id, title, desc }))
            .unwrap()
            .then(() => {
                navigate('/')
            })
            .catch((error) => { console.log(error) })

    }

    return (
        <Form onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Post Title</Form.Label>
                <Form.Control type="text" placeholder="" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Post Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} />
            </Form.Group>

            <Loading isLoading={isLoading} error={error}>
                <Button variant="primary" type='submit'>Submit</Button>
            </Loading>
        </Form >
    )
}

export default AddPost