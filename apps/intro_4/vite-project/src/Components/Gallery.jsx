import React from "react";

function Profile() {
  return (
    //Note that the src and alt text must be within the <img ... /> itself
    <img src="https://react.dev/images/docs/scientists/MK3eW3As.jpg" alt="Katherine Johnson" />
  );
}

export default function Gallery()
{
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile /> 
        </section>
    )
}
