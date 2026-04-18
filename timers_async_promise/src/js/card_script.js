const cardList = document.querySelector(".cards_list");
const fetchBtn = document.getElementById("fetch-cards");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let page = 1;

async function fetchCard(page) {
  try {
    const limit = 15;
    const start = (page - 1) * limit;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_start=${start}`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function renderCard(data) {
  try {
    const markup = data
      .map(({ id, title }) => {
        return `
                <li>
                    <img
                        src="https://picsum.photos/600"
                        alt="${title.slice(0, 10)}"
                        class="card_img"
                        loading="lazy"/>
                    <div class="card_component">
                        <p>${title.slice(0, 100)}</p>
                        <p><b>Author: </b>${id}</p>
                        <button class="card_btn">Read more...</button>
                    </div>
                </li>`;
      })
      .join("");
    cardList.innerHTML = markup;
  } catch (err) {
    console.log(err);
  }
}

fetchBtn.addEventListener("click", async () => {
  try {
    const data = await fetchCard(page);
    renderCard(data);
  } catch (err) {
    console.log(err);
  }
});

nextBtn.addEventListener("click", async () => {
  try {
    page++;
    const data = await fetchCard(page);
    renderCard(data);
    if (page !== 1) {
      prevBtn.classList.remove("is-hidden");
    }
  } catch (err) {
    console.log(err);
  }
});

prevBtn.addEventListener("click", async () => {
  try {
    page--;
    const data = await fetchCard(page);
    renderCard(data);
  } catch (err) {
    console.log(err);
  }
});
