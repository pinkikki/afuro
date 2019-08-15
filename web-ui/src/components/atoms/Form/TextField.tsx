import React from 'react'
import styles from './Form.module.scss'

interface AuxProps {
  value: string,
  color: Color
}

export enum Color {
  primary = 'is-primary',
  warning = 'is-warning',
  error = 'is-danger'
};

const TextField = (prop: AuxProps) => {
  return (<input className={`${styles.input} ${styles[prop.color]}`} value={prop.value}/>)
};

export default TextField