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
    
    const Style = {
        color: 'red',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    }
    
    const h1Style = {
        fontSize: '50px',
    }

    const h4Style = {
        fontSize: '24px',
    }

    return (
        <div style={Style}>
            <h1 style={h1Style}>404 Page Not Found</h1>
            <h4 style={h4Style}>Go to<Link to="/"> Home</Link> page</h4>
        </div>
    )
}

export default PageNotFound
