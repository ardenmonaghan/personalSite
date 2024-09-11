const Footer =() => {
    function sendEmail(e){
        e.preventDefault();
        console.log("Email sent");
    }
    return (
        
        <section className="footer color">
            <div className="container">

            <div>
                

                  <h1 className="footer-h1" id="contact">Contact Me</h1>
                  <p className="footer-p">You Can Reach Me Through Github, LinkedIn, or Email:</p>
                <div className="footer-links font-size-p">
                  <a className="footer-link"href="https://github.com/ardenmonaghan" >🔗 Github: github.com/ardenmonaghan</a>
                  <a className="footer-link" href="https://www.linkedin.com/in/arden-monaghan-574959243">🔗 LinkedIn: linkedin.com/in/ardenmonaghan</a>
                  <a className="footer-link" href="mailto:scientificardenmonaghan@gmail.com">📧 Personal Email: scientificardenmonaghan@gmail.com</a>
                  <a className="footer-link" href="mailto:amonagha@ualberta.ca">🏫 University Email: amonagha@ualberta.ca</a>
                </div>
              </div>
            </div>
        </section>
    );
  };

  export default Footer;