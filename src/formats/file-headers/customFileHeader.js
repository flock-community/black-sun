/** @type {FileHeader} */
function fileHeader() {
	return ["Do not edit directly. File has been generated"];
}

const customFileHeader = {
	name: "customFileHeader",
	fileHeader,
};

export { customFileHeader, fileHeader };
