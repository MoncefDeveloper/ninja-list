import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Image
                src="/lm-logo.png"
                width="80px"
                height="60px"
                objectFit="cover"
                quality={'100%'}
            />
            <div className="links">
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/ninjas'}>Ninja List</Link>
            </div>
        </nav>
    );
}

export default Navbar;