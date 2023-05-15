import React from "react";

export const Accordion = () => {

    const [active, setActive] = React.useState(false);

    return (
        <>
            <div className={active ? 'accordion active' : 'accordion'} onClick={() => setActive(!active)}>
                <h3>Titulo da sanfona</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio inventore delectus cumque quibusdam repudiandae veniam et voluptatem provident cupiditate distinctio sint, nobis quo molestias fuga nostrum labore? Magnam, fuga.</p>
            </div>
        </>
    )
}