import "./ListServices.css";
import Service from "./Service";
const ListServices = () => {
	const services = [
		{
			img: "service1.png",
			title: "Design",
		},
		{
			img: "service2.png",
			title: "Development",
		},
		{
			img: "service3.png",
			title: "Online Marketing",
		},
		{
			img: "service4.png",
			title: "Business",
		},
		{
			img: "service5.png",
			title: "Technology",
		},
		{
			img: "service6.png",
			title: "Content Strategy",
		},
	];
	return (
		<>
			<section className="section section-content-center">
				<p className="suptitle">our services</p>
				<h2 className="subtitle">We offer a wide variety of IT services</h2>
				<p className="article-content text-center">
					There are many variations of passages of Lorem Ipsum available but the
					majority have suffered alteration
				</p>
			</section>
			<div className="grid-3cols">
				{services.map((value) => (
					<Service
						imgService={value.img}
						titleService={value.title}
						key={crypto.randomUUID()}
					/>
				))}
			</div>
		</>
	);
};

export default ListServices;
