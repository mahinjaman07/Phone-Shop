const fetchData = async (itemName , dataLimit) => {
    let url = `https://openapi.programming-hero.com/api/phones?search=${itemName}`
    const res = await fetch(url);
    const data = await res.json();
    getData(data.data , dataLimit);
}



const getData = (data , dataLimit) => {

    toggleSpinner(true);
    const showAllBtn = document.getElementById('all-btn');
    if(dataLimit && data.length >= 10){
        data = data.slice(0 , 10);
        showAllBtn.classList.remove('d-none');
    }
    else{
        showAllBtn.classList.add('d-none');
    };
    const phonesContainer = document.getElementById('item-container');
    phonesContainer.innerHTML = '';
    const errorText = document.getElementById('error-text');
    if(data.length === 0){
        errorText.classList.remove('d-none')
    }
    else{
        errorText.classList.add('d-none');
    };

    data.forEach(phones => {
        const div = newDiv(phones);
        phonesContainer.appendChild(div);
    });
    toggleSpinner(false);
    
};

const modalApi = async apiId =>{
    const url = `https://openapi.programming-hero.com/api/phone/${apiId}`
    const res = await fetch(url);
    const data = await res.json();
    getDetails(data.data);
};

const getDetails = phones =>{
    const modalContainer = document.querySelector('.modal-dialog');
    modalContainer.innerHTML = '';
    const div = modalDiv(phones);
    modalContainer.appendChild(div);
}



document.getElementById('all-btn').addEventListener('click', () => {
    search();
});

document.getElementById('search-btn').addEventListener('click', () => {
    search(10);
});

fetchData('samsung');