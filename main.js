const itemsPerPage = 5;
let currentPage = 1;
let totalItems = 0;
let data = []; // Store the fetched data

const get_data = () => {
    fetch("/ong_bo_don_than.json")
        .then((response) => response.json())
        .then((json) => {
            load_data(json);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
};

const load_data = (fetchedData) => {
    data = fetchedData; // Store the data for pagination
    totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    displayPage(currentPage); // Display the current page
    updatePagination(totalPages);
    load_furthur_html();
};

const displayPage = (page) => {
    const container = document.getElementById("cac-ong-bo-don-than");
    container.innerHTML = ""; // Clear previous content

    const start = totalItems - (page - 1) * itemsPerPage; // Start from the end
    const end = start - itemsPerPage;
    const itemsToDisplay = data.slice(Math.max(end, 0), start); // Get items in reverse order

    itemsToDisplay.reverse().forEach((bo) => { // Reverse items to display from last to first
        let new_div = document.createElement("div");
        new_div.classList.add("row", "bo-don-than");
        new_div.innerHTML = `
            <div class="col-md-3 border-sm">
                <img src="${bo.img}" alt="Image of ${bo.name}" class="rounded-start bo-don-than-img">
            </div>
            <div class="col-md-5">
                <div class="card-body">
                    <h3 class="card-title">${bo.name}</h3>
                    <p class="card-text">${bo.description}</p>
                    <button type="button" class="btn btn-secondary btn-gradient" data-bs-toggle="modal" data-bs-target="#myModal">
                        Book ngay
                    </button>
                </div>
            </div>
            <hr>
        `;
        container.appendChild(new_div); // Add new items at the end
    });

    if (itemsToDisplay.length > 0) {
        const hr = document.createElement("hr");
        hr.classList.add("my-4");
        container.appendChild(hr); // Add horizontal rule at the bottom
    }
};

const updatePagination = (totalPages) => {
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = "";

    // Previous button
    const prevItem = document.createElement("li");
    prevItem.className = "page-item " + (currentPage === 1 ? "disabled" : "");
    prevItem.innerHTML = `<a class="page-link" href="#" aria-label="Previous" onclick="changePage(${currentPage - 1})"><span aria-hidden="true">&laquo;</span></a>`;
    paginationContainer.appendChild(prevItem);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement("li");
        pageItem.className = "page-item " + (currentPage === i ? "active" : "");
        pageItem.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
        paginationContainer.appendChild(pageItem);
    }

    // Next button
    const nextItem = document.createElement("li");
    nextItem.className = "page-item " + (currentPage === totalPages ? "disabled" : "");
    nextItem.innerHTML = `<a class="page-link" href="#" aria-label="Next" onclick="changePage(${currentPage + 1})"><span aria-hidden="true">&raquo;</span></a>`;
    paginationContainer.appendChild(nextItem);
};

const changePage = (page) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (page < 1 || page > totalPages) return; // Prevent out of bounds
    currentPage = page;
    displayPage(currentPage);
    updatePagination(totalPages); // Update pagination after changing the page
    load_furthur_html();
};

const load_furthur_html = () => {
    const footer = document.getElementsByTagName("footer")[0];
    footer.style.display = "block"; // Ensure footer is displayed
};

const toggleSidebar = () => {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.display = sidebar.style.display === "none" || sidebar.style.display === "" ? "block" : "none";
};

const logout = () => {
    localStorage.removeItem("dXNlckVtYWls");
    window.location.reload();
};

window.onload = () => {
    get_data();
    var modalElement = document.getElementById("welcomeModal");
    var myModal = new bootstrap.Modal(modalElement, {
        keyboard: false,
        backdrop: "static",
    });
    myModal.show();
};
