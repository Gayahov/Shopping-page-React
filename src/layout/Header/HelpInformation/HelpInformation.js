import "./HelpInformation.css";
import { information, contact, faq } from "../../../constats/help.constants";

function HelpInformation() {
  return (
    <div className="help-container">
      <div className="contact-container">
      <h4 className="help-header">Contact</h4>
        <ul>
          {contact.map((item) => (
            <li className="info-item text-underlined">{item.description}</li>
          ))}
        </ul>
      </div>
      <div className="information-container">
        <h4 className="help-header">Information</h4>
        <ul className="information">
          {information.map((item) => (
            <li className="info-item text-underlined">{item.description}</li>
          ))}
        </ul>
      </div>
      <div className="faq-container">
      <h4 className="help-header">Frequently asked questions</h4>
        <ul>
          {faq.map((item) => (
            <li className="info-item text-underlined">{item.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default HelpInformation;
