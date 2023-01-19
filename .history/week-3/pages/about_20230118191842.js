import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/about.module.css'
import data from '../data/employee.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

export default function Home() {

  console.log(data);
  const [information, setInformation ] = useState([...data])
  
        return(
          <>
          <div className={styles.main}>
         <div className={styles.name}>Computing Employees:</div>
          {
            information && information.map((info, index) => {
              if(info.department.toLowerCase () == "computing") {
              return(
                <Card key={index} 
                firstName={info.firstName}
                department={info.department}
                number={info.number} colour="floralwhite" font="15px"/>
              )
              }
            })
          }

          <div className={styles.name}>Business Employees:</div>
          {
            information && information.map((info, index) => {
              if(info.department.toLowerCase () == "business") {
              return(
                <Card key={index} 
                firstName={info.firstName}
                department={info.department}
                number={info.number}
              colour="white" font="15px"/>
              )
              }
            })
          }
          </div>
          </>
        )
      }

 
