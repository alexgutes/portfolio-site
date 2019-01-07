import React from 'react'
import { GoMarkGithub, GoMail, GoFile } from 'react-icons/go'
import { TiSocialLinkedin } from 'react-icons/ti'
import './styles/Contact.css'

export default function Contact() {
  return (
    <div>
      <ul className="flex-list-contact">
        <li>
          <GoMail id="gomail" size="4em" />
        </li>
        <li>
          <GoFile id="gofile" size="4em" />
        </li>
        <li>
          <GoMarkGithub id="gogithub" size="4em" />
        </li>
        <li>
          <TiSocialLinkedin id="linkedin" size="4em" />
        </li>
      </ul>
    </div>
  )
}
