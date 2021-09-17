import React from "react";

const Footer = () => {
  return (
    <div
      className="nc-Footer"
      style={{
        marginTop: 30,
        padding: "30px 0 30px 0",
        backgroundColor: "#f0f0f0",
      }}
    >
      <span style={{ textAlign: "center" }}>
        @copyright{" "}
        <a
          style={{ color: "darkOrange", fontWeight: 700 }}
          target="_blank"
          rel="noreferrer"
          href="https://www.satdevelop.com"
        >
          satdevelop.com
        </a>{" "}
        - IT Blogs and Tools
      </span>
    </div>
  );
};

export default Footer;
