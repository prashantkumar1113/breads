const React = require("react");
const Default = require("./layouts/default");

function Show({bread}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            <p>
                And it
                {bread.hasGluten ? (
                    <span> does </span>
                ) : (
                    <span> does not </span>
                )}
                have gluten
            </p>
            <img src={bread.image} alt={bread.name} />

            {/* <p>Baked by: {bread.baker.name}</p> */}
            <p>{bread.getBakedBy()}</p>

            <a href={`/breads/${bread.id}/edit`}>
                <button>Edit</button>
            </a>
            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE" />
            </form>
        </Default>
    );
}

module.exports = Show;
