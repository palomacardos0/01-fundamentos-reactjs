import React from 'react'
import styles from './avatar.module.css'

export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      src={src}
      className={hasBorder ? styles.avatar : styles.avatarWithBorder}
    />
  )
}
