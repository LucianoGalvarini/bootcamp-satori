import React, { useState } from "react";

export const PostForm = ({ addPost }) => {
    const [formData, setFormData] = useState({
        title: "",
        body: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(formData);
        setFormData({ title: "", body: "" });
    };

    return (
        <div style={styles.container}>
            <h1>Add post</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Body"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-primary">
                    Add Post
                </button>
            </form>
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
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
};
