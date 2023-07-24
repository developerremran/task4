import { Box } from "@mui/material";
import UserData from "../../API/UserData";
import UserCard from "../../Component/UserCard/UserCard";
import DropdownComponent from "../../Component/DropdownComponent/DropdownComponent";



const SingleDetails = () => {
    const usersData = UserData()
    console.log(usersData);

    return (
        <Box className="mainWidth" marginTop={20}>

            <h2>Here is DropDown Item</h2>
            <DropdownComponent></DropdownComponent>

            <Box className="mainWidth" display='grid' style={{ gridTemplateColumns: '1fr 1fr 1fr' }} gap={10}>
                {
                    usersData.map((user, index) => <UserCard key={user.firstName} user={user} index={index}> </UserCard>)
                }

            </Box>
        </Box>
    );
};

export default SingleDetails;