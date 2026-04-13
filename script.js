let realImages = [];
let fakeImages = [];
let currentImageIndex = 0;
let currentImageIsReal = false;

function loadImageList() {
    fetch('get_images.php')
        .then(response => response.json())
        .then(data => {
            realImages = data.real;
            fakeImages = data.fake;
            loadRandomImage();
        })
        .catch(error => console.error('Ошибка:', error));
}

function loadRandomImage() {
    const isReal = Math.random() < 0.5; // 50% шанс на реальное или сгенерированное изображение
    currentImageIsReal = isReal;

    const imageArray = isReal ? realImages : fakeImages;
    currentImageIndex = Math.floor(Math.random() * imageArray.length);
    
    const imageElement = document.getElementById('image');
    imageElement.src = imageArray[currentImageIndex];
    document.getElementById('result').textContent = '';
    document.getElementById('nextButton').style.display = 'none';
}

function checkAnswer(isReal) {
    const resultElement = document.getElementById('result');
    
    if (isReal === currentImageIsReal) {
        resultElement.textContent = 'Правильно!';
    } else {
        resultElement.textContent = 'Неправильно!';
    }
    
    document.getElementById('nextButton').style.display = 'block';
}

document.getElementById('realButton').addEventListener('click', () => checkAnswer(true));
document.getElementById('fakeButton').addEventListener('click', () => checkAnswer(false));
document.getElementById('nextButton').addEventListener('click', loadRandomImage);

// Загружаем список изображений при старте
loadImageList();
