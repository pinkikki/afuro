import React from 'react'
import styles from './Form.module.scss'

interface ButtonProps {
  value: string,
  color: Color,
  onclick: () => void
}

export enum Color {
  primary = 'is-primary',
  warning = 'is-warning',
  error = 'is-danger'
}

const Button = (prop: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[prop.color]}`} onClick={prop.onclick}>
      {prop.value}
    </button>
  )
};

export default Button
