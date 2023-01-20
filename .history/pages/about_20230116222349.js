import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import data from '../data/about.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

export default function About() {
    return(
            <>
            <div>about page</div>
             
        
                <div className={styles.center}>
                  <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                  />
                  <div className={styles.thirteen}>
                    <Image
                      src="/thirteen.svg"
                      alt="13"
                      width={40}
                      height={31}
                      priority
                    />
                  </div>
                </div>
        
                <div className={styles.grid}>
             
        
                  
        
                  
                  
        
                </div>
              </main>
            </>
          )
        }
        



 
