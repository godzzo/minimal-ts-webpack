// import * as _ from "lodash";
// import { join } from "lodash";
import join from "lodash/join";

function component() {
	const element = document.createElement("div");

	element.innerHTML = join(["Hello", "CHANGED webpack"], " ");

	return element;
}

document.body.appendChild(component());
