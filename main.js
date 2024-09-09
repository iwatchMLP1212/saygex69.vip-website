const get_data = () => {
    fetch('http://127.0.0.1:5500/ong_bo_don_than.json')
        .then((response) => response.json())
        .then((json) => {
            load_data(json);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
};

const load_data = (data) => {
    const container = document.getElementById('cac-ong-bo-don-than');

    data.forEach((bo, index) => {
        let new_div = document.createElement('div');
        new_div.classList.add('row', 'bo-don-than');
        new_div.innerHTML = `
            <div class="col-md-3">
                <img src="${bo.img}" alt="Image of ${bo.name}" class="rounded-start bo-don-than-img">
            </div>
            <div class="col-md-5">
                <div class="card-body">
                    <h3 class="card-title">${bo.name}</h3>
                    <p class="card-text">${bo.description}</p>
                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#myModal">
                        Book ngay
                    </button>
                </div>
            </div>
        `;
        container.appendChild(new_div);

        if (index < data.length - 1) {
            const hr = document.createElement('hr');
            hr.classList.add('my-4');
            container.appendChild(hr);
        }
    });
};

window.onload = () => {
    get_data();
};