const tinymce = (globalThis as any).tinymce;

const emailSpanConfig = {
	selector: ".tinymce-span",
	menubar: false,
	inline: true,
	plugins: ["lists", "autolink"], // , "powerpaste"
	toolbar: "undo redo | bold italic underline",
	valid_elements: "strong,em,span[style],a[href]",
	valid_styles: {
		"*": "font-size,font-family,color,text-decoration,text-align",
	},
	powerpaste_word_import: "clean",
	powerpaste_html_import: "clean",
};

const emailHeaderConfig = {
	selector: ".tinymce-heading",
	menubar: false,
	inline: true,
	plugins: ["lists", "autolink"], // , "powerpaste"
	toolbar: "undo redo | bold italic underline",
	valid_elements: "strong,em,span[style],a[href]",
	valid_styles: {
		"*": "font-size,font-family,color,text-decoration,text-align",
	},
	powerpaste_word_import: "clean",
	powerpaste_html_import: "clean",
};

const emailBodyConfig = {
	selector: ".tinymce-body",
	menubar: false,
	inline: true,
	plugins: ["link", "lists", "autolink", "tinymcespellchecker"], // , "powerpaste"
	toolbar: [
		"undo redo | bold italic underline | fontselect fontsizeselect",
		"forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent",
	],
	valid_elements: "p[style],strong,em,span[style],a[href],ul,ol,li",
	valid_styles: {
		"*": "font-size,font-family,color,text-decoration,text-align",
	},
	powerpaste_word_import: "clean",
	powerpaste_html_import: "clean",
};

tinymce.init(emailHeaderConfig);
tinymce.init(emailBodyConfig);
tinymce.init(emailSpanConfig);
