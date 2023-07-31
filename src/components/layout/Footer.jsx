import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>
        <br/>
        <br/>

        <strong>All rights reserved @mbaburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://linkedin.com/in/kshitizmishra07/">
          <AiFillLinkedin />
        </a>
        <a href="https://instagram.com/im__kshitiz07">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/mi07Kshitiz">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;