export default function PrivacyPolicyPage() {
  return (
    <div>
      <h1 className="mb-6 border-b border-[#CECECE] pb-4 text-2xl font-bold">
        Privacy Policy
      </h1>

      <div className="prose prose-sm max-w-none mb-10">
        <p className="mb-4">
          Welcome to Going 2 Zero. Your privacy is important to us, and we are
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and protect your data when you visit
          <span className="text-blue-600">{" "} <a href="https://going2zero.com" target="_blank">going2zero.com</a></span> or use our services.
        </p>

        <h2 className="mb-2 mt-6 text-xl font-bold">
          1. Information We Collect
        </h2>

        <h3 className="mb-2 mt-4 text-lg font-semibold">
          1.1 Personal Information
        </h3>
        <p>We collect personal information when you:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>Create an account or profile</li>
          <li>Sign up for newsletters, consultations, or services</li>
          <li>Make a payment or transaction</li>
          <li>Interact with us on social media</li>
        </ul>

        <p>This may include:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>Name, email address, phone number</li>
          <li>Business details (company name, industry, location)</li>
          <li>
            Payment details (billing address, transaction details, but NOT
            credit card numbers—we use third-party payment processors)
          </li>
        </ul>

        <h3 className="mb-2 mt-4 text-lg font-semibold">
          1.2 Non-Personal Information
        </h3>
        <p>
          We may also collect non-personal data automatically when you visit our
          website, including:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>IP address, browser type, and device information</li>
          <li>Website usage and analytics data</li>
          <li>Cookies and tracking technologies</li>
        </ul>

        <h2 className="mb-2 mt-6 text-xl font-bold">
          2. How We Use Your Information
        </h2>
        <p>We use the collected data for:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>Providing services and processing payments</li>
          <li>Responding to inquiries and customer support requests</li>
          <li>
            Sending newsletters, promotions, or updates (you can opt-out
            anytime)
          </li>
          <li>Improving our website, services, and user experience</li>
          <li>Complying with legal obligations</li>
        </ul>

        <h2 className="mb-2 mt-6 text-xl font-bold">
          3. How We Share Your Information
        </h2>
        <p>
          We do not sell or rent your personal information. However, we may
          share data with:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            Service Providers - Third-party companies that assist in payment
            processing, analytics, or website hosting
          </li>
          <li>
            Legal Authorities - When required by law, regulation, or legal
            process
          </li>
          <li>
            Business Transfers - In case of a merger, sale, or business
            acquisition
          </li>
        </ul>

        <h2 className="mb-2 mt-6 text-xl font-bold">
          4. Cookies & Tracking Technologies
        </h2>
        <p>
          We use cookies and similar technologies to improve our website
          performance and user experience. You can manage your cookie
          preferences through your browser settings.
        </p>

        <h2 className="mb-2 mt-6 text-xl font-bold">5. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data
          from unauthorized access or misuse. However, no online transmission is
          100% secure.
        </p>

        <h2 className="mb-2 mt-6 text-xl font-bold">6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. We are not
          responsible for their privacy practices, so we encourage you to review
          their policies separately.
        </p>

        <h2 className="mb-2 mt-6 text-xl font-bold">
          7. Your Rights & Choices
        </h2>
        <p>You have the right to:</p>
        <ul className="mb-4 list-disc pl-6">
          <li>Access and update your personal data</li>
          <li>Opt-out of marketing emails</li>
          <li>Request information about how we use your data</li>
        </ul>
        <p>To exercise these rights, contact us at [Your Email].</p>

        <h2 className="mb-2 mt-6 text-xl font-bold">
          8. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this policy from time to time. Any changes will be
          posted on this page with an updated Effective Date.
        </p>
      </div>
    </div>
  );
}
