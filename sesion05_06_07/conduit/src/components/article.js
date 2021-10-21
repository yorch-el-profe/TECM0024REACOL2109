import PropTypes from "prop-types";

export function Article({ image, title, date, author, body }) {
  return (
    <>
      <div className="d-flex p-3 flex-column">
        <div className="d-flex justify-content-start align-items-center">
          <img className="avatar" src={image} />
          <div className="d-flex ms-4 flex-column">
            <p className="m-0">{author}</p>
            <p className="m-0">{date}</p>
          </div>
        </div>
      </div>
      <h4>{title}</h4>
      <p>{body}</p>
      <hr />
    </>
  );
}

Article.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Article;
