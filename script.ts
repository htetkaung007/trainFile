interface DataType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

/*  */

const container = document.getElementById("data-container");
document.addEventListener("DOMContentLoaded", function () {
  const products = async () => {
    const url: string = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    const data: DataType[] = await response.json();
    console.log(data);

    const buy = () => console.log("i will buy this item");
    const photo = "photo";
    const buyButton = "buyButton";
    if (container) {
      data.forEach((item) => {
        const div = document.createElement("div");

        div.classList.add("data-item");

        div.innerHTML = `
                        <h3>${item.title}</h3>
                      <p>Price: $${item.price}</p>
                     <img src= ${item.image} class=${photo} />
                    <P>Details : ${item.description}</p>
                    <button id = ${buyButton}>Buy</button>
                    `;
        /* div.appendChild(img); */
        container.appendChild(div);
      });
    }
  };

  products();
});
