import React from "react";
import aj from '../src/assets/ajyajaya.jpg';  // Ensure the image path is correct
import '../components/navbar.css';
import Footer from "./footer";

const Jayaanth = (props) => {
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                backgroundImage: `url(${aj})`,  // Add background image here
                backgroundSize: "cover",  // Cover the full area
                backgroundPosition: "center", // Center the background image
                minHeight: "120vh", // Ensure the div covers full height of the viewport
                flexDirection: "column", // Allow for centered vertical content
                alignItems: "center", // Center horizontally
            }}>
                <h1 style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",  // White background with opacity for contrast
                    width: "300px",
                    border: "15px solid black",
                    padding: "100px",
                    margin: "20px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    This is my Home page {props.Name}
                </h1>
                <Footer/>
            </div>
        </>
    );
};

export default Jayaanth;
