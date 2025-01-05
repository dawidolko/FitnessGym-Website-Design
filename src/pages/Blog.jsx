import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import Hero from "../components/Hero/Hero";
import BlogContent from "../components/BlogContent/BlogContent";

const Blog = () => {
	return (
		<AnimatedPage>
			<Hero title="BLOG" cName="hero__img" />
			<BlogContent />
		</AnimatedPage>
	);
};

export default Blog;
