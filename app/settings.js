window.addEventListener('DOMContentLoaded', () => {
	var saveButton = document.getElementById('saveSettings')

	var workTimeMins = document.getElementById('workTimeMins')
	var workTimeSecs = document.getElementById('workTimeSecs')

	var breakTimeMins = document.getElementById('breakTimeMins')
	var breakTimeSecs = document.getElementById('breakTimeSecs')

	saveButton.addEventListener('click', function(e) { //Needs validation of some sort
		console.log(workTimeMins.value + ':' + workTimeSecs.value)
		console.log(breakTimeMins.value + ':' + breakTimeSecs.value)

		if (workTimeMins.value != "") {
			window.helpers.storeSet('workTimeMins', workTimeMins.value)
			if (workTimeSecs.value != "") {
				window.helpers.storeSet('workTimeSecs', workTimeSecs.value)
			} else {
				window.helper.storeSet('workTimeSecs', "00")
			}
		} else if (workTimeSecs.value != "") {
			window.helpers.storeSet('workTimeMins', "00")
			window.helpers.storeSet('workTimeSecs', workTimeSecs.value)
		}


		if (breakTimeMins.value != "") {
			window.helpers.storeSet('breakTimeMins', breakTimeMins.value)
			if (breakTimeSecs.value != "") {
				window.helpers.storeSet('breakTimeSecs', breakTimeSecs.value)
			} else {
				window.helpers.storeSet('breakTimeSecs', "00")
			}
		} else if (breakTimeSecs.value != "") {
			window.helpers.storeSet('breakTimeMins', "00")
			window.helpers.storeSet('breakTimeSecs', breakTimeSecs.value)
		}
	})
})