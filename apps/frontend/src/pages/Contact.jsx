import { useState, useRef, useContext } from "react";
import { PhoneCall, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
import MainLayout from "../Layouts/MainLayout";
import Alert from "../shared/components/UIElements/Alert";
import { useAlert } from "../shared/context/AlertContext";
import { sendEmailApi } from "../../service/email";
import LoadingSpinner from "../shared/util/LoadingSpinner";
import Captcha from "../shared/util/Captcha";
import { SettingsContext } from "../shared/context/SettingsContext";

function Contact() {
  const { showAlert, alert } = useAlert();
  const [loading, setLoading] = useState(false);
  const { siteTitle } = useContext(SettingsContext);
  const [captchaValid, setCaptchaValid] = useState(false);
  const captchaRef = useRef();

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!captchaValid) {
      showAlert("Please complete the captcha before submitting", "error");
      return;
    }

    setLoading(true);

    try {
      await sendEmailApi(formData.email, formData.subject, formData.message);
      showAlert("Email sent successfully!", "success");
      setFormData({ email: "", subject: "", message: "" });
      setCaptchaValid(false);
      captchaRef.current.reset();
    } catch (err) {
      showAlert("Failed to send message, please try again", "error");
      console.error(err); //TODO: remove console.log
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - {siteTitle.slice(0, 10)}</title>
      </Helmet>
      <MainLayout>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl text-secondary font-bold">Contact Us</h1>
              <div className="py-6 max-w-lg">
                If you have any questions or feedback, please don't hesitate to
                contact us.
                <div className="divider divider-primary"></div>
                <ul>
                  <li className="py-2">
                    <PhoneCall className="inline-block mr-2 text-primary" />
                    <a href="tel:123-456-7890" className="hover:underline">
                      123-456-7890
                    </a>
                  </li>
                  <li>
                    <Mail className="inline-block mr-2 text-primary" />
                    <a
                      href="mailto:admin@example.org"
                      className="hover:underline"
                    >
                      admin@example.org
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  {alert && <Alert type={alert.type} message={alert.message} />}
                  <form onSubmit={handleSubmit}>
                    <label className="label py-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input validator"
                      placeholder="mail@site.com"
                    />
                    <div className="validator-hint">
                      Enter valid email address
                    </div>
                    <label className="label py-2">Subject</label>
                    <input
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input validator"
                    />
                    <div className="validator-hint">Enter subject</div>
                    <label className="label py-2">Message</label>
                    <textarea
                      name="message"
                      type="text"
                      value={formData.message}
                      onChange={handleChange}
                      className="textarea validator"
                    />
                    <div className="validator-hint">Enter message</div>
                    <div className="mt-4">
                      <Captcha ref={captchaRef} onValidate={setCaptchaValid} />
                    </div>
                    <button className="btn btn-neutral mt-4" type="submit">
                      {loading ? <LoadingSpinner small /> : "Send"}
                    </button>
                  </form>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Contact;
