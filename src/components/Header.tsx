import Link from "next/link"

function Header() {

	return (

		<header className="mx-auto lg:w-[1024px] px-4 lg:px-0  py-2 flex justify-between items-center">

			<Link href="/" className="text-3xl font-light">My Next App</Link>

			<div className="flex gap-x-8">

				<Link href="/" className="hover:underline">Top</Link>
				<Link href="/about" className="hover:underline">About</Link>
				<Link href="/gallery" className="hover:underline">Gallery</Link>
			</div>
		</header>
	)
}

export default Header