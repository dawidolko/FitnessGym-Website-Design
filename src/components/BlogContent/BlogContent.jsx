import "./BlogContent.scss";
import blogData from "./BlogData";
import BlogItem from "./BlogItem";

const BlogContent = () => {
  return (
    <section className="blog">
      <h2 className="blog__heading">
        Explore the Latest Fitness Insights & News
      </h2>
      <div className="blog__body container">
        {blogData.map((item) => (
          <BlogItem {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default BlogContent;
