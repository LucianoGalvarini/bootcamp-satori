import {useState} from 'react'

export const PostForm = ({posts, setPosts}) => {
    const [data, setData] = useState({
        title: '',
        body: ''
    })
    const handleAddPost = (e) => {
        e.preventDefault()

        const newPost = {
            id: posts[posts.length - 1].id + 1,
            title: data.title,
            body: data.body
        }

        setPosts([newPost, ...posts])
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div style={styles.container}>
            <h1>Add post</h1>
            <form onSubmit={handleAddPost} style={styles.form}>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Body"
                    name="body"
                    value={data.body}
                    onChange={handleChange}
                />
                <button type="submit" className='btn btn-primary'>Add Post</button>
            </form>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    }
}
