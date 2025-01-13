/** @type {NameTransform['transform']} */
const transform = (token) => token.name.replace("Color", "");

/** @type {Transform} */
const nameVariableColorTransformer = {
	name: "name/variable/color",
	type: "name",
	transform,
};

export { transform as _transform, nameVariableColorTransformer };
