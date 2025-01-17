import { expect } from "chai";
import { getMockToken } from "../../tests/getMocks.js";
import { _transform as transform } from "./nameVariableDefault.js";

describe("[transforms] name transformer nameVariableDefault", () => {
	it("should remove the `default` indicator from the token name", () => {
		const token = getMockToken({ name: "prefix-color-content-default" });

		expect(transform(token, {}, {})).to.equal("prefix-color-content");
	});

	it("should not change a token if the `default` indicator is not part of the token name", () => {
		const token = getMockToken({ name: "prefix-color-content" });

		expect(transform(token, {}, {})).to.equal("prefix-color-content");
	});
});
