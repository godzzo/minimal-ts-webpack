import * as _ from "lodash";
import EditorJS from "@editorjs/editorjs";

const sampleData = {
	time: 1645273238378,
	blocks: [
		{
			id: "lbIRGzLdXH",
			type: "paragraph",
			data: { text: "<b>Maha Gónia Lebira....</b>" },
		},
		{
			id: "Qz8ar2_BuO",
			type: "paragraph",
			data: { text: "Na mizuss? Mit szeretnél ma csinálni" },
		},
		{
			id: "sAyyYfv1O2",
			type: "paragraph",
			data: { text: "Van mar HÓ Nálatok?" },
		},
	],
	version: "2.23.2",
};

function component() {
	const element = document.createElement("div");

	element.innerHTML = _.join(["Hello", "CHANGED webpack"], " ");

	return element;
}

document.body.appendChild(component());

(globalThis as any).editor = new EditorJS({
	holder: "editorjs",
	data: sampleData,
	minHeight: 10,
});

function saveEditorData() {
	(globalThis as any).editor
		.save()
		.then((outputData: any) => {
			(globalThis as any).outputData = outputData;
			console.log("Article data: ", outputData);
		})
		.catch((error: any) => {
			console.log("Saving failed: ", error);
		});
}

(globalThis as any).handler = {
	saveEditorData,
};
