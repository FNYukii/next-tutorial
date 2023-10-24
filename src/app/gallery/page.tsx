import Image from "next/image";

import image01 from "../../../public/images/image01.jpg";
import image02 from "../../../public/images/image02.jpg";
import image03 from "../../../public/images/image03.jpg";
import image04 from "../../../public/images/image04.jpg";

export default function Page() {

	return (

		<main className="p-4">

			<h1 className="text-2xl font-bold">Gallery</h1>

			<p className="mt-2">ローカル画像</p>
			<div className="mt-2 grid grid-cols-3 gap-4">

				<Image src={image01} alt="風景" className="aspect-video object-cover" />
				<Image src={image02} alt="風景" className="aspect-video object-cover" />
				<Image src={image03} alt="風景" className="aspect-video object-cover" />
				<Image src={image04} alt="風景" className="aspect-video object-cover" />
			</div>
		</main>
	)
}