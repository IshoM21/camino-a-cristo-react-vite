import { IconButton } from "@material-tailwind/react";

export const Header = () => {
    return (
        <header className="container mx-auto pt-4 pb-4 mt-5 mb-5 bg-gray-100 rounded-2xl block">
            <a href="/">
                <h1 className="text-center text-4xl font-bold  md:w-fit md:mx-auto">El Camino a Cristo</h1>
            </a>
            <div className="flex flex-row justify-center gap-4 mx-auto mt-4 px-10 md:px-0 lg:px-0">
                <a href="https://www.facebook.com/profile.php?id=100070303070110&locale=es_LA" target="_blank">

                    <div className="flex items-center">
                        <i className="fa-brands fa-facebook mr-2 text-blue-700"></i>
                        <p className="text-black hover:text-bold hover:text-blue-700">

                            Iglesia Adventista Kuchel
                        </p>
                    </div>
                </a>
                <a href="https://www.youtube.com/@iglesiaadventistakuchel2748" className="hover:text-red-600" target="_blank">
                    <div className="flex items-center">
                        <i className="fa-brands fa-youtube text-red-600 mr-2"></i>
                        <p className="text-black hover:text-red-600">

                            Iglesia Adventista Kuchel
                        </p>
                    </div>
                </a>
            </div>
        </header>
    );
}
