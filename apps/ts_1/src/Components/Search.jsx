const Search = () =>
{
    return <div className="border-2 border-red-500 flex-1 flex flex-col justify-center items-center bg-orange-100">
        <div className="text-5xl text-orange-500">Foogle</div>
        <div className="my-5 text-S p-1 text-center bg-orange-200 border-orange-300 border-2 rounded-full w-80">
            <div className="text-orange-300 flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
                <input className="flex-1 rounded-r-full"></input>
            </div>
        </div>
        <div className="flex mt-2">
            <button className="m-2 rounded-md bg-violet-200 text-violet-400 px-2 py-2">
                Foogle Search
            </button>
            <button className="m-2 rounded-md bg-violet-200 text-violet-400 px-2 py-2">
                Image Search
            </button>
        </div>
    </div>
};

export default Search;