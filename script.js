creation = document.getElementById("creation")
functions = document.getElementById("functions")

function createTable() {
	width = Number(document.getElementById("width").value)
	height = Number(document.getElementById("height").value)
	table = document.createElement("table")
	caption = table.appendChild(document.createElement("caption"))
	for (let i = 0; i < height; i++) {
		tr = table.appendChild(document.createElement("tr"))
		for (let j = 0; j < width; j++) {
			td = tr.appendChild(document.createElement("td"))
			form = td.appendChild(document.createElement("form"))
			form.appendChild(document.createElement("textarea"))
			btn = form.appendChild(document.createElement("button"))
			btn.type = "button"
			btn.innerHTML = "Apply"
			btn.setAttribute("class", "t-btn")
			btn.setAttribute("onclick", "buttonApply(" + (i * width + j) + ")")
		}
	}
	document.getElementById("functions").hidden = false
	document.getElementById("creation").hidden = true
	document.body.appendChild(table)
}

function buttonApply(n) {
	td = table.children[Math.floor(n / width) + 1].children[n % width]
	form = td.children[0]
	td.innerHTML = form.children[0].value
	form.hidden = true
}

function changeButton() {
	brdBtn = document.getElementById("border-btn")
	brdBtn.innerHTML = "Set " + document.getElementById("border-btn").parentElement.children[0].value + "px " + document.getElementById("border-btn").parentElement.children[1].value + " border"
}

function nothing() {}

function tableSetBorder() {
	table.style.border = document.getElementById("border-btn").parentElement.children[0].value + "px " + document.getElementById("border-btn").parentElement.children[1].value + " green"
}

function tableSetName(name) {
	caption.innerHTML = name
}

function tableRemoveRow(n) {
	if ((n > 0) && (n <= height)) {
		table.children[n].remove()
		height -= 1
	}
	else {
		alert("MISTAKENT")
	}
}

function tableDelete() {
	table.remove()
	document.getElementById("functions").hidden = true
	for (let i = 0; i < document.getElementById("creation").children.length; i++) {
		if (document.getElementById("creation").children[i].tagName == "INPUT") {
			document.getElementById("creation").children[i].value = ""
		}
	}
	document.getElementById("creation").hidden = false
}

function MAGIC() {
	//рандомная ячейка
	n = Math.floor(Math.random() * width * height)
	td = table.children[Math.floor(n / width) + 1].children[n % width]
	//рандомный цвет фона
	color = Math.floor(Math.random() * (256 ** 3 - 16 ** 4) + 16 ** 4).toString(16)
	if (color.length < 6) {
		color = '0' + color
	}
	td.style.backgroundColor = '#' + color
	//рандомный цвет текста
	color = Math.floor(Math.random() * (256 ** 3 - 16 ** 4) + 16 ** 4).toString(16)
	if (color.length < 6) {
		color = '0' + color
	}
	td.style.color = '#' + color
	//рандомный размер текста
	td.style.fontSize = Math.floor(Math.random() * 16 + 15) + 'px'
	//или удалить ячейку
	 if (Math.random() > 0.9) {
		 td.innerHTML = ""
		 form = td.appendChild(document.createElement("form"))
		 form.appendChild(document.createElement("textarea"))
		 btn = form.appendChild(document.createElement("button"))
		 btn.type = "button"
		 btn.innerHTML = "Apply"
		 btn.setAttribute("class", "t-btn")
		 btn.setAttribute("onclick", "buttonApply(" + n + ")")
	 }
}
