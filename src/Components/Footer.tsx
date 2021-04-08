import './Footer.css'
export function Footer(){
    return(
        <>
            <footer>
                <div className="line">
                    <a className="icones" href="https://www.instagram.com/csufrn/" target="_blank" rel="noopener noreferrer" >
                        <img className="igimg" src="testing.png" alt="Instagram Logo" />
                        <img className="gitimg" src="githubicon.png" alt="Tik tok logo" />
                        <img className="ytimg" src="ytteste.png" alt="Youtube Logo" />
                    </a>
                </div>
                <div className="cs">
                    <span className='first'>
                        Desenvolvido pela Computer Society - UFRN
                    </span>
                    <span className='second'>
                        Natal/RN - 2021
                    </span>
                </div>
            </footer>
        </>
    );
}