/** @type {Transform['transform']} */
const transform = (token, _config, _opts) => {
	if (!token.original.value?.includes("rgba(")) return token.value;

	const tokenOriginalValueRegex =
		/rgba\(\s*(?<color>\{*.*\})\s*,\s*(?<alpha>\{*.*\})\)/g;

	const newOriginalValue = token.original.value.replace(
		tokenOriginalValueRegex,
		(
			/** @type {string} */ _match,
			/** @type {string} */ color,
			/** @type {string} */ alpha,
		) => {
			return `color-mix(in srgb, ${color} ${alpha}, ${color} 0%)`;
		},
	);

	token.original.value = newOriginalValue;
	return newOriginalValue;
};

/** @type {Transform} */
const valueColorRgbaTransformer = {
	type: "value",
	name: "ts/color/rgba",
	transitive: true,
	transform,
};

export { transform as _transform, valueColorRgbaTransformer };
