const button = document.querySelector('button');
const select = document.querySelector('select');

button.addEventListener('click', () => {
    const text = document.querySelector('#text').value;
    const func = new SpeechSynthesisUtterance(text);
    func.lang = select.value;

    speechSynthesis.speak(func)
});
