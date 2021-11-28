const checkbox = document.querySelector('input[name=checkbox]');

checkbox.addEventListener('change', async function () {
	//retrieve the currently focused tab.
	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

	if (this.checked) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: setBackgroundColor,
		});
	} else {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: removeBackgroundColor,
		});
	}
});

// The body of this function will be executed as a content script inside the current page
async function setBackgroundColor() {
	const tablebody = document.getElementsByTagName('tbody')[6];
	const table = tablebody.getElementsByTagName('tr');
	const arr = [];
	for (let i = 0; i < table.length; i++) {
		const t = table[i];
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
	const arr = [];
	for (let i = 0; i < table.length; i++) {
		const t = table[i];
		arr.push(t);
	}

	arr.map((table, index) => {
		if (index % 2 === 0) {
			table.style.backgroundColor = '#ffffff';
		}
	});
}
