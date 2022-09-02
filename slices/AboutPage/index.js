import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

const AboutPage = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.title ?
          <PrismicRichText field={slice.primary.title} />
          : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
        <PrismicRichText field={slice.primary.description} />
        : <p>start by editing this slice from inside Slice Machine!</p>
    }
    {
      slice.primary.link ?
        /* import { PrismicLink } from '@prismicio/react' */
        <PrismicLink field={slice.primary.link}>My Link</PrismicLink>
        : <p>Aqui debe de ir un link</p>

    }
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default AboutPage