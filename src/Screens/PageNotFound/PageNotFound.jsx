import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

const PageNotFound = () => {
    const history = useHistory();
    useEffect(() => {
        console.log('Page not found');
        setTimeout(() => {
            history.push('/');     
        }, 3000);
    }, []); 
    return (
        <>
            <h1>404 Page Not Found</h1>
            Go to<Link to="/"> Home</Link> page
        </>
    )
}

export default PageNotFound
