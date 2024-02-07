import React, { useState, useEffect } from "react";
import { PostsList } from "./components/PostsList";
import { PostForm } from "./components/PostForm";
import { fetchPosts, addPost, deletePost, editPost } from "./fetch";

export const Evaluation = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPostsData();
    }, []);

    const fetchPostsData = async () => {
        try {
            const data = await fetchPosts();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error.message);
        }
    };

    const handleAddPost = async (postData) => {
        try {
            const newPost = await addPost(postData);
            setPosts([newPost, ...posts]);
        } catch (error) {
            console.error("Error adding post:", error.message);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            await deletePost(postId);
            const newPosts = posts.filter((post) => post.id !== postId);
            setPosts(newPosts);
        } catch (error) {
            console.error("Error deleting post:", error.message);
        }
    };

    const handleEditPost = async (updatedData) => {
        try {
            const updatedPost = await editPost(updatedData);
            const updatedPosts = posts.map((post) =>
                post.id === updatedData.id ? updatedPost : post
            );
            setPosts(updatedPosts);
        } catch (error) {
            console.error("Error updating post:", error.message);
        }
    };

    return (
        <div className="container" style={styles.container}>
            <PostForm addPost={handleAddPost} />
            <PostsList
                posts={posts}
                deletePost={handleDeletePost}
                editPost={handleEditPost}
            />
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "space-around",
        gap: "20px",
        width: "80%",
        margin: "0 auto",
    },
};
