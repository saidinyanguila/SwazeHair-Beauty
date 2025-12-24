import { Scissors } from "lucide-react";
import { useState } from "react";
import Cookies from 'js-cookie';
import { get } from "http";

const CookiesConsent = () => {
	const setConsent = (choice) => {
		Cookies.set('choice', choice, {expires: 1, path: '/'});
	};

	const getConsent = () => {
		return Cookies.get('choice') === 'agree' || Cookies.get('choice') === 'reject';
	}

	if (getConsent) {
		return (
			<div></div>
		);
	}
	else {
		return (
			<div id="cookie-consent" className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie consent">
				<div className="cookie-consent__content">
					<p className="cookie-consent__text">
						We use cookies to improve your experience, analyse site usage, and deliver personalized content. By clicking "Agree to all cookies" you accept the use of all cookies. You can also choose to reject non-essential cookies.
					</p>
					<div className="cookie-consent__buttons" role="group" aria-label="Cookie actions">
						<button id="cookie-reject" className="btn btn--white" type="button" onClick={() => {setConsent('reject')}}>Reject</button>
						<button id="cookie-agree" className="btn btn--white" type="button" onClick={() => {setConsent('agree')}}>Accept cookies</button>
					</div>
				</div>
			</div>
		);
	}
};

export default CookiesConsent;
