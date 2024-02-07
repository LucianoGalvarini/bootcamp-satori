const URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async () => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching posts:", error.message);
        throw error;
    }
};

export const addPost = async (postData) => {
    try {
        const res = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(postData),
        });
        const newPost = await res.json();
        return newPost;
    } catch (error) {
        console.error("Error adding post:", error.message);
        throw error;
    }
};

export const deletePost = async (postId) => {
    try {
        await fetch(`${URL}/${postId}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.error("Error deleting post:", error.message);
        throw error;
    }
};

export const editPost = async (updatedData) => {
    try {
        const res = await fetch(`${URL}/${updatedData.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const updatedPost = await res.json();

        return updatedPost;
    } catch (error) {
        console.error("Error updating post:", error.message);
        throw error;
    }
};
