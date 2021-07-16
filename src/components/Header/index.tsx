import React from 'react'
import styles from './styles.module.scss'

export default function Header(){
  return (
    <div className={styles.container}>
      <h2>GalerArt</h2>
      <div className={styles.buttons}>
        <button>
          CADASTRAR
        </button>
        <button>
          ENTRAR
        </button>
      </div>
    </div>
  )
}