import Image from "next/image"

import image01 from "../../../public/images/image01.jpg"
import image02 from "../../../public/images/image02.jpg"
import image03 from "../../../public/images/image03.jpg"
import image04 from "../../../public/images/image04.jpg"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Gallery - My Next App",
}

export default function Page() {

	return (

		<div className="pb-16">

			<h1 className="text-2xl font-bold">Gallery</h1>

			<p className="mt-2">ローカル画像</p>
			<div className="mt-2 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">

				<Image src={image01} alt="風景" className="aspect-video object-cover bg-gray-300" />
				<Image src={image02} alt="風景" className="aspect-video object-cover bg-gray-300" />
				<Image src={image03} alt="風景" className="aspect-video object-cover bg-gray-300" />
				<Image src={image04} alt="風景" className="aspect-video object-cover bg-gray-300" />
			</div>

			<p className="mt-6">リモート画像</p>
			<div className="mt-2 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

				<div className="relative aspect-video bg-gray-300">
					<Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="風景" fill className="object-cover" />
				</div>

				<div className="relative aspect-video bg-gray-300">
					<Image src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6" alt="風景" fill className="object-cover" />
				</div>

				<div className="relative aspect-video bg-gray-300">
					<Image src="https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb" alt="風景" fill className="object-cover" />
				</div>

				<div className="relative aspect-video bg-gray-300">
					<Image src="https://images.unsplash.com/photo-1429704658776-3d38c9990511" alt="風景" fill className="object-cover" />
				</div>
			</div>
		</div>
	)
}