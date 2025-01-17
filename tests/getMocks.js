const mockTokenDefaults = {
	name: "tokenName",
	path: ["path"],
	original: {
		value: "originalValue",
		type: "",
		attributes: {},
	},
	filePath: "file.json",
	isSource: true,
	value: "transformedValue",
	type: "",
	attributes: {},
};

/**
 * creates token path from token name
 * @param {*} tokenPath
 * @param {*} delimiter
 * @returns
 */
const getTokenPath = (tokenPath, delimiter = "-") => tokenPath.split(delimiter);

/**
 * transforms a partial style-dictionary TransformedToken into a TransformedToken
 * @param {Partial<TransformedToken>} overrides partial TransformedToken
 * @param {any} [options]
 * @returns {TransformedToken}
 */
export const getMockToken = (overrides, options = {}) => {
	mockTokenDefaults["path"] = getTokenPath(overrides.name, options.delimiter);

	return { ...mockTokenDefaults, ...overrides };
};
