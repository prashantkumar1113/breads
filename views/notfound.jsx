const React = require("react");
const Default = require("./layouts/default");

function notfound() {
    return (
        <Default>
            <h2>Sorry, bread not found</h2>
        </Default>
    );
}
module.exports = notfound;
