import { useState, useEffect } from 'react'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import Links from '../components/Links'
import Navigation from '../components/Navigation'
import Portfolio from '../components/Portfolio'
import ProjectCard from '../components/ProjectCard'

const MainPage = () => {
    const [currentPage, setCurrentPage] = useState('')

    useEffect(() => {
        console.log(`Set current page to: ${currentPage}`)
    })
    
    const handleChange = (page) => {
        setCurrentPage(page)
    }

    const renderPage = () => {
        switch (currentPage) {
            case 'about': {
                return (
                    <AboutMe />
                )
            }
            case 'portfolio': {
                return (
                    <Portfolio />
                )
            }
            case 'contact': {
                return (
                    <ContactMe />
                )
            }
            case 'links': {
                return (
                    <Links />
                )
            }
            default: {
                console.log('Error changing pages')
            }
        }
    }

    return (
        <><Navigation handleChange={handleChange} />
         <div className='main'>
             {renderPage()}
         </div>
        </>
    )
}

export default MainPage