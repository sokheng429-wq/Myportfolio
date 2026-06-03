import { TelegramIcon, GithubIcon } from '../SubComponents/Icons';


function Footer() {
    return (
        <section id="footer">
            <div className="container col-xl-12 col-xxl-8 py-5 ">
                <footer className="d-flex flex-wrap justify-content-between align-items-center px-2 mt-2">
                    <div className="col-6 d-flex justify-content-start">
                        <p className="px-4 fs-6" style={{ color: 'white' }}><b>
                            Hired Me pls i need a job 😢😭
                        </b></p>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <p className="px-4 fs-6" ><b>
                    <a href="https://t.me/SokHeng_4290" target="_blank" rel="noopener noreferrer">
                        <TelegramIcon color="white m-1" />

                        </a>

                    <a href="https://github.com/sokheng429-wq" target="_blank" rel="noopener noreferrer">
                        <GithubIcon color="white m-1"/>

                        </a>
                        </b></p>
                    </div>
                </footer>
            </div>
        </section>
    );
}

export default Footer;
