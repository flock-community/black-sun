import StyleDictionary from "style-dictionary";

/** @type {StyleDictionary.FileHeader} */
function fileHeader() {
	return ["Do not edit directly. File has been generated"];
}

StyleDictionary.registerFileHeader({
	name: "customFileHeader",
	fileHeader,
});

export { fileHeader };
