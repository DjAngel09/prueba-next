import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

export default function Home({ page }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
      <SliceZone slices={page.data.slices} components={components} />

      </main>
    </div>
  )
}

export async function getStaticProps ({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('pagina_prueba')

  return {
    props: {
      page,
    },
  }
}