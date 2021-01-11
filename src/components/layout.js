import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faDev,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../styles/style.scss";

const InternalListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={{ backgroundImage: `none` }} to={props.to}>
      {props.children}
    </Link>
  </li>
);

const ExternalListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <a style={{ backgroundImage: `none` }} href={props.to}>
      {props.children}
    </a>
  </li>
);

export default function Layout({ children }) {
  return (
    <StaticQuery 
      query={graphql`{
        site {
          siteMetadata {
            title
          }
      }
    }`}
      render={data => (
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <InternalListLink to="/">Home</InternalListLink>
          <InternalListLink to="/about/">About</InternalListLink>
          <InternalListLink to="/contact/">Contact</InternalListLink>
        </ul>
      </header>
      {children}
      <footer>
        <hr />
        <ul style={{ listStyle: `none`, textAlign: `center` }}>
          <ExternalListLink to="https://www.instagram.com/caitlinmtibbetts/">
            <FontAwesomeIcon icon={faInstagram} />
          </ExternalListLink>
          <ExternalListLink to="https://www.linkedin.com/in/caitlin-tibbetts/">
            <FontAwesomeIcon icon={faLinkedin} />
          </ExternalListLink>
          <ExternalListLink to="https://dev.to/caitlintibbetts">
            <FontAwesomeIcon icon={faDev} />
          </ExternalListLink>
          <ExternalListLink to="https://twitter.com/cait_tibbetts">
            <FontAwesomeIcon icon={faTwitter} />
          </ExternalListLink>
          <ExternalListLink to="mailto:caitlin.tibbetts@utdallas.edu">
            <FontAwesomeIcon icon={faEnvelope} />
          </ExternalListLink>
        </ul>
      </footer>
    </div>
      )}/>
  );
}
