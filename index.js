let container = document.querySelector('.grid__container')

import {data} from './data.js'

console.log(data);

function createCard(obj) {
    const placeholder = document.querySelector('.placeholder');
    const card = document.createElement('div');
    card.className = 'card';
    const emodsy = document.createElement('span');
    emodsy.innerText = obj.symbol;
    emodsy.className = 'card__img'
    const title = document.createElement('p');
    title.className = 'number';
    title.innerText = obj.title;
    const text = document.createElement('p');
    text.className = 'text';
    text.innerText = obj.keywords;
    container.appendChild(card);
    card.append(emodsy, title, text);
}

function renderCards(data) {
    data.forEach((el) => {
        el.keywords = delDuplicate(el.keywords)
        createCard(el)
    })
};

function delDuplicate (keyWords) {
    const keyWordsWithsDubles = keyWords.split(' ')
    const keyWordsNoDubles = Array.from(new Set(keyWordsWithsDubles)).join(' ')
    return keyWordsNoDubles
};

renderCards(data);


