// import React from "react";

// function NavBar() {
//   const links = ["home", "about", "projects"];
//   const linksElement = links.map((x) => (
//     <a key={x} href={"#" + x}>
//       {x}
//     </a>
//   ))

//   return (<nav>{linksElement}</nav>)
//   // })
// }


// export default NavBar;


// ### NavBar

// In the `NavBar` component, there is an array with three strings representing
// each link on the page. For each of those strings, create an `<a>` tag that looks
// like this:

// ```jsx
// <a href="#home">home</a>
// ```

// Make sure each `<a>` element also gets a unique `key` prop.

// NavBar
// In the NavBar component, there is an array with three strings representing each link on the page. For each of those strings, create an <a> tag that looks like this:

{/* <a href="#home">home</a>
Make sure each <a> element also gets a unique key prop. */}

import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchors = links.map((x) => (
    <a key={x} href={"#" + x}>
      {x}
    </a>
  ));
  return <nav>{anchors}</nav>;
}

export default NavBar;