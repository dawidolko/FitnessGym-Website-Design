import CartContent from "../components/CartContent/CartContent";
import Hero from "../components/Hero/Hero";

const Cart = () => {
	return (
		<>
			<Hero title="Your Cart" cName="hero__img" />
			<CartContent />
		</>
	);
};

export default Cart;
