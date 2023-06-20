import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';


/* criando array de posts */
const posts = [
  /* post 1 */
  {
    id: 1,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/C4D03AQG9lfYXel__vw/profile-displayphoto-shrink_800_800/0/1662042710813?e=1687392000&v=beta&t=JvaA-4gzmDJ6LWnHt3PsdtO0g2lxaJntgWgjZSPKZN4",
      name: "Camily Cruz",
      role: "Dev front-end"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋", },
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      {type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-04-25 20:00:00"),
  },

  /* post 2 */
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋", },
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      {type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-04-23 20:30:00"),
  },
]

                                   
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          {posts.map(posts => {
            return (
              <Post 
                key={posts.id} /* utilizando a key para corrigir um erro */
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )            
          })}

        </main>
      </div>  
    </div>
  )
}

