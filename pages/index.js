import React from 'react'
import Link from 'next/link'


function Home() {
	return (
		<>
			<Link href="/about">
				<a>About</a>
			</Link>
			<h1>Home</h1>
			<img src="/static/home.jpg" />
		</>
	)
}

export default Home

