import React from 'react'
import style from './style.module.scss';

export default Cards;
function Cards({words},count) {
    const {english, transcription, definition, russian, id } = words;

  return (
    <div className={style.animation}>
        <h1>{english}</h1>
        <p>{transcription}</p>
        <p>Definition: {definition};</p>
        <h2>{russian}</h2>

    </div>
  )
}
