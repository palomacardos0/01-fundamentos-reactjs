import { ThumbsUp, Trash } from 'phosphor-react'
import React from 'react'
import { Avatar } from './Avatar'
import styles from './comment.module.css'

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content)
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/palomacardos0.png"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Paloma Cardoso</strong>
              <time title="30 de outubro às 08:13h" dateTime="2022-10-30 00:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
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
