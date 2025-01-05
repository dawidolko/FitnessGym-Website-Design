import "./NotFound.scss";
import { useEffect } from "react";
import { FaRegFaceFrown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate(-1);
		}, 8000);
	});

	return (
		<section className="notFound">
			<FaRegFaceFrown className="notFound__icon" />
			<p className="notFound__error">404</p>
			<h2 className="notFound__title">Page not found</h2>
			<p className="notFound__text">
				We're sorry, the page you requsted could not be found.
			</p>
		</section>
	);
};

export default NotFound;
