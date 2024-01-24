import {useState} from "react";

export const Post = ({post, handleDeletePost, handleEditPost}) => {
    const [isEdit, setIsEdit] = useState(false)
    const [dataPost, setDataPost] = useState(post)
    const handleEdit = () => {
        setIsEdit(!isEdit)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDataPost((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div style={styles.postContainer}>
            <div>
                {
                    isEdit ?
                        <div style={styles.editData}>
                            <input
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={dataPost.title}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                placeholder="Body"
                                name="body"
                                value={dataPost.body}
                                onChange={handleChange}
                            />
                            <button onClick={() => handleEditPost(dataPost)}>Save changes</button>
                        </div>
                        :
                        <>
                            <p style={styles.postTitle}>{dataPost.title}</p>
                            <p style={styles.postBody}>{dataPost.body}</p>
                        </>
                }

            </div>
            <div style={styles.postButtons}>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={() => handleDeletePost(dataPost.id)}>Delete</button>
            </div>
        </div>
    )
}

const styles = {
    postContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        border: '1px solid #ddd',
        padding: '10px',
        gap: '100px',
        borderRadius: '5px',
        backgroundColor: '#f4f4f4',
        color: '#333',
    },
    postTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '5px',
        textTransform: 'capitalize'
    },
    postBody: {
        fontSize: '14px',
        textTransform: 'capitalize'
    },
    postButtons: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },

    editData: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    }


}
