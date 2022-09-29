import { useEffect } from "react";

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(({ id }) => { return { params: { id: id.toString() } } })
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = async (cont) => {
    const { id } = cont.params;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const ninja = await res.json();
    return {
        props: { ninja  }
    }
}


const SingleNenja = ({ninja}) => {
    const { name, email, address, website } = ninja;

    useEffect(()=>{
        // console.log(ninja);
    },[])

    return (
        <div>
            nenja
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{address.city}</p>
            <p>{website}</p>
        </div>
    );
}

export default SingleNenja;