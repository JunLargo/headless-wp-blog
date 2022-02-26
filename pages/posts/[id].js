import Link from 'next/link'


export const getStaticPaths = async () => {
    const res = await fetch('https://p1.jlargo.dev/wp-json/wp/v2/posts/');
    const data = await res.json();

    const paths = data.map(post => {
        return {
            params: {id: post.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://p1.jlargo.dev/wp-json/wp/v2/posts/' + id);
    const data = await res.json();

    return {
        props: {post: data}
    }
}


const Post = ({post}) => {
    return (
       <div className='container'>
           <h2>{post.title.rendered}</h2>
           <article dangerouslySetInnerHTML={{__html: post.content.rendered}}></article>
           <Link href="/"><a>Back to the homepage</a></Link>
       </div>
    );
}
 
export default Post;