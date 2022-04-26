const popupElement = document.querySelector('.popup');
const editButton = document.querySelector('.profile__info-edit-button');
const closeButton = document.querySelector('.popup__content-button');
const formInputs = popupElement.getElementsByTagName('input');
const title = document.querySelector('.profile__info-username'),
    description = document.querySelector('.profile__info-description');
const titleInput = document.querySelector('.popup__content-form-name');
const descriptionInput = document.querySelector('.popup__content-form-description');

function openPopup() {
    popupElement.classList.add('popup_opened');
    titleInput.value = title.innerText;
    descriptionInput.value = description.innerText;
}

function closePopup() {
    popupElement.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

const saveButton = document.querySelector('.popup__content-form-button');
saveButton.addEventListener('click', function saveForm() {
    for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].name === 'name') {
            title.innerText = formInputs[i].value;
        } else if (formInputs[i].name === 'description') {
            description.innerText = formInputs[i].value;
        } else {};
    }
    closePopup();
});

document.addEventListener('keyup', function(event) {
    if (event.code === 'Escape') {
        closePopup();
    }
});