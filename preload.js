const { contextBridge, ipcRenderer } = require('electron')
const moment = require('moment');

//helper function so time is displayed correctly
const secondsToTime = (s) => {
	let momentTime = moment.duration(s, 'seconds');
	let sec = momentTime.seconds() < 10 ? ('0' + momentTime.seconds()) : momentTime.seconds();
	let min = momentTime.minutes() < 10 ? ('0' + momentTime.minutes()) : momentTime.minutes();

	return min + ':' + sec;
}

contextBridge.exposeInMainWorld(
	'helpers',
	{
		secondsToTime: (s) => secondsToTime(s)
	}
)

// window.addEventListener('DOMContentLoaded', () => {
// 	//helper function so time is displayed correctly
// 	const secondsToTime = (s) => {
// 		let momentTime = moment.duration(s, 'seconds');
// 		let sec = momentTime.seconds() < 10 ? ('0' + momentTime.seconds()) : momentTime.seconds();
// 		let min = momentTime.minutes() < 10 ? ('0' + momentTime.minutes()) : momentTime.minutes();

// 		return min + ':' + sec;
// 	}

// 	//function to replace innerText of an element
// 	const replaceText = (selector, text) => {
// 	    const element = document.getElementById(selector)
// 	    if (element) element.innerText = text
// 	}

// 	//function to change style of an element
// 	const changeStyle = (selector, property, value) => {
// 		let element = document.getElementById(selector)
// 		let elements
// 		if (!element) {
// 			elements = document.getElementsByTagName(selector)
// 			if (Array.isArray(elements) || !elements.length) {
// 				elements = document.getElementsByClassName(selector)
// 			}
// 		}

// 		if (element) {
// 			element.style.setProperty(property, value)
// 			return
// 		}
// 		if (elements) {
// 			for (i = 0; i < elements.length; i++) {
// 				elements[i].style.setProperty(property, value)
// 			}
// 		}
// 	}

// 	//implement play/pause functionality
// 	var playPauseLink = document.getElementsByClassName('playPauseButton')[0]
// 	let paused = false

// 	playPauseLink.addEventListener('click', function(e) {
// 		console.log('CLICK!')
// 		playPauseLink.innerText = paused ? 'II' : '▶'
// 		paused = !paused
// 		return false
// 	})

// 	//implement +1 functionality
// 	var plusOneLink = document.getElementsByClassName('addOneButton')[0]

// 	plusOneLink.addEventListener('click', function(e) {
// 		if (currentTime < 60*59) {
// 			currentTime += 60
// 			replaceText('timerDiv', secondsToTime(currentTime))
// 		}
// 		return false
// 	})

// 	//initialise the times
// 	let breakTime = 5
// 	let workTime = 10
// 	let currentTime = workTime
// 	let workTimeBool = true;

// 	//set the starting time on screen
// 	replaceText('timerDiv', secondsToTime(currentTime))

// 	let timer = setInterval(() => {

// 		if (!paused) {

// 			//remove a second
// 			currentTime -= 1

// 			//print out the new time
// 			replaceText('timerDiv', secondsToTime(currentTime))

// 			//When reaching 0, start break time/work time, depending on which just finished.
// 			if (currentTime <= 0) {
// 				workTimeBool = !workTimeBool
// 				currentTime = workTimeBool ? workTime : breakTime
// 				if (workTimeBool) {
// 					changeStyle('timerDiv', 'background-color', '#CD5C5C')
// 					changeStyle('utilityDiv', 'background-color', '#CD5C5C')
// 					changeStyle('body', 'color', 'white')
// 					changeStyle('a', 'color', 'white')
// 					changeStyle('settingsButton', 'background-image', 'url("../app/settings_cog_white.png")')
// 				} else {
// 					changeStyle('timerDiv', 'background-color', '#92D293')
// 					changeStyle('utilityDiv', 'background-color', '#92D293')
// 					changeStyle('body', 'color', 'black')
// 					changeStyle('a', 'color', 'black')
// 					changeStyle('settingsButton', 'background-image', 'url("../app/settings_cog_black.png")')
// 				}
// 			}
// 		}
// 	}, 1000) //1000ms = 1sec; is what I assume the 1000 means.
// })