import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <nav className="footer">
        <p>* Please note that Peer Support is a private resource and is not intended to respond to students in crisis.
            If you have an emergency and would like to speak with Dartmouth’s counselor on-call during regular business hours,
            please call 603-646-9442. After hours, you can call this same number and press 1 to transfer to a Uhelp crisis provider
            or press 2 to transfer to the Department of Safety and Security. You can also directly call the Uhelp Crisis Line
            (Uhelp is a service of Uwill) at 833-646-1526. For life-threatening emergencies, call the suicide prevention lifeline
            at 988 or call 911. </p>
    </nav>
  );
};

export default Footer;