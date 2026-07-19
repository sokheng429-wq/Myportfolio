import { TelegramIcon, GithubIcon, YoutubeIcon, GmailIcon } from '../SubComponents/Icons';

function Footer() {
    return (
        <section id="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <span className="footer-logo">TS</span>
                        <h3 className="footer-name">THOEUN SOKHENG</h3>
                        <p className="footer-tagline">Full-Stack Developer | Building the future, one line at a time.</p>
                    </div>

                    <div className="footer-socials">
                        <a href="https://t.me/SokHeng_4290" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Telegram">
                            <TelegramIcon size={22} />
                        </a>
                        <a href="https://github.com/sokheng429-wq" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                            <GithubIcon size={22} />
                        </a>
                        <a href="https://www.youtube.com/@HengZG" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Youtube">
                            <YoutubeIcon />
                        </a>
                        <a href="mailto:sokheng429@gmail.com" className="footer-social-link" aria-label="Email">
                            <GmailIcon />
                        </a>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="footer-copy">Built with React & passion. Open to opportunities!</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
