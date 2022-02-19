import * as _ from "lodash";
import EditorJS from "@editorjs/editorjs";

function component() {
	const element = document.createElement("div");

	element.innerHTML = _.join(["Hello", "CHANGED webpack"], " ");

	return element;
}

document.body.appendChild(component());

const editor = new EditorJS({
	holder: "editorjs",
});
