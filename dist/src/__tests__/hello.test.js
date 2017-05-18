"use strict";
const react_1 = require("react");
const hello_1 = require("../components/hello");
const react_test_renderer_1 = require("react-test-renderer");
describe('<Hello />', () => {
    it('renders correctly', () => {
        const hello = react_test_renderer_1.default.create(react_1.default.createElement(hello_1.Hello, { compiler: "TypeScript", framework: "React" })).toJSON();
        expect(hello).toMatchSnapshot();
    });
});
//# sourceMappingURL=hello.test.js.map