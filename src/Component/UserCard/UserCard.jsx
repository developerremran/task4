import { Box, Card, CardContent, Typography } from "@mui/material";


const UserCard = ({ user, index }) => {
    console.log(user);
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    return (
        <Box border={1} borderRadius={2}>
            <Card sx={{ minWidth: 50 }}>
                <CardContent>
                    <h2 style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'red',color:'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}  >{index + 1}</h2>
                    <Typography variant="h5" component="div">

                        Name : {user.firstName}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Email : {user.email}

                    </Typography>
                    <Typography variant="body2">
                    Phone Number {user.PhoneNumber}
                    </Typography>
                </CardContent>

            </Card>
        </Box>
    );
};

export default UserCard;