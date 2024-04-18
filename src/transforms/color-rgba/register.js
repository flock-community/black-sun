import StyleDictionary from "style-dictionary";

const transformer = (token) => {
	if (!token.original.value?.includes("rgba(")) return token.value;
	const tokenOriginalValueRegex =
		/rgba\(\s*(?<color>\{*.*\})\s*,\s*(?<alpha>\{*.*\})\)/g;

	const newOriginalValue = token.original.value.replace(
		tokenOriginalValueRegex,
		(match, color, alpha) => {
			return `color-mix(in srgb, ${color} ${alpha}, ${color} 0%)`;
		},
	);

	token.original.value = newOriginalValue;
	return newOriginalValue;
};

StyleDictionary.registerTransform({
	type: "value",
	name: "ts/color/rgba",
	transitive: true,
	transformer,
});

export { transformer as _transformer };
