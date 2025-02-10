const PrivacyPolicyPage = () => {
  return (
    <div className="container py-10">
      <h4 className="font-semibold text-xl mb-5">📜 Privacy Policy Content</h4>

      <strong>1. Introduction</strong>
      <p className="mb-5">
        Welcome to Inkspire! Your privacy is important to us. This Privacy
        Policy explains how we collect, use, and protect your personal
        information when you visit our website.
      </p>

      <strong>2. Information We Collect</strong>
      <p className="mb-5">
        ✅ Personal Information: Name, email, phone number, shipping address.
        <br />✅ Payment Information: We do not store credit card details.
        Payments are securely processed through [Stripe/PayPal/Shurjopay].
        <br />✅ Usage Data: IP address, browser type, and pages visited to
        improve user experience.
        <br />✅ Cookies: We use cookies for analytics and personalized shopping
        experiences.
      </p>

      <strong>3. How We Use Your Information</strong>
      <p className="mb-5">
        🔹 To process and deliver your orders.
        <br />
        🔹 To provide customer support and respond to inquiries.
        <br />
        🔹 To improve our website and marketing efforts.
        <br />
        🔹 To comply with legal obligations.
      </p>

      <strong>4. How We Protect Your Information</strong>
      <p className="mb-5">
        ✅ Data encryption with SSL security.
        <br />✅ Secure payment gateways.
        <br />✅ Limited access to personal data by authorized personnel only.
      </p>

      <strong>5. Sharing Your Information</strong>
      <p className="mb-5">
        🚫 We do not sell or rent your data. However, we may share data with:
        <br />
        🔹 Trusted third-party services (payment processors, delivery partners).
        <br />
        🔹 Legal authorities if required by law.
      </p>

      <strong>6. Your Rights</strong>
      <p className="mb-5">
        ✅ You can request access to your personal data.
        <br />✅ You can ask us to delete or modify your information.
        <br />✅ You can opt out of marketing emails at any time.
      </p>

      <strong>7. Cookies & Tracking</strong>
      <p className="mb-5">
        We use cookies to enhance your browsing experience. You can manage or
        disable cookies through your browser settings.
      </p>

      <strong>8. Changes to This Policy</strong>
      <p className="mb-5">
        We may update this Privacy Policy periodically. Any changes will be
        posted on this page.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
