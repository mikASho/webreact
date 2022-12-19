import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Admin = () => {
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-2'>Добавить задание</Button>
            <Button variant={'outline-dark'} className='mt-2'>Профиль</Button>
        </Container>
    )
}
export default Admin;