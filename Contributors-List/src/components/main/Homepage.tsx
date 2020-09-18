/**
 * React Functional Component
 * Main Component of the app. If a username is valid, renders userdetails and repos.
 * Otherwise, it renders 404 Not found component
 * PROPS:
 *  NO PROPS
 */

import React, { useState } from "react";

/** Import Components */
import UserSearchBar from '../user/UserSearchBar';
import UserDetails from '../user/UserDetails';
import NotFound from '../layout/NotFound';
import RepositoriesContainer from '../repositories/RepositoriesContainer';

/** Import API functions */
import { getUsersData } from '../../helpers/API';

type userObject = {
    login: string,
    imgSrc: string,
};

const HomePage: React.FC<{}> = () => {
    
    const [userData, setUserData] = useState<userObject | null>({
        login: '',
        imgSrc: '',
    });

    const getUserName = async(username: string) => {

        const userData: userObject = await getUsersData(username);
        setUserData(userData);
    };

    return(
        <>
            <UserSearchBar findUser={getUserName} />
            {
                userData ?
                    userData.login ?
                    <>
                        <UserDetails
                            username={userData.login}
                            imgSrc={userData.imgSrc}
                        />                         
                        <RepositoriesContainer login={userData.login}/>
                    </>
                    : null 
                : <NotFound />
            }
        </>
    )
}

export default HomePage;