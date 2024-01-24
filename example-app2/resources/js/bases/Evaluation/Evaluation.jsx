import {useState, useEffect} from 'react'
import {PostsList} from "./components/PostsList";
import {PostForm} from "./components/PostForm";


export const Evaluation = () => {
    const [posts, setPosts] = useState([])

    const handlePost = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await res.json();
            const posts = json.map(({id, title, body}) => ({id, title, body}));
            setPosts(posts);
        } catch (error) {
            console.error('Error', error.message);
        }
    };

    useEffect(() => {
        handlePost()
    }, []);

    return (
        <div className='container' style={styles.container}>
            <PostForm posts={posts} setPosts={setPosts}/>
            <PostsList posts={posts} setPosts={setPosts}/>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        gap: '20px',
        width: '80%',
        margin: '0 auto'
    },
}
