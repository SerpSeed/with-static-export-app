import Head from 'next/head'
import Post from '../components/post'
import styles from '../styles/home.module.css'

export async function getStaticProps() {
  // fetch list of posts
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_page=1'
  )
  const postList = await response.json()
  return {
    props: {
      postList,
    },
  }
}

export default function IndexPage({ postList }) {
  return (
    <main className={styles.home}>
      <Head>
        <title>Home page</title>
      </Head>

      <h1>List of posts</h1>

      <section>
        {postList.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </section>
    </main>
  )
}
