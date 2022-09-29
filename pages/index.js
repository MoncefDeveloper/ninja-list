import styles from '../styles/Home.module.css'
import Link from "next/link";
import MyHead from '../comps/head';

export default function Home() {
  return (
    <>
      <MyHead title='Home'/>
      <div className={styles.container}>
        <h1>Home page</h1>
        <p>
          It was the first day of the rest of
          her life. This wasn't the
          day she was actually born, but she
          knew that nothing would be the same
          from this day forward. Although this was
          a bit scary to her, it was also extremely freeing
          . Her past was no longer a burden or something that
          she needed to be concerned about and defend. She threw
          off the covers keeping her warm in bed, placed her feet
          over the side of the bed, slipped on her slipper, and took
          the first step of the first day of her new life.
        </p>

        <p>
          The piano sat silently in the corner of the room.
          Nobody could remember the last time it had been
          played. The little girl walked up to it and hit
          a few of the keys. The sound of the piano rang
          throughout the house for the first time in years.
          In the upstairs room, confined to her bed, the
          owner of the house had tears in her eyes.
        </p>
        <Link href={'/'}><a className={'btn'}>See Nenja listing</a></Link>
      </div>
    </>
  )
}
