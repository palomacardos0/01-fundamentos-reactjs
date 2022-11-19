import { Comment } from './Comment'
import styles from './post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/palomacardos0.png"
          />
          <div className={styles.authorInfo}>
            <strong>Paloma Cardoso</strong>
            <span>Front-End Developer</span>
          </div>
        </div>
        <time title="30 de outubro às 08:13h" dateTime="2022-10-30 00:00">
          Publicado à 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          {' '}
          <a href="#">👉 jane.design/doctorcare </a>
        </p>
        <p>
          {' '}
          <a href="#"> #novoprojeto #nlw #rocketseat</a>{' '}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentario" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
