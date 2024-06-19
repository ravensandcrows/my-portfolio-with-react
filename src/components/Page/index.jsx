import { useEffect } from 'react';
import PageContent from '../PageContent';

import { capitalizeFirstLetter } from '../../utils/helpers';
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
    currentPage = currentPage.substring(1);
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage);
    }, [currentPage]);

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <section>
            {currentPage === 'resume' ? (
                <div className='resume-header'>
                    <h2>{capitalizeFirstLetter(currentPage)}</h2>
                    <nav className='resume-nav'>
                        <ul className='resume-ul'>
                            <li className='resume-li'>
                                <button onClick={()=>scrollToElement('front-end')} className='resume-button'>Front-End</button>
                            </li>
                            <li className='resume-li'>
                                <button onClick={()=>scrollToElement('back-end')} className='resume-button'>Back-End</button>
                            </li>
                            <li className='resume-li'>
                                <a className="resume-button" target="_blank" href="https://www.linkedin.com/in/kaliblackstorm">LinkedIn</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            ) : (
                <h2>{capitalizeFirstLetter(currentPage)}</h2>
            )}
            <PageContent>
                <Outlet />
            </PageContent>
        </section>
    );
}
export default Page;
