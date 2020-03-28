const template = document.getElementById("template");
const postsList = document.querySelector(".blogPost__container");

fetch("/getposts")
  .then(response => {
    if (!response.ok) throw new Error("Bad boy response from Server");
    return response;
  })
  .then(response => response.json())
  .then(data => {
    // postsList.innerHTML = "";
    console.log("data", data);
    console.log("Object.keys(data)", Object.keys(data));
    // Remove existing posts

    while (postsList.firstChild) {
      postsList.removeChild(postsList.firstChild);
    }

    Object.keys(data).forEach(key => {
      const post = data[key];
      console.log("post", post);

      const newBlog = template.content.cloneNode(true);
      let title = newBlog.querySelector(".blogPost__container__title");
      let author = newBlog.querySelector(".blogPost__container__author");
      let body = newBlog.querySelector(".blogPost__container__content");
      let deleteButton = newBlog.querySelector(
        ".form__container__button-delete"
      );
      title.textContent = post.blogPostTitle;
      author.textContent = post.user;
      body.textContent = post.blogpost;

    //   deleteButton.addEventListener("click", () => {
    //     fetch("/", { method: "DELETE", body: key }).then(location.reload());
    //   });
      postsList.appendChild(newBlog);
    });
  })
  .catch(err => console.error(err));
