// The body of this function will be executed as a content script inside the
// current page
async function setPageBackgroundColor() {
	const tablebody = document.getElementsByTagName('tbody')[6];
	const table = tablebody.getElementsByTagName('tr');
	let arr = [];
	for (var i = 0; i < table.length; i++) {
		var t = table[i];
		arr.push(t);
	}

	arr.map((table, index) => {
		if (index % 2 === 0) {
			table.style.backgroundColor = '#282845';
		}
	});
}
async function removeBackgroundColor() {
	const tablebody = document.getElementsByTagName('tbody')[6];
	const table = tablebody.getElementsByTagName('tr');
	let arr = [];
	for (var i = 0; i < table.length; i++) {
		var t = table[i];
		arr.push(t);
	}

	arr.map((table, index) => {
		if (index % 2 === 0) {
			table.style.backgroundColor = '#ffffff';
		}
	});
}
var checkbox = document.querySelector('input[name=checkbox]');
// #FFFFFF
checkbox.addEventListener('change', async function () {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

	if (this.checked) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: setPageBackgroundColor,
		});
	} else {
		console.log('Checkbox is not checked..');
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: removeBackgroundColor,
		});
	}
});
