import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams(); // Get the blog post ID from the URL
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadWordPressStyles = () => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://s1.wp.com/wp-content/themes/pub/bitacora/style.css'; // Main Bitacora CSS
            document.head.appendChild(link);

            // Load fonts
            const fontLink = document.createElement('link');
            fontLink.rel = 'stylesheet';
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
            document.head.appendChild(fontLink);
        };

        loadWordPressStyles();

        const fetchPost = async () => {
            try {
                const response = await fetch(`https://public-api.wordpress.com/wp/v2/sites/ardhi23.wordpress.com/posts/${id}`);
                const data = await response.json();

                // Sanitize the content to remove &nbsp;
                const sanitizedContent = data.content.rendered.replace(/&nbsp;/g, " ");

                 setPost({
                    title: data.title.rendered.replace(/&nbsp;/g, " "), // Sanitize the title as well
                    content: sanitizedContent, // Keep full HTML content from WordPress
                });

                setLoading(false);
            } catch (error) {
                console.error('Error fetching the blog post:', error);
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return <p>Loading post...</p>;
    }

    if (!post) {
        return <p>Post not found.</p>;
    }

    return (
        <div className="blog-detail p-4">
            <h1 className="text-2xl font-bold mb-4 text-center uppercase">{post.title}</h1>
            {/* Render the full blog post content with any divs or sections */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
};

export default BlogDetails;




