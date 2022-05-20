import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
  * ✨Magic ✨

You can also add images ->
![img](https://images.vexels.com/media/users/3/177921/isolated/lists/97d38fca50c65e8ab67a9caeb517cabd-penguin-cute-puffy-muzzle-flat.png)
 
  
You can even include custom React components if you declare them in the "overrides" option.
    
  
<MyComponent>Isn't that cool?</MyComponent>`;

  const [fetchData] = useFetchData();

  const [markDownContent, setMarkDownContent] = useState(markdown);
  const [title, setTitle] = useState("New Post");
  const [submissionConfirmed, setSubmissionConfirmed] = useState(false);
  const [published, setPublished] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(Date.now());
  const [errored, setErrored] = useState(0);
  //0 = no errors, 1 = title error, 2 = markdowncontent error

  const { token } = useContext(UserContext);

  const nav = useNavigate();

  const { id } = useParams();
  const url = !id ? `/admin/new` : `/admin/${id}`;
  const location = useLocation();
  //form refresh on location change
  useEffect(() => {
    setTitle("New Post");
    setMarkDownContent(markDownContent);
    setLoading(true);
    setPublished(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  useEffect(() => {
    if (title.length === 0) {
      setErrored(1);
    } else if (markDownContent.length === 0) {
      setErrored(2);
    } else {
      setErrored(0);
    }
  }, [title, markDownContent]);

  useEffect(() => {
    const startFetch = async () => {
      const data = await fetchData(`/blog/post/${id}`, {});
      setMarkDownContent(data.post.content);
      setTitle(data.post.title);
      setPublished(data.post.published);
      setDate(data.post.date);
      setLoading(false);
    };
    if (id && loading) {
      startFetch();
    } else if (!id && loading) {
      setMarkDownContent(markdown);
      setTitle("New Post");
      setLoading(false);
    }
  }, [fetchData, id, loading, markdown]);

  const handleChange = (e) => {
    setMarkDownContent(e.target.value);
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async () => {
    if (errored) {
      //set error to user
      return;
    }
    setSubmitting(true);
    const response = await fetchData(url, {
      method: !id ? "POST" : "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
      body: JSON.stringify({
        title: title,
        content: markDownContent,
        published: published,
        date: date,
      }),
    });
    setSubmitting(false);
    nav(`/post/${response.post_id}`, { replace: true });
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
    published,
    title,
    updateTitle,
    errored,
  ];
};

export default useFormController;
