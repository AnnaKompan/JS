const postToShare = {
  author: "JJ",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dignissimos veniam nobis amet ab ex quisquam laboriosam delectus doloremque odit maiores, veritatis odio doloribus debitis, eveniet assumenda labore in voluptatibus.",
};

const content = {
  method: "POST",
  body: JSON.stringify(postToShare),
  headers: { "Content-Type": "application/json; charset=UTF-8" },
};

fetch("https://jsonplaceholder.typicode.com/posts", content)
  .then((response) => response.json())
  .then((post) => console.log(post))
  .catch((err) => console.log(err));

//   UPDATE (PATCH)
const postToUpdate = {
  id: 101,
  body: "New Content",
};
const contentUpdate = {
  method: "PATCH",
  body: JSON.stringify(postToUpdate),
  headers: { "Content-Type": "application/json; charset=UTF-8" },
};

fetch(
  `https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`,
  contentUpdate,
)
  .then((response) => response.json())
  .then((post) => console.log(post))
  .catch((err) => console.log(err));

// DELETE

const postToDel = 101;

fetch(`https://jsonplaceholder.typicode.com/posts/${postToDel}`, {
  method: "DELETE",
})
  .then(() => console.log("Post Deleted"))
  .catch((err) => console.log(err));
