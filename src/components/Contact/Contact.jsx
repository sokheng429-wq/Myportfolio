import Header from "../SubComponents/Header";
import ContactItem from "./ContactItem";
import MyCV from '../../assets/MyCV.pdf'; // Ensure this path is correct
import { LocationIcon, GmailIcon, YoutubeIcon, ResumeIcon } from "../SubComponents/Icons";
import ContactArea from "./ContactArea";

function Contact() {
    

    const sendEmail = () => {
        const recipient = "sokheng429@gmail.com"; // Replace with the recipient's email
        const subject = ""; 
        const body = "Hello, "; 
        
        // Create the Gmail link
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the Gmail compose window
        window.open(gmailLink, '_blank'); // Use '_blank' to open in a new tab
    };

    // Updated contactData
    const contactData = [
    {
        id: 1,
        icon: <ResumeIcon />,
        title: "Resume",
        detail: (
            <a
                href={MyCV}
                target="_blank"
                rel="noopener noreferrer"
                className="plink"
            >
                View PDF
            </a>
        ),
    },
    {
        id: 2,
        icon: <GmailIcon />,
        title: "Gmail",
        detail: (
            <a onClick={sendEmail} className="plink">
                sokheng429@gmail.com
            </a>
        ),
    },
    {
        id: 3,
        icon: <YoutubeIcon />,
        title: "Youtube",
        detail: "@HengZG",
        link: "https://www.youtube.com/@HengZG"
    },
    {
        id: 4,
        icon: <LocationIcon />,
        title: "Location",
        detail: "Phnom penh, Cambodia",
        link: "https://maps.app.goo.gl/kr8PhsKdZZVagVeM6"
    },
];

    return (
        <section id="contact">
          <div className="about container col-xl-10 col-xxl-8 px-5">
            <div className="row flex-lg-row align-items-start">
              <Header 
              activeTitle={"Contact"}
              h2Title={"Don't be shy! Hit me up! 👇"}/>

            <ContactArea />

            <div className="row px-5 align-items-start mb-5 pb-5">
                {contactData.map(item => (
                    <ContactItem
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        detail={item.detail}
                        link={item.link} // Now this will render the button
                    />
                ))}
            </div>


            </div>      
          </div>
        </section>
    );
}

export default Contact;
