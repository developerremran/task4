import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';



const Header = () => {
 
    const itemGet = localStorage.getItem('user-info') 
    const HoverBox = styled(Box)(({ theme }) => ({
        padding: theme.spacing(2),
        borderRadius: '10px',
        color: 'white',
        backgroundColor: theme.palette.primary.main,
        transition: 'background-color 0.3s ease', // Adding smooth transition

        '&:hover': {
            backgroundColor: theme.palette.secondary.main, // Change background color on hover
        },
    }));


    return (
        <div className='mainWidth'>
            <nav>
                <Box display="flex" justifyContent="center" gap='20px' height="50px">

                    <Link to='/'>   <Box p={2} bgcolor="primary.main" borderRadius='10px' color="white">

                        Home
                    </Box>
                    </Link>

                    {
                        itemGet ?
                            <>
                                <Link to='user-info'>    <Box p={2} bgcolor="primary.main" borderRadius='10px' color="white">
                                    User Info
                                </Box>
                                </Link>
                            </>
                            :
                            <></>
                    }

                </Box>
            </nav>
        </div>
    );
};

export default Header;