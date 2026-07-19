import Header from "../SubComponents/Header";
import ContactItem from "./ContactItem";
import MyCV from '../../assets/MyCV.pdf';
import { LocationIcon, GmailIcon, YoutubeIcon, ResumeIcon, TelegramIcon, PhoneIcon } from "../SubComponents/Icons";
import ContactArea from "./ContactArea";

function Contact() {

    const sendEmail = () => {
        const recipient = "sokheng429@gmail.com";
        const subject = "";
        const body = "Hello, ";
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailLink, '_blank');
    };

    const contactData = [
        {
            id: 1,
            icon: <ResumeIcon />,
            title: "Resume",
            detail: "View my CV",
            link: MyCV,
        },
        {
            id: 2,
            icon: <GmailIcon />,
            title: "Email",
            detail: "sokheng429@gmail.com",
            onClick: sendEmail,
        },
        {
            id: 3,
            icon: <TelegramIcon size={28} />,
            title: "Telegram",
            detail: "@SokHeng_4290",
            link: "https://t.me/SokHeng_4290",
        },
        {
            id: 4,
            icon: <PhoneIcon />,
            title: "Phone",
            detail: "+855 31 832 5599",
            link: "tel:+855318325599",
        },
        {
            id: 5,
            icon: <YoutubeIcon />,
            title: "Youtube",
            detail: "@HengZG",
            link: "https://www.youtube.com/@HengZG",
        },
        {
            id: 6,
            icon: <LocationIcon />,
            title: "Location",
            detail: "Phnom Penh, Cambodia",
            link: "https://maps.app.goo.gl/kr8PhsKdZZVagVeM6",
        },
    ];

    return (
        <section id="contact">
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <Header
                    activeTitle={"Contact"}
                    h2Title={"Don't be shy! Hit me up!"}
                />

                <div className="contact-grid">
                    <div className="contact-cards-col">
                        {contactData.map((item) => (
                            <ContactItem
                                key={item.id}
                                icon={item.icon}
                                title={item.title}
                                detail={item.detail}
                                link={item.link}
                                onClick={item.onClick}
                            />
                        ))}
                    </div>
                    <div className="contact-form-col">
                        <ContactArea />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
