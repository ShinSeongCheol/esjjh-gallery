const Header = () => {
    return (
        <>
            <header className={"w-full fixed top-0 left-0 shadow-md"}>
                <div className={"flex justify-between px-2 py-1"}>
                    <div className={"flex items-center"}>
                        <a href="/" className="flex-shrink-0">
                            <img className={"h-12 w-auto"} src="/logo/esjjh.png" alt=""/>
                        </a>
                        <input className={"mx-1 border-1 w-96 h-8"} type={"text"}></input>
                        <button className={"mx-1 border-1 w-20 h-8"} type={"button"}>검색</button>
                    </div>
                    <div className={"flex items-center"}>
                        <button className={"border-1 w-20 h-8"} type={"button"}>로그인</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;