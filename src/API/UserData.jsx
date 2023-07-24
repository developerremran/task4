import { json } from "react-router-dom";


const UserData = () => {
    const userDatas = localStorage.getItem('user-info')
    const usersData= JSON.parse(userDatas)
    return usersData;
};

export default UserData;