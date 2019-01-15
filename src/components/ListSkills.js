import React from 'react'

export default function ListSkills(skills) {
  return skills.map(skill => <li>{skill}</li>)
}
