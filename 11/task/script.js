class Options {
	constructor (height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createElem(text) {
		const div = document.createElement('div');
		document.body.append(div);

		div.textContent = text;

		div.style.cssText = `
			height: ${this.height}px;
			width: ${this.width}px;
			background-color: ${this.bg};
			font-size: ${this.fontSize}px;
			text-align: ${this.textAlign};
		`;
	}
}

const elem = new Options(100, 200, 'red', 18, 'center');
elem.createElem('Something');