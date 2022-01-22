import React from 'react';
import { useRouter } from 'next/router';

import { PostDetail, Categories, PostWidget,  Comments, CommentsForm, Loader } from '../../components';
import { getPosts, getPostDetails } from '../../services';
import  AdjecentPosts  from '../../sections/AdjecentPost.jsx';
import Head from 'next/head';
const PostDetails = ({ post }) => {
  const router = useRouter();
{
  if (router.isFallback) {
    return <Loader />;
  }
}
  return (
    <>

      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
          {console.log(post)}
            <PostDetail post={post} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
            <AdjecentPosts slug={post.slug} createdAt={post.createdAt} />
              
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget  />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
