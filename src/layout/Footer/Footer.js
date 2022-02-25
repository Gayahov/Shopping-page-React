import "./Footer.css";
import { info, contacts, followUs } from "../../constats/footer.constant";
import Button from "../../Components/shared/Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { payment } from "../../constats/payment.constamt";

export default function Footer() {
  return (
      <div>
    <div className="footer-container">
      <div>
        <h4 className="help-header">About</h4>
        <p className="help-header-p">
          Founded in 2010 in Amsterdam, ETQ derived under the mindset of
          eliminating over-accessorized branding and focusing primarily on
          letting the quality of the product speak for itself.
        </p>
        <Button name="Read More" className="about-button"></Button>
      </div>
      <div>
      <h4 className="help-header">Address</h4>
        <p>Singel 465 <br/>1012 WP Amsterdam <br/>The Netherlands</p>
      </div>
      <div className="contact-container">
        <h4 className="help-header">Contact</h4>
        <ul>
          {contacts.map((item) => (
            <li className="info-item text-underlined">{item.description}</li>
          ))}
        </ul>
      </div>
      <div className="information-container">
        <h4 className="help-header">Information</h4>
        <FontAwesomeIcon icon={faCoffee} />
        <ul className="information">
          {info.map((item) => (
            <li className="info-item text-underlined">{item.description}</li>
          ))}
        </ul>
      </div>
      <div className="faq-container">
        <h4 className="help-header">Frequently asked questions</h4>
        <ul>
          {followUs.map((item) => (
            <li className="info-item text-underlined">{item.description}</li>
          ))}
        </ul>
      </div>
    </div>
    <div>
          <div className="footer-input">
          <label>Newsletter</label>
            <input />
            <Button name="Submit" ></Button>
          </div>
          <div className="heelo">
          {payment.map((item) => (
            <FontAwesomeIcon  item={item.icon} />
          ))}
          </div>
      </div>
    </div>
  );
}
