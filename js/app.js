const newDiv = item => {
    const div = document.createElement('div');
    div.style = "width: 18rem";
    div.classList.add('card-items');
    div.innerHTML = `
    <img src="${item.image}" class="card-img-top" alt="Image">
    <div class="card-body">
    <h5 class="card-title">${item.phone_name}</h5>
    <p class="card-text">${item.brand}</p>
    <button data-bs-toggle="modal" data-bs-target="#details-modal" class="btn btn-primary" onclick="modalApi('${item.slug}')">See More </button>
    </div>`
    return div;

};

const modalDiv = phoneDetails => {
    const div = document.createElement('div');
    div.classList.add('modal-content');
    div.innerHTML = `

    <div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">${phoneDetails.name}</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <img src="${phoneDetails.image}" alt="${phoneDetails.name}">
        <h3>Brand :${phoneDetails.brand}</h3>
        <h5>Main Features :${phoneDetails.mainFeatures.memory}</h5>
        <h6>Storage :${phoneDetails.mainFeatures.storage}</h6>
        <h6>${phoneDetails.releaseDate}</h6>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  type="button" class="btn btn-primary">Buy Now</button>
        </div>
    `
    return div;
}


const search = (dataLimit) => {
    toggleSpinner(true);
    let inputField = document.getElementById('input-search');
    let inputText = inputField.value;
    fetchData(inputText, dataLimit);
}


const toggleSpinner = isLoading => {
    const spinner = document.getElementById('spinner-container');
    if (isLoading) {
        spinner.classList.remove('d-none');
    }
    else {
        spinner.classList.add('d-none');
    }
}
