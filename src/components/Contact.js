import React from 'react'
import { GoMarkGithub, GoMail, GoFile } from 'react-icons/go'
import { TiSocialLinkedin } from 'react-icons/ti'
import './styles/Contact.css'

export default function Contact() {
  return (
    <div className="flex-list-contact">
      <div className="icon-label-container">
        <a className="link-icon-container" href="mailto:alexgutes@gmail.com">
          <GoMail id="gomail" className="icon" size="4em" />
        </a>
        <label>Email</label>
      </div>
      <div className="icon-label-container">
        <a
          className="link-icon-container"
          href="https://docs.google.com/document/d/1qV5bPnyC8nCZ7U2OPxoV_JwtW_KU35zzDcsMmRsvDj8/edit?usp=sharing"
        >
          <GoFile id="gofile" className="icon" size="4em" />
        </a>
        <label>Resume</label>
      </div>
      <div className="icon-label-container">
        <a className="link-icon-container" href="https://github.com/alexgutes">
          <GoMarkGithub id="gogithub" className="icon" size="4em" />
        </a>
        <label>Github</label>
      </div>
      <div className="icon-label-container">
        <a
          className="link-icon-container"
          href="https://www.linkedin.com/in/alexgutes/"
        >
          <TiSocialLinkedin id="linkedin" className="icon" size="4em" />
        </a>
        <label>Linkedin</label>
      </div>
    </div>
  )
}
