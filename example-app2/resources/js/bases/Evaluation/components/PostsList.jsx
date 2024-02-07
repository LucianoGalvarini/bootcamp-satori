import React from "react";
import { Post } from "./Post";

export const PostsList = ({ posts, deletePost, editPost }) => {
    const handleDeletePost = (id) => {
        deletePost(id);
    };

    const handleEditPost = (id, updatedData) => {
        editPost(id, updatedData);
    };

    return (
        <div className="container" style={styles.container}>
            <h1 className="title" style={styles.title}>
                Posts
            </h1>
            <ul style={styles.postList}>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                        handleDeletePost={handleDeletePost}
                        handleEditPost={handleEditPost}
                    />
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
    },
    title: {
        color: "#333",
        fontSize: "24px",
        marginBottom: "20px",
    },
    postList: {
        listStyle: "none",
        padding: 0,
    },
};
