const renderElements = () => {
    const container = document.querySelector('.container');
    const boxWrapper = container.appendChild(document.createElement('div'));
    boxWrapper.classList.add('verification-code-wrapper');

    renderInfoElements(boxWrapper);
    renderForm(boxWrapper);
}

const renderInfoElements = (boxWrapper) => {
    const infoWrapper = boxWrapper.appendChild(document.createElement('div'));
    infoWrapper.classList.add('info-wrapper');

    const title = infoWrapper.appendChild(document.createElement('h1'));
    title.classList.add('info-title');
    title.textContent = 'Authorization Code';

    const infoText = infoWrapper.appendChild(document.createElement('div'));
    infoText.classList.add('info-text');
    infoText.textContent = 'Please enter the code that we sent to (***) *** - 2819.';
}

const renderForm = (boxWrapper) => {
    const form = boxWrapper.appendChild(document.createElement('form'));
    form.classList.add('form');
    const inputsWrapper = form.appendChild(document.createElement('div'));
    inputsWrapper.classList.add('inputs-wrapper');
    
    const amountOfInputs = 4;

    for (let i = 0; i < amountOfInputs; i++) {
        const input = inputsWrapper.appendChild(document.createElement('input'));
        input.classList.add('input');
        input.setAttribute('type', 'text');
        input.setAttribute('maxlength', '1');
        
        input.addEventListener('keyup', (event) => {
            if (event.target.value.length === 1 && input.nextElementSibling !== null) {
                input.nextElementSibling.focus();
                input.nextElementSibling.select();
            }
        });
    }
    renderButton(form);

    form.addEventListener('submit', event => event.preventDefault());
}

const renderButton = (form) => {
    const button = form.appendChild(document.createElement('button'));
    button.classList.add('button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Verify';
}

window.onload = () => {
    renderElements();
}