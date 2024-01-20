import React, { useState, useEffect } from 'react';
import CardPost from './CardPost';

const PostsFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts from the backend and update the state
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/posts/getPosts');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                console.log(data)
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', margin: '20px' }}>
            {console.log(posts)}
            {posts.map((post) => (
                <div key={post.id}>
                    <CardPost content={post.content} name={post.author.name} />
                </div>
            ))}
        </div>
    );
};

export default PostsFeed;