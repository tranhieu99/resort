import React from 'react'

export default function Hero({children, hero}) {
    return (
       <head className = {hero}> 
        {children}
       </head>
    )
}
Hero.defaultProps =  {
    hero: 'defaultHero'
}
