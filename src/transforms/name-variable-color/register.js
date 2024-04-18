import StyleDictionary from "style-dictionary";

const transformer = (token) => token.name.replace("Color", "");

StyleDictionary.registerTransform({
	type: "name",
	name: "name/variable/color",
	transformer,
});

export { transformer as _transformer };
