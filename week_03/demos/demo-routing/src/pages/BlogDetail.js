import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetail() {
    const { id } = useParams();
	const [post, setPost] = useState([]);

	useEffect(() => {
		fetch(`https://dummyjson.com/posts/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setPost(data);
			});
	}, []);
	return (
		<div>
			{post && (
				<>
					<h2>{post.title}</h2>
					<div>{post.tags?.join(" - ")}</div>
					<p>{post.body}</p>
				</>
			)}
		</div>
	);
}
