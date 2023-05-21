// 1. Stwórz element paska i wstaw go na stronę
// 2. Przypisz zdarzenie scroll do obiektu window
// 3. Wylicz postęp przewinięcia dokumentu
// 4. Ustaw szerokość paska postępu

const html = document.documentElement;
const progres = document.createElement('div')
const progresInner = document.createElement('div')

progres.className = 'edu-progress'
progresInner.className = 'edu-progress__inner'

progres.append(progresInner)
document.body.prepend(progres)

const progresBar = () => {
      const height = html.scrollHeight - window.innerHeight
      const scrolled = (html.scrollTop / height) * 100
      progresInner.style.width = `${scrolled + 2}%`
}

window.addEventListener('scroll', progresBar)

