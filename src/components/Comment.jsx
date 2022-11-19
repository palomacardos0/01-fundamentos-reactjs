import { ThumbsUp, Trash } from 'phosphor-react'
import React from 'react'
import styles from './comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/palomacardos0.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.AuthorAndTime}>
              <strong>Paloma Cardoso</strong>
              <time title="30 de outubro às 08:13h" dateTime="2022-10-30 00:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span> 20 </span>
          </button>
        </footer>
      </div>
    </div>
  )
}