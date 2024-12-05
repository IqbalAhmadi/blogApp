import { client } from '@/sanity/lib/client'
import Header from '../components/Header'
import PostComponent from '../components/PostComponent'
import { Post } from '../utils/interface'

async function getPosts() {
  const query = `*[_type == "post"] {
  title,
  slug,
  publishedAt,
  excerpt,
  tags[]-> {
    _id,
    slug,
    name
  }
}`
  const data = await client.fetch(query)
  return data
}

// revalidation for automatically caching in 60 sec
export const revalidate = 60

export default async function Home() {
  const posts: Post[] = await getPosts();
  //* console.log(posts, 'posts');

  return (
    <>
      <Header title="Articles" tags />
      <div>
        {posts?.length > 0 &&
          posts.map((post, index) => (
            <PostComponent
              key={post?._id || index} // Fallback to `index` if `_id` is unavailable
              post={post}
            />
          ))}
      </div>
    </>
  );
}

// export default async function Home() {
//   const posts: Post[] = await getPosts()
//   console.log(posts, 'posts')
//   return (
//     <>
//       <Header title="Articles" />
//       <div>
//         {posts?.length > 0 &&
//           posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
//       </div>
//     </>
//   )
// }
