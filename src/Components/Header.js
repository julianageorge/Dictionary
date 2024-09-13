import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/icon-arrow-down.svg";
import moon from "../assets/images/icon-moon.svg";
import { useEffect } from "react";

function Header({ dark, setDark }) {
    const fonthandler = (e) => {
        document.querySelector('body').style.fontFamily = e.target.value;
    };

    useEffect(() => {
        if (dark) {
            document.querySelector('body').classList.add("setdark");
        } else {
            document.querySelector('body').classList.remove("setdark");
        }
    }, [dark]);

    return (
        <div >
            <div className="flex justify-between items-center">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="select flex items-center justify-center">
                <select
  id="selected-font"
  className={`border-none cursor-pointer outline-none appearance-none bg-transparent p-2 ${dark ? 'dark-mode' : ''}`}
  onChange={fonthandler}
>
                        <option value="sans-serif">Sans-serif</option>
                        <option value="serif">Serif</option>
                        <option value="monospace">Monospace</option>
                    </select>
                    <span
                        className="Arrow content-none mt-9 cursor-pointer"
                        style={{
                            backgroundImage: `url(${arrow})`,
                            width: "20px",
                            height: "50px",
                            backgroundRepeat: "no-repeat"
                        }}
                    ></span>
                </div>
                <div className="mood flex items-center gap-8 border-l-2 border-solid border-black pl-8">
                    <input type="checkbox" id="mode" onChange={(e) => setDark(e.target.checked)} checked={dark} className="hidden" />
                    <label htmlFor="mode" className="flex items-center cursor-pointer gap-8">
                        <div className="switch">
                            <p className={`switchmood ${dark ? 'dark' : ''}`}>
                                <span className="switch_ball"></span>
                            </p> 
                        </div>
                        <img src={moon} alt="moon icon" className="" />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Header;
