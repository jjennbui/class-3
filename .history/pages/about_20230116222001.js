import data from '../data/about.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

export default function About() {
    return(
        <div>About Page</div>

        
        <div>Computing Degrees:</div>
        {
          information && information.map((info, index) => {
            if(info.department.toLowerCase () == "computing") {
            return(
              <Card key={index} degree={info.employee} colour="blue" font="20px"/>
            )
            }
          })
        }



    )
}

