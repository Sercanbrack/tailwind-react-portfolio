const Navigation = ({handleChange}) => {
    return (
        <ul className='flex'>
            <li onClick={() => handleChange('about')}>ABOUT ME</li>
            <li onClick={() => handleChange('portfolio')}>PORTFOLIO</li>
            <li onClick={() => handleChange('contact')}>CONTACT ME</li>
            <li onClick={() => handleChange('links')}>RESUME AND LINKS</li>
        </ul>
    )
}

export default Navigation