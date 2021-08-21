import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = ({ width, hegiht }) => {
    const centerPosition = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    };
    return (
        <div style={centerPosition}>
            <Loader
                type="Oval"
                color="#6a5acd"
                height={hegiht}
                width={width}
            />
        </div>
    )
}

export default Loading
