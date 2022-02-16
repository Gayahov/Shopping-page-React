import "./HelpInformation.css";
import { information, contact, faq } from "../../../../constats/help.constants";

function HelpInformation() {
  return (
    <div className="help-container">
      <div className="contact-container">
        <ul>
          {contact.map((item) => (
            <li className="info-item text-underlined">{item.description}</li>
          ))}
        </ul>
      </div>
      <div className="information-container">
        <h4 className="text-underlined">Informatin</h4>
        <ul className="information">
          {information.map((item) => (
            <li className="info-item text-underlined">{item.description}</li>
          ))}
        </ul>
      </div>
      <div className="faq-container">
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
