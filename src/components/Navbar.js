import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <>
            <div className="w-full h-auto py-3">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <Link href={"/"}><Image className="w-10 h-10" width="30" height="30" src="/logo.svg" alt="search"/>
                        </Link>
                            <Image width="30" height="30" alt="search" className="w-10 h-10 p-2 cursor-pointer" src="/search.svg"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;