import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownStyles from '../../components/markdown-styles.module.css'
const katexConv = require("showdown-katex")
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
const showdownHighlight = require("showdown-highlight")

export default function Post({ post, morePosts, preview, slugs, posts }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  console.log(post.emoji)
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
            <>
              <article className="mb-32">
                <Head>
                  <title>
                    MLNMA.
                  </title>
                  <meta property="og:image" content={post.ogImage.url} />
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  excerpt={post.excerpt}
                  emoji={post.emoji}
                />
                <div className="max-w-3xl mx-auto">
                  <div
                    className={markdownStyles['markdown']}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  <div className="bg-black text-white dark-mode:bg-white dark-mode:text-black px-12 py-28 flex flex-col lg:flex-row items-center">
                    <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                      That's the end!
                    </h3>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                      {
                        slugs.indexOf(post.slug) !== 0 && (
                          <a
                            href={`/posts/${slugs[slugs.indexOf(post.slug) - 1]}`}
                            className="mx-3 font-bold hover:underline text-black "
                          >
                            <FiArrowLeft />{posts[slugs.indexOf(post.slug) - 1].title}
                          </a>
                        )
                      }

                      {
                        slugs.indexOf(post.slug) !== slugs.length-1 && (
                          <a
                            href={`/posts/${slugs[slugs.indexOf(post.slug) + 1]}`}
                            className=" mx-3 border border-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                          >
                            <FiArrowRight />
                            Next: {posts[slugs.indexOf(post.slug) + 1].title}
                          </a>
                        )
                      }

                    </div>
                  </div>
                </div>
              </article>
            </>
          )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { getPostBySlug, getAllPosts } = require('../api/api')

  let post = await getPostBySlug(params.slug, ["title","date","slug","author","content","ogImage","coverImage", "excerpt", "emoji"])

  console.log(post)

  let slugs = await getAllPosts(['slug']).map(e => e.slug)
  let posts = await getAllPosts(["title","date","slug","author","content","ogImage","coverImage", "excerpt", "emoji"])

  console.log(slugs)

  const classMap = {
    a: "hover:bg-white hover:text-black dark-mode:hover:bg-black dark-mode:hover:text-white bg-black text-white dark-mode:bg-white dark-mode:text-black rounded px-1"
  }
  
  const bindings = Object.keys(classMap)
    .map(key => ({
      type: 'output',
      regex: new RegExp(`<${key}(.*)>`, 'g'),
      replace: `<${key} class="${classMap[key]}" $1>`
    }));

  var showdown = require('showdown'),
    converter = new showdown.Converter({
      extensions: [
        katexConv({
          displayMode: true,
          throwOnError: false, // allows katex to fail silently
          errorColor: '#ff0000',
          delimiters: [
            { left: "$$", right: "$$", display: false },
            { left: '~', right: '~', display: false, asciimath: true },
          ],
        }),
        showdownHighlight,
        ...bindings
      ]
    })

    
    const content = await converter.makeHtml(post.content);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      slugs,
      posts
    },
  }
}

export async function getStaticPaths(context) {
  const { getAllPosts } = require('../api/api')

  const posts = await getAllPosts(["slug"])

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
