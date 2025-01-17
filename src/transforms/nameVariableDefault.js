/** @type {NameTransform['transform']} */
const transform = (token, _config, _opts) => {
	token.path.slice(0, -1);

	return token.name.replace("-default", "");
};

/** @type {Transform} */
const nameVariableDefaultTransformer = {
	name: "name/variable/default",
	type: "name",
	transform,
};

export { transform as _transform, nameVariableDefaultTransformer };
