import React from 'react'
import Helmen from 'react-helmet'
export function MetaData({title}) {
  return (
   <Helmen>
   <title>{title}</title>
   </Helmen>
  )
}

export default MetaData