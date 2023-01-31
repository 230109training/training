import React from 'react'

const withAuth = (Component: any) => {

    function isAuthenticated(){
        // authenticating logic
        return true;
    }

    return function AuthenticatedComponent(props: any){
        if(isAuthenticated()){
            return(
                <Component {...props}></Component>
            );
        }else{
            return <div> Please login to access this website</div>
        }
    }
}

export default withAuth