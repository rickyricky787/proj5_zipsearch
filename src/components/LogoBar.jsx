import React from "react";

class LogoBar extends React.Component {
    render() {
      const header = {
        
        backgroundColor: "rgba(255,255,255, 0.90)",
        padding: "20px",
        margin: "50px",
        boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.75)",
        borderRadius: "10px",
        textAlign: "center"
      };
      return (
        <div style={header}>
        <h1>ZipSearch</h1>
        </div>
      );
    }
  }

export default LogoBar;