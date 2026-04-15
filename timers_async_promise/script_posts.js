const postsBtn = document.getElementById("fetch-posts");
const postsList = document.querySelector(".posts-list");

async function fetchPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

function renderPosts(posts) {
  // destruction
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
        <h2>${title.slice(0, 5)}</h2>
        <p>ID: ${id}</p>
        <p>${body}</p>
        <p><b>Author: ${userId}</b></p>
      </li>`;
    })
    .join("");
  //   postsList.insertAdjacentHTML("beforeend", markup);
  postsList.innerHTML = markup;
}

postsBtn.addEventListener("click", async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
  } catch (err) {
    console.log(err);
  }
});

// pagination
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let page = 1;

async function fetchPostPagin(page) {
  const limit = 5;
  const start = (page - 1) * limit;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

nextBtn.addEventListener("click", async () => {
  try {
    page++;
    const posts = await fetchPostPagin(page);
    renderPosts(posts);
    if (page !== 1) {
      prevBtn.classList.remove("is-hidden");
    }
  } catch (err) {
    console.log(err);
  }
});

prevBtn.addEventListener("click", async () => {
  page--;
  const posts = await fetchPostPagin(page);
  renderPosts(posts);
});

// Load More
const loadMoreBtn = document.querySelector(".load-btn");
let limit = 5;

async function renderMorePosts(posts) {
  try {
    const markup = posts
      .map(({ id, title, body, userId }) => {
        return `<li>
        <h2>${title.slice(0, 10)}</h2>
        <p>ID: ${id}</p>
        <p>${body}</p>
        <p><b>Author: ${userId}</b></p>
      </li>`;
      })
      .join("");
    postsList.insertAdjacentHTML("beforeend", markup);
  } catch (err) {
    console.log(err);
  }
}

async function fetchMorePosts(limit) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

loadMoreBtn.addEventListener("click", async () => {
  try {
    limit += 5;
    const posts = await fetchMorePosts(limit);
    renderMorePosts(posts);
  } catch (err) {
    console.log(err);
  }
});
