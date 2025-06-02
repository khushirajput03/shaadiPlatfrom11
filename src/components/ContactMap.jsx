import React from 'react'

export const ContactMap = () => {
  return (
     <div style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      <iframe className='mt-16'
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3502.154897826296!2d77.13187277528877!3d28.625119325668862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMain%20Branch%20-%20208%2C%20Plot%20No.%20CB-202A%2C%20Guru%20Harkrishan%20Plaza%2C%20Ring%20Road%2C%20Naraina%2C%20New%20Delhi%20-%20110028!5e0!3m2!1sen!2sin!4v1748325548216!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map Location"
      ></iframe>
    </div>
  )
}

