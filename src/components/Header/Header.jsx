import './Header.css';

function Header(props) {
    return(
        <>
            <header>
               <h1>{props.logo}</h1>
            </header>
        
        </>
    );
}

export default Header;