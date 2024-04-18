import StyleDictionary from "style-dictionary";

const transformer = (token) => {
	token.path.slice(0, -1);
	return token.name.replace("-default", "");
};

StyleDictionary.registerTransform({
	type: "name",
	name: "name/variable/default",
	transformer,
});

export { transformer as _transformer };
