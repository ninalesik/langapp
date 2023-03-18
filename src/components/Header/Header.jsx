import React from 'react'
import style from './style.module.scss';

export default function Header() {
  return (
    <div className={style.header}>
        <div>Home</div>
        <div>Play</div>
        <div>Vocabulary</div>
    </div>
  )
}
