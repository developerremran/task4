/* eslint-disable no-undef */
import { Box, Button, Paper, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";



const UserForm = () => {

    const { user, newUser } = useContext(AuthContext)
    const [firstName, setFirstName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [alreadyNavigated, setAlreadyNavigated] = useState(false);
    const navigate = useNavigate();
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const userBio = { firstName, PhoneNumber, email };

        const existingDataJSON = localStorage.getItem('user-info');

        let existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];

        existingData.push(userBio);

        localStorage.setItem('user-info', JSON.stringify(existingData));
        setAlreadyNavigated(true);
        // newUser(email, password)
        //     .then(result => {
        //         const user = result.user
        //     })
        //     .catch(error => console.log(error.message))
        setFirstName('');
        setPhoneNumber('');
        setEmail('');
    };

    useEffect(() => {
        if (alreadyNavigated) {
            // If alreadyNavigated is true (i.e., form submitted and navigation should occur), navigate to '/user-info'
            navigate('/user-info');
        }
    }, [alreadyNavigated]);
    return (
        <div className="mainWidth">
            <Box display="flex" flexDirection="column" alignItems="center">
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Your Name"
                        variant="outlined"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                    <br /><br />
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        value={PhoneNumber}
                        onChange={handlePhoneNumberChange}
                    /> <br /><br />
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                    /> <br /><br />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default UserForm;