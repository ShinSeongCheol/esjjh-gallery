import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../contexts/AuthContext.jsx";

const Header = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const clickSearchButton = () => {
        console.log("검색 버튼 클릭");
    }

    const clickLoginButton = () => {
        navigate("/signin");
    }

    return (
        <>
            <header className={"bg-white w-full sticky border-b-1 border-gray-300"}>
                <div className={"flex px-2 py-1"}>
                    <div className={"flex items-center grow"}>
                        <Link to="/" className="flex-shrink-0">
                            <img className={"h-12 w-auto"} src="/logo/esjjh.png" alt=""/>
                        </Link>
                        <div className={"hidden sm:flex"}>
                            <input className={"min-w-72 mx-1 border-2 border-gray-200 focus:outline-gray-300 rounded-sm"} type={"text"}></input>
                            <button className={"min-w-16 mx-1 bg-rose-200 hover:cursor-pointer rounded-sm"} type={"button"} onClick={clickSearchButton}>검색</button>
                        </div>
                    </div>
                    <div className={"flex items-center"}>
                        {
                            auth?
                            <button className={"bg-indigo-500 hover:cursor-pointer rounded-sm w-20 h-8 text-white"} type={"button"} onClick={clickLoginButton}>글쓰기</button>
                            :
                            <button className={"bg-indigo-500 hover:cursor-pointer rounded-sm w-20 h-8 text-white"} type={"button"} onClick={clickLoginButton}>로그인</button>
                        }
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;