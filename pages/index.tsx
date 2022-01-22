import { PostCard,  PostWidget } from '../components';
import { getPosts } from '../services';
import FeaturedPosts from '../sections/FeaturedPosts';
import Head from 'next/head';
export default function Home({ posts }:{posts:any}) {
  return (
    
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>
          GOD'S BEST IDEA
        </title>
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon image_src" href="apple-touch-icon.png"></link>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      
{     <FeaturedPosts /> }
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post :any, index:any) => (
            <PostCard key={index} post={post.node} />
        ))} 
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            
            
          </div>
        </div>
      </div>
    </div>
    );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
