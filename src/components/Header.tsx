function Header() {

	return (

		<header className="py-2 px-4">

			<div className="flex justify-between items-center">
				
				<h1 className="text-3xl font-light">My Next App</h1>

				<div className="flex gap-x-8">

					<p>Top</p>
					<p>About</p>
					<p>Gallery</p>
				</div>
			</div>
		</header>
	)
}

export default Header