import React from 'react';
import UserForm from '../../Component/UserForm/UserForm';
import { Box } from '@mui/material';

const Home = () => {
    return (
        <div className='mainWidth'>
            <Box paddingTop={10} boxShadow={20}   paddingBottom={10} marginY={10}>
                <UserForm ></UserForm>
            </Box>
        </div>
    );
};

export default Home;