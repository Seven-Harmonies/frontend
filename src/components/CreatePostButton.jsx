import React, { useState } from 'react';

const CreatePostButton = ({ onPostCreated }) => {
    const [postContent, setPostContent] = useState('');

    const handlePostCreation = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: postContent }),
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            // Assuming the response contains the created post details
            const createdPost = await response.json();

            // Clear the textarea
            setPostContent('');

            // Notify the parent component about the created post
            if (onPostCreated) {
                onPostCreated(createdPost);
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div>
            <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Type your post here..."
            />
            <button onClick={handlePostCreation}>Create Post</button>
        </div>
    );
};

export default CreatePostButton;