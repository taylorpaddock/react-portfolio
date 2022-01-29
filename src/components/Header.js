import '../styles/header.css';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <div className='header-left-wrapper'>
                    <h1 className='header-name'>Taylor Paddock</h1>
                </div>
                <div className='header-right'> {<Navbar />} </div>
            </div>
            
        </div>
    )
}

export default Header;
