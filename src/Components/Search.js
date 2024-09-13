import searchicon from '../assets/images/icon-search.svg';
import { useEffect, useState, useRef } from 'react';

function Search({ onsearch, onchange, dark }) {
    const [word, setWord] = useState('');
    const textinput = useRef(null);
    const [submitform, setSubmitform] = useState(false);

    const Searchhandler = (value) => {
        setWord(value);
        onchange(value);
    };

    const formhandler = (e) => {
        e.preventDefault();
        if (word.trim() === '') { 
            setSubmitform(true); 
            return;
        }
        setSubmitform(false); 
        onsearch(word);
    };

    useEffect(() => {
        textinput.current.focus();
    }, []);

    return (
        <div>
            <form className={`relative Form ${submitform ? 'wrong' : ''} ${dark ? 'dark' : ''} w-[100%] flex justify-between items-center cursor-pointer mb-24`} onSubmit={formhandler}>
                <input
                    type='text'
                    placeholder='Search for any word...'
                    ref={textinput}
                    onChange={(e) => Searchhandler(e.currentTarget.value)}
                    className={`search mr-10 pr-16 pt-8 pb-8 w-[100%] h-[50px] rounded-2xl ml-8 text-sm  md:text-xl ${dark ? 'bg-black text-white' : ''}`}/>
                <p className={` absolute block  mt-32 ${submitform ? 'text-red-600 ' : 'text-transparent'}`}>Whoops, Can't be empty</p>
                <button type="submit" className="bg-transparent absolute cursor-pointer right-11  ">
                    <img src={searchicon} alt="Search Icon" className=' bg-no-repeat w-[18px] ' />
                </button>
            </form>
        </div>
    );
}

export default Search;
