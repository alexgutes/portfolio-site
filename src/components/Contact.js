import React from 'react'
import { GoMarkGithub, GoMail, GoFile } from 'react-icons/go'
import { TiSocialLinkedin } from 'react-icons/ti'
import './styles/Contact.css'

export default function Contact() {
  return (
    <div>
      <ul className="flex-list-contact">
        <li>
          <a href="mailto:alexgutes@gmail.com">
            <GoMail id="gomail" size="4em" />
          </a>
        </li>
        <li>
          <a href="https://docs.google.com/document/d/1qV5bPnyC8nCZ7U2OPxoV_JwtW_KU35zzDcsMmRsvDj8/edit?usp=sharing">
            <GoFile id="gofile" size="4em" />
          </a>
        </li>
        <li>
          <a href="https://github.com/alexgutes">
            <GoMarkGithub id="gogithub" size="4em" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alexgutes/">
            <TiSocialLinkedin id="linkedin" size="4em" />
          </a>
        </li>
      </ul>
    </div>
  )
}
