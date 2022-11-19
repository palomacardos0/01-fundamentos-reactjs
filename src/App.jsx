import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <Post
          author="Paloma"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod doloremque hic natus quibusdam quam itaque possimus totam? Alias, minima. Consequuntur, delectus esse! Assumenda unde ducimus veritatis earum aut aliquam quibusdam."
        />
      </div>
    </>
  )
}

export default App
