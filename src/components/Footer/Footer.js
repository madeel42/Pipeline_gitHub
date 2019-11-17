import React from 'react'
const Footer = ({title, description}) => {
    return(
        <div style={{
            backgroundColor: "#343a40",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            color: '#FFF',
            padding: 25,
            position: "fixed",
            left: "0",
            bottom: "0",
            height: 120,
            width: "100%",
        }}>
                <h2>{title}</h2>
                <p>{description}</p>
        </div>
    );
}


export default Footer;