import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.css"
import "typeface-roboto"

export default class Layout extends React.PureComponent {
  links = [
    {
      name: "About",
      endpoint: "/index/",
    },
    {
      name: "Press",
      endpoint: "/index/",
    },
    {
      name: "FAQ",
      endpoint: "/index/",
    },
    {
      name: "Join us",
      endpoint: "/index/",
    },
    {
      name: "Open Source",
      endpoint: "/index/",
    },
    {
      name: "Register to vote",
      endpoint: "/index/",
    },
  ]

  render() {
    return (
      <div className={layoutStyles.container}>
        {this.props.children}
        <div className={layoutStyles.footer}>
          <div className={layoutStyles.footerLeft}>
            <div className={layoutStyles.header}>
              <h2 className={layoutStyles.headerText}>
                Open
                <span className={layoutStyles.headerTextBlue}>
                  Disclosure
                </span>{" "}
                <span className={layoutStyles.headerTextBold}>San José</span>
              </h2>
              <nav>
                <ul className={layoutStyles.footerNav}>
                  {this.links.map((item, index) => (
                    <li
                      key={`footer nav item ${index}`}
                      className={layoutStyles.footerNavItem}
                    >
                      <Link
                        className={`${layoutStyles.footerNavItemText} ${layoutStyles.link}`}
                        to={item.endpoint}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className={layoutStyles.footerBottomContent}>
              <h5 className={layoutStyles.tagline}>
                Brought to you by
                <a
                  className={layoutStyles.link}
                  href="https://www.codeforsanjose.com/"
                >
                  {" "}
                  Code for San José
                </a>
              </h5>
              <h6 className={layoutStyles.footerStipulation}>
                Campaign finance data provided by the City of San José Public
                Ethics Commission Public Portal for Campaign Finance and
                Lobbyist Disclosure. Candidate and ballot measure information
                gathered from information provided to the Santa Clara County
                Registrar of Voters by the City of San José.
              </h6>
            </div>
          </div>
          <div className={layoutStyles.footerRight}>
            <iframe
              title="Enter your address for personalized voting information"
              src="https://votersedge.org/en/ca/address-widget"
              frameBorder="0"
              scrolling="no"
              style={{ width: "240px", height: "200px" }}
            ></iframe>
          </div>
        </div>
      </div>
    )
  }
}
