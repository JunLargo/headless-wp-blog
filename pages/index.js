import Link from 'next/link'


export const getStaticProps = async () => {
    const res = await fetch('https://p1.jlargo.dev/wp-json/wp/v2/posts/');
    const data = await res.json();

    return {
        props: {posts: data}
    }
    
}




const Home = ({posts}) => {
    return (
        <div className="container">
            <h1 className="home-title">Welcome to my Blog</h1>
            {posts.map(post => (
                <Link href={'/posts/' + post.id} key={post.id}>
                    <a>
                        <div className ="post-data">
                            <h3 >{post.title.rendered}</h3>
                            {/* <article dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></article> */}
                        </div>    
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default Home;