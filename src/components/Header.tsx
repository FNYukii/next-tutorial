import Link from "next/link"

function Header() {

	return (

		<header className="py-2 px-4">

			<div className="flex justify-between items-center">
				
				<Link href="/" className="text-3xl font-light">My Next App</Link>

				<div className="flex gap-x-8">

					<Link href="/" className="hover:underline">Top</Link>
					<Link href="/about" className="hover:underline">About</Link>
					<Link href="/gallery" className="hover:underline">Gallery</Link>
				</div>
			</div>
		</header>
	)
}

export default Header