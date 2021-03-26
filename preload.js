const moment = require('moment');

window.addEventListener('DOMContentLoaded', () => {
	const secondsToTime = (s) => {
		let momentTime = moment.duration(s, 'seconds');
		let sec = momentTime.seconds() < 10 ? ('0' + momentTime.seconds()) : momentTime.seconds();
		let min = momentTime.minutes() < 10 ? ('0' + momentTime.minutes()) : momentTime.minutes();

		return min + ':' + sec;
	}

	const replaceText = (selector, text) => {
	    const element = document.getElementById(selector)
	    if (element) element.innerText = text
	}

	//initialise the times
	let breakTime = 20
	let workTime = 40
	let currentTime = workTime
	let workTimeBool = true;

	//set the starting time on screen
	replaceText('timerDiv', secondsToTime(currentTime))

	let timer = setInterval(() => {

		//remove a second
		currentTime -= 1

		//print out the new time
		replaceText('timerDiv', secondsToTime(currentTime))

		//When reaching 0, start break time/work time, depending on which just finished.
		if (currentTime <= 0) {
			workTimeBool = !workTimeBool
			currentTime = workTimeBool ? workTime : breakTime
		}
	}, 1000) //1000ms = 1sec; is what I assume the 1000 means.
})