const { contextBridge, ipcRenderer } = require('electron')
const moment = require('moment');
const Store = require('electron-store')

const store = new Store()

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
		secondsToTime: (s) => secondsToTime(s),
		storeSet: (name, data) => store.set(name, data),
		storeGet: (name) => store.get(name)
	}
)