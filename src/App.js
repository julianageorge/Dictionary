import './index.css';
import Header from './Components/Header';
import Search from './Components/Search';
import Word from './Components/Word';
import { useState } from 'react';

function App() {
  const [search, setsearch] = useState(false);
  const [notfound, setnotfound] = useState(false);
  const [load, setload] = useState(true);
  const [main, setmain] = useState("");
  const [dark, setDark] = useState(false); // Dark mode state

  const Searchhandler = async (searchTerm) => {
    setsearch(true);
    setload(false);
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
    const word = await response.json();

    setsearch(false);

    if (word.title === 'No Definitions Found') {
      setnotfound(true);
    } else {
      setnotfound(false);
      setmain(word[0]); // Ensure main data is passed correctly
    }
  };

  const reshandler = () => {
    setload(false); 
    setsearch(false);
    setnotfound(false);
    setmain("");
  };
const darkmode=(dark)=>{
  if(dark){
    document.querySelector('body').style.background='black';
    document.querySelector('body').style.color='white';
  }
  else{
    document.querySelector('body').style.background='white';
    document.querySelector('body').style.color='black';
  }

}
  return (
    <div className={`App w-[320px]  md:w-[730px] ${darkmode(dark)}`}>
      {}
      <Header dark={dark} setDark={setDark} />
      {}
      <Search onsearch={Searchhandler} onchange={reshandler} dark={dark} />
      <Word load={load} notfound={notfound} search={search} main={main}  />
    </div>
  );
}

export default App;
