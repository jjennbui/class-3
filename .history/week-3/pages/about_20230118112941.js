import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import data from '../data/about.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

export default function Home() {

  console.log(data);
  const [information, setInformation ] = useState([...data])
  { }
        



 
