import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchData from "../utils/fetchData";

const useFormController = () => {
  const markdown = `# This is Markdown

    #### You can edit me!
    
    [Markdown](http://daringfireball.net/projects/markdown/) lets you write content in a really natural way.
    
      * You can have lists, like this one
      * Make things **bold** or *italic*
      * Embed snippets of "code"
      * Create [links](/)
      * ...
    
    <small>Sample content borrowed with thanks from [elm-markdown](http://elm-lang.org/examples/markdown) ❤️</small>
    
    You can even include custom React components if you declare them in the "overrides" option.
    
    <MyComponent>Isn't that cool?</MyComponent>`;

  const [markDownContent, setMarkDownContent] = useState(markdown);
  const [submissionConfirmed, setSubmissionConfirmed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const url = `http://localhost:3000/admin/new`;
  const nav = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const startFetch = async () => {
      try {
        const data = await fetchData(`http://localhost:3000/blog/${id}`);
        setMarkDownContent(data.post.content);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    };
    if (id && loading) {
      startFetch();
    } else {
      setLoading(false);
      //loading false
    }
  }, [id, loading]);

  const handleChange = (e) => {
    setMarkDownContent(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({ title: "test", content: markDownContent }),
      });
      const res = await response.json();
      setSubmitting(false);
      if (response.ok) {
        nav(`/post/${res.post_id}`, { replace: true });
      } else {
        console.log(res.errors);
        //show errors on screen
      }
    } catch (e) {
      console.error(e);
      //nav to oops
    }
  };

  const confirmationCheck = () => {
    setSubmissionConfirmed((prev) => {
      return !prev;
    });
  };

  return [
    markDownContent,
    submissionConfirmed,
    submitting,
    handleChange,
    handleSubmit,
    confirmationCheck,
  ];
};

export default useFormController;
