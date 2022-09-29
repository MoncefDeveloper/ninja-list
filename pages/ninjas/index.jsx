import MyHead from "../../comps/head";
// import photos from "../comps/photos_api.json";
import styles from '../../styles/Nenjas.module.css';
import Link from "next/link";

export const getStaticProps =async () => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const ninjas=await res.json();
    return {
        props:{ninjas}
    }
}

const Ninjas = ({ninjas}) => {

    return (
        <>
            <MyHead title='Ninjas list' />
            <div className={styles.ninjas}>
                <h1>All ninjas</h1>
                {ninjas?.map((ninja,key)=><Link href={`/ninjas/${ninja.id}`} key={key}><a className={styles.ninja}><h4>{ninja.name}</h4></a></Link>)}    
            </div>
        </>
    );
}

export default Ninjas;