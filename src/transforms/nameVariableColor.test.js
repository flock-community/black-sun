import { expect } from "chai";
import { _transform as transform } from "./nameVariableColor.js";
import { getMockToken } from "../../tests/getMocks.js";

describe("[transforms] name transformer nameVariableColor", () => {
	it("should transform remove the name `Color` from the token name", () => {
		const token = getMockToken({ name: "ColorGrey500" });

		expect(transform(token, {}, {})).to.equal("Grey500");
	});

	it("should not change the token name if the name `Color` is not part of the token name", () => {
		const token = getMockToken({ name: "Opacity50" });

		expect(transform(token, {}, {})).to.equal("Opacity50");
	});
});
