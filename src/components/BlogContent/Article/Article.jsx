import "./Article.scss";
import Hero from "../../Hero/Hero";
import articleData from "./ArticleData";
import ArticleItem from "./ArticleItem";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();

  const selectedArticle = articleData.find((item) => item.id === Number(id));

  if (!selectedArticle) {
    return <p>Article not found</p>;
  }

  return (
    <>
      <Hero title="Blog Details" cName="hero__img-blog" />
      <section className="article">
        <ArticleItem {...selectedArticle} />
      </section>
    </>
  );
};

export default Article;
