const Header = () => {
    return (
        <>
            <header className={"w-full fixed top-0 left-0 shadow-md"}>
                <div className={"flex px-2 py-1"}>
                    <div className={"flex items-center grow"}>
                        <a href="/" className="flex-shrink-0">
                            <img className={"h-12 w-auto"} src="/logo/esjjh.png" alt=""/>
                        </a>
                        <div className={"hidden sm:flex"}>
                            <input className={"min-w-72 mx-1 border-2 border-gray-200 focus:outline-gray-300 rounded-sm"} type={"text"}></input>
                            <button className={"min-w-16 mx-1 bg-rose-200 border-2 border-rose-300 hover:bg-rose-400 hover:border-rose-500 hover:cursor-pointer rounded-sm"} type={"button"}>검색</button>
                        </div>
                    </div>
                    <div className={"flex items-center"}>
                        <button className={"bg-gray-200 border-2 border-gray-300 hover:bg-gray-400 hover:border-gray-500 hover:cursor-pointer rounded-sm w-20 h-8"} type={"button"}>로그인</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;