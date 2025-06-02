import React from 'react'
import { ContactPart1 } from '../components/ContactPart1'
import { ContactPart2 } from '../components/ContactPart2'
import { ContactForm } from '../components/ContactForm'
import { ContactMap } from '../components/ContactMap'

export const Contact = () => {
  return (
    <div>
      <ContactPart1/>
      <ContactPart2/>
      <ContactForm/>
      <ContactMap/>
    </div>
  )
}
