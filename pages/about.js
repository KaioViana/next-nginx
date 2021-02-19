import React from 'react'
import Link from 'next/link'


function About() {
	return (
		<>
			<Link href="/">
				<a>Home</>
			</Link>
			<h1>About</h1>
			<img src="/static/about.jpg" />
		</>
	)
}

export default About
