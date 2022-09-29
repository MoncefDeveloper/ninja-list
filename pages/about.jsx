import MyHead from "../comps/head";

const About = () => {
    return (
        <>
            <MyHead title='About' />
            <div className="about">
                <h1>About Page</h1>
                <p>
                    The piano sat silently in the corner of the room.
                    Nobody could remember the last time it had been
                    played. The little girl walked up to it and hit
                    a few of the keys. The sound of the piano rang
                    throughout the house for the first time in years.
                    In the upstairs room, confined to her bed, the
                    owner of the house had tears in her eyes.
                </p>
            </div>
        </>
    );
}

export default About;