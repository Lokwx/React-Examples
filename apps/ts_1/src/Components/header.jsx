const Header = () => {
    return (
        <div className="bg-orange-200 text-orange-500 flex justify-between px-2 py-2">
        <div className="flex">
            <div className="mx-4">
                About
            </div>
            <div className="mx-4">
                Store
            </div>
        </div>
        <div className="flex">
            <div className="mx-4">
                Settings
            </div>
            <div className="mx-4  text-violet-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fill-rule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clip-rule="evenodd"/>
                </svg>
            </div>
        </div>
        </div>
    );
};

export default Header;