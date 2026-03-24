import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useRef, useState , useReducer} from "react";

//Blogging App using Hooks
export default function Blog() {
  function blogsDispatcher(state, action) {
    switch (action.type) {
      case "ADD":
        return [action.blog, ...state];

      case "DELETE":
        return state.filter((_, i) => i !== action.index);

      default:
        return [];
    }
  }
  const title = useRef();
  const content = useRef();

  // const [blogs, setBlogs] = useState([]);
  const [blogs, dispatch] = useReducer(blogsDispatcher, []);

  useEffect(() => title.current.focus(), [[]]);

  useEffect(() => {
    if (blogs.length > 0 && blogs[0].title.length > 0) {
      document.title = blogs[0].title;
    } else {
      document.title = "No blogs";
    }
  }, [blogs]);

  //Passing the synthetic event as argument to stop refreshing the page on submit
  function handleSubmit(e) {
    e.preventDefault();
    // setBlogs([
    //   { title: title.current.value, content: content.current.value },
    //   ...blogs,
    // ]);
    dispatch({
      type: "ADD",
      blog: { title: title.current.value, content: content.current.value },
    });

    title.current.value = "";
    content.current.value = "";
    title.current.focus();
  }

  const handleDelete = (index) => {
    // setBlogs(blogs.filter((_, i) => i !== index));
    dispatch({ type: "DELETE", index: index });
  };

  return (
    <>
      {/* Heading of the page */}
      <h1>Write a Blog!</h1>

      {/* Division created to provide styling of section to the form */}
      <div className="section">
        {/* Form for to write the blog */}
        <form onSubmit={handleSubmit}>
          {/* Row component to create a row for first input field */}
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              ref={title}
            />
          </Row>

          {/* Row component to create a row for Text area field */}
          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              ref={content}
              required
            />
          </Row>

          {/* Button to submit the blog */}
          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      {/* Section where submitted blogs will be displayed */}
      <h2> Blogs </h2>
      {blogs.map((item, index) => (
        <div className="blog" key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <div className="blog-btn">
            <button className="btn remove" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

//Row component to introduce a new row section in the form
function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
