import Link from "next/link";


export const Button = () => {
    return (
        <div className="relative">
            <button
                className="relative w-56 h-56 bg-white rounded-full z-20 before:w-56 before:h-56 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-20 hover:before:w-80 hover:before:h-80 hover:before:bg-white hover:before:opacity-50 hover:before:rounded-full hover:before:transition-all hover:before:duration-500 transition-all duration-500">
                <Link
                    className="text-4xl uppercase font-bellefair"
                    href='/'>
                    Explore
                </Link>
            </button>
        </div>
    );
};
