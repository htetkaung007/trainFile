interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

document.addEventListener("DOMContentLoaded", function () {
  const apiUrl: string = "https://jsonplaceholder.typicode.com/users"; // Example API

  // Function to fetch data from API
  async function fetchData(): Promise<void> {
    try {
      const response = await fetch(apiUrl);
      const data: User[] = await response.json();
      displayData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Function to display data in HTML
  function displayData(data: User[]): void {
    const container = document.getElementById("data-container");

    if (container) {
      data.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("data-item");
        div.innerHTML = `
                    <h2>${item.name}</h2>
                    <p><strong>Email:</strong> ${item.email}</p>
                    <p><strong>Phone:</strong> ${item.phone}</p>
                `;
        container.appendChild(div);
      });
    }
  }

  // Fetch data when the page loads
  fetchData();
});
