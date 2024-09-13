import React, { useState, useEffect } from 'react';
import play from "../assets/images/icon-play.svg";
import Footer from './footer';
import NotFound from "./Notffound"; 
import Load from "./Load";
import Grouping from './Grouping';

function Word({ load, notfound, search, main}) {
    const [audio, setAudio] = useState(null);

    const playHandler = () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        const newAudio = new Audio(main.phonetics[0]?.audio);
        newAudio.play().then(() => {
            setAudio(newAudio);
        }).catch((error) => {
            console.error('Error playing audio:', error);
        });
    };

    useEffect(() => {
        return () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        };
    }, [audio]);

    if (load) {
        return <div></div>;
    }

    if (search) {
        return (
            <div>
                <Load />
            </div>
        );
    }

    if (!search && main) {
        const grouped = Grouping(main.meanings);
        console.log('Grouped Meanings:', grouped);

        return (
            <div className="container ">
                <div className='flex items-center justify-between mb-6'>
                <div className="headercontainer">
                    <h1 className="word-title mb-2 text-3xl font-bold">{main.word}</h1>
                    <span className="phonetic text-purple text-lg">{main.phonetic}</span>
                </div>

                <div className="audio">
                    <img 
                        src={play} 
                        className="cursor-pointer" 
                        onClick={playHandler} 
                        alt="play audio" 
                    />
                </div>
                </div>

                <div className="partofspeech">
                    {grouped && Object.keys(grouped).length > 0 && (
                        <>
                            {Object.values(grouped).map((item, index) => (
                                <div key={index} className="innercontainer">
                                    <h3 className="partOfSpeechTitle text-xl mb-6 ">
                                        <p>{item.title}</p>
                                        <p className="bar"></p>
                                    </h3>
                                    <div className="meaning">
                                        <h5 className="meaning-title mb-6 text-gray-600 text-md">Meaning</h5>
                                        <ul className="meaning-list pl-8 mb-4 flex flex-col gap-4 text-lg ">
                                            {item.definitions.map((def, index) => (
                                                <li className=" list-disc list" key={index}>
                                                    {def.definition}
                                                    {def.example && (
                                                        <span className="meaningExample block mt-3 text-gray-500">"{def.example}"</span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {item.synonyms.length > 0 && (
                                        <div className="synonyms flex items-center mb-6 gap-5">
                                            <h5 className="synonymsTitle text-lg">Synonyms</h5>
                                            <div className="allSynonyms text-purple text-xl">
                                                {item.synonyms.join(', ')}
                                            </div>
                                        </div>
                                    )}
                                    {item.antonyms.length > 0 && (
                                        <div className="antonyms flex items-center mb-6 gap-5">
                                            <h5 className="antonymsTitle text-lg">Antonyms</h5>
                                            <div className="allAntonyms text-purple text-xl">
                                                {item.antonyms.join(', ')}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </>
                    )}
                </div>

                <Footer sourceUrls={main.sourceUrls} />
            </div>
        );
    }

    if (notfound) {
        return (
            <div className="main">
                <NotFound />
            </div>
        );
    }

    return null;  
}

export default Word;
