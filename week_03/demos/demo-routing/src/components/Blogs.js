import React, { useEffect, useState } from 'react';
import { ROUTES } from '../routes/routes';
import { Link } from 'react-router-dom';

export default function Blogs() {
    const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("https://dummyjson.com/posts")
			.then((res) => res.json())
			.then((data) => {
				setPosts(data.posts);
			});
	}, []);
	return (
		<div>
			{posts && posts.map((post) => (
				<Link to={`${ROUTES.BLOGS.path}/${post.id}`} key={`post-${post.id}`}>
					<p>{post.title}</p>
				</Link>
			))}
		</div>
	);
}
