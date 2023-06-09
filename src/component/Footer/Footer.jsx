import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";
function Footer() {
  const support = [
    {
      title: "Giới thiệu",
      href: "/",
    },
    {
      title: "SP-DV",
      href: "/",
    },
    {
      title: "Hỗ trợ",
      href: "/",
    },
    {
      title: "Thỏa thuận sử dụng",
      href: "/",
    },
  ];
  const social = [
    {
      icon: "fab fa-facebook",
      href: "https://www.facebook.com/bui.thinh.520/",
    },
    {
      icon: "fab fa-github",
      href: "https://github.com/buihuuthinh456",
    },
    {
      icon: "fab fa-youtube",
      href: "https://www.youtube.com/channel/UCUOeedE6Cxh_9xUlk75AidA",
    },
  ];
  return (
    <div className="footer">
      <div className="footer-contact">
        <ul className="footer-contact__support">
          {support.map((item, index) => (
            <li className="footer-contact__support__item" key={index}>
              <Link to={item.href} rel="noopener noreferrer">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="footer-contact__social">
          {social.map((item, index) => (
            <li className="footer-contact__social__item" key={index}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <i className={item.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
