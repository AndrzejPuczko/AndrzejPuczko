function createPlayer(container, src) {
	const video = container.querySelector('video')
	const timeline = container.querySelector('[data-js-timeline]')
	const play = container.querySelector('[data-js-play]')
	const time = container.querySelector('[data-js-time]')
	const duration = container.querySelector('[data-js-duration]')
	const progress = container.querySelector('[data-js-progress]')

	function togglePlay(e) {
		e.stopPropagation()
		if (video.paused) { 
			video.play()
			play.classList.remove('fa-play')
			play.classList.add('fa-pause')
		} else {
			video.pause()
			play.classList.remove('fa-pause')
			play.classList.add('fa-play')
		}
	}

	function updateProgress({ target }) {
		progress.style.width = `${(target.currentTime / target.duration) * 100}%`
	}

	function secToTime(seconds, separator) {
		return [parseInt(seconds / 60 / 60), parseInt((seconds / 60) % 60), parseInt(seconds % 60)]
			.join(separator ? separator : ':')
			.replace(/\b(\d)\b/g, '0$1')
			.replace(/^00\:/, '')
	}

	const updateDuration = ({ target }) => {
		duration.textContent = secToTime(target.duration)
	}

	const updateTime = ({ target }) => {
		time.textContent = secToTime(target.currentTime)
	}

	const setTime = e => {
		const pos = e.currentTarget.getBoundingClientRect()
		const left = e.pageX - pos.left
		const percentage = left / pos.width
		video.currentTime = video.duration * percentage
	}

	play.addEventListener('click', togglePlay)
	timeline.addEventListener('click', setTime)
	video.addEventListener('timeupdate', updateProgress)
	video.addEventListener('durationchange', updateDuration)
	video.addEventListener('timeupdate', updateTime)

	video.setAttribute('src', src)
}
createPlayer(document.querySelector('[data-js-player]'), 'https://space.eduweb.pl/files/assets/video.mp4')
