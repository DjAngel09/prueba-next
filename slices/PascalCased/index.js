import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const PascalCased = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    {
      slice.primary.hola_mundo ? 
      <img src={slice.primary.hola_mundo.url} alt={slice.primary.hola_mundo.alt} />
      : <p>Aqui debe de ir una imagen</p>
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

export default PascalCased