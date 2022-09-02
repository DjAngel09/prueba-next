import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

export default function Home({ page }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About page" />
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

  const page = await client.getSingle('about')

  return {
    props: {
      page,
    },
  }
}
