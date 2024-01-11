import React from 'react'

export  function BolBImage({url,alt,...others}) {
  return (
    <img src={`data:image/png;base64,${url}`} alt={alt} {...others} />

  )
}
