import "./Testimonials.scss";
import TestimonialsItem from "./TestimonialsItem";
import testimonialsData from "./TestimonialsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
	const sliderSettings = {
		infinite: true,
		speed: 2000,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,

		responsive: [
			{
				breakpoint: 1124,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section className="testimonials">
			<div className="testimonials__wrapper">
				<h2 className="testimonials__title">What Our Client Say's About Us</h2>
				<Slider {...sliderSettings}>
					{testimonialsData.map((item) => (
						<TestimonialsItem {...item} key={item.id} />
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Testimonials;
