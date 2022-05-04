import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import useFetchData from "./useFetchData";

const useFormController = () => {
  const markdown = `
# This is Markdown
#### You can edit me!    
[Markdown](http://daringfireball.net/projects/markdown/) lets you write content in a really natural way. 

  * You can have lists, like this one
  * Make things **bold** or *italic*
  * Embed snippets of \`code\`
  * Create [links](/)
  * ....
 

<small>Sample content borrowed with thanks from [elm-markdown](http://elm-lang.org/examples/markdown) ❤️</small>
    
You can even include custom React components if you declare them in the "overrides" option.
    
<MyComponent>Isn't that cool?</MyComponent>`;

  const [fetchData, fetchInProgress] = useFetchData();

  const [markDownContent, setMarkDownContent] = useState(markdown);
  const [submissionConfirmed, setSubmissionConfirmed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(UserContext);

  const nav = useNavigate();

  const { id } = useParams();
  const url = !id ? `/admin/new` : `/admin/${id}`;
  console.log(id);

  useEffect(() => {
    console.log("im here");
    const startFetch = async () => {
      try {
        const data = await fetchData(`/blog/post/${id}`, {});
        console.log(data);
        setMarkDownContent(data.post.content);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
      }
    };
    if (id && loading) {
      startFetch();
    } else if (!id) {
      setMarkDownContent(markdown);
      setLoading(false);
    }
  }, [fetchData, id, loading, markdown]);

  const handleChange = (e) => {
    setMarkDownContent(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const response = await fetchData(url, {
        method: !id ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        body: JSON.stringify({ title: "test", content: markDownContent }),
      });
      setSubmitting(false);
      nav(`/post/${response.post_id}`, { replace: true });
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
    loading,
  ];
};

export default useFormController;
