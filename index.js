const button = document.querySelector('button')
const wishes = [
    'С Новым годом! Желаю новогоднего настроения, веры в чудеса и исполнения желаний, счастливых и радостных дней',
    'Пусть новый год принесёт вам исполнение всех мечт и желаний!',
    'Пусть все желания, загаданные в волшебную новогоднюю ночь, сбудутся!',
    'Пусть новый год будет наполнен множеством приятных событий!',
    'С наступающим новым годом! Пусть все ваши мечты сбываются!',
]


button.addEventListener('click', () => {
    button.remove()
    document.body.innerHTML = `<div class="card">${
        wishes[getRandomInt(0, wishes.length - 1)]
    }</div>`
})

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) // Максимум не включается, минимум включается
}
