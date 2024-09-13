import React from 'react';
import newWindow from "../assets/images/icon-new-window.svg";

function Footer({ sourceUrls }) {console.log(sourceUrls);
  return (
    <div className='footer'>
      <div className='footercontent'>
        <p>Source: </p>
        <div className='source-link flex items-center justify-start gap-2'>
          {sourceUrls && sourceUrls.length > 0 && (
            <div className=''>
              {sourceUrls.map((url, index) => (
                <a 
                  key={index} 
                  href={url} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='source-url text-gray-500 flex justify-center gap-4'
                >

                  {url} <img src={newWindow} alt='new window' className='new-window-icon' />
                </a>
              ))}
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
