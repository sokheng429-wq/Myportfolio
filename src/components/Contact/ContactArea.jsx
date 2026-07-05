import emailjs from "@emailjs/browser"
import { useRef } from 'react'


function ContactArea () {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        // replace with your information
        emailjs
          .sendForm(
            //make .env in root folder
            //npm i dot env
            // replace the codes with .env
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAIL_USER_ID
          )
       
          .then(
            (result) => {
                console.log(result.text);
                console.log("message sent");
                //add alert for user
                alert("Message sent successfully!");


                // Clear all input fields in the form
                form.current.reset(); // Reset the form fields
            },
            (error) => {
              console.log(error.text);
            }
          );
      };

    return (
        <>
    

            <main className="form-signin col-12 text-center pt-2 mb-5 mx-auto">
            <form ref={form} onSubmit={sendEmail} >

                <div className="form-floating my-4 rounded round">
                <input name="user_email" type="email" className="w-100 form-control" id="floatingInput" placeholder="name@example.com" required/>
                <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating my-4 rounded round">
                <textarea name="message" rows="4" className="w-100 h-50 form-control" id="floatingPassword" placeholder="Message" required></textarea>
                <label htmlFor="floatingPassword">Message</label>
                </div>

                <button type="submit" className="btn btn-primary btn-lg px-4 me-md-2">Send</button>
            </form>
            </main>
        </>
    );
}

export default ContactArea;