import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faDev, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`}}>
    <Link style={{ backgroundImage: `none` }} to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Caitlin's Corner</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
      <footer>
          <hr/>
        Connect with me.
        <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="https://www.instagram.com/caitlinmtibbetts/"><FontAwesomeIcon icon={faInstagram} /></ListLink>
            <ListLink to="https://www.linkedin.com/in/caitlin-tibbetts/"><FontAwesomeIcon icon={faLinkedin} /></ListLink>
            <ListLink to="https://dev.to/caitlintibbetts"><FontAwesomeIcon icon={faDev} /></ListLink>
            <ListLink to="https://twitter.com/cait_tibbetts"><FontAwesomeIcon icon={faTwitter} /></ListLink>
            <ListLink to="mailto:caitlin.tibbetts@utdallas.edu"><FontAwesomeIcon icon={faEnvelope} /></ListLink>
        </ul>
      </footer>
    </div>
  )
}