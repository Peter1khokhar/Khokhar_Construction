

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Terms & Conditions
        </h1>

        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
            <p>
              Welcome to <span className="font-semibold">Khokhar Construction</span>. 
              By accessing or using our website, you agree to comply with these Terms & Conditions. 
              Please read them carefully before engaging with our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Scope of Services</h2>
            <p>
              We provide residential, commercial, and industrial construction services, including design, 
              execution, renovation, and project management. All services are subject to written agreements 
              and approved proposals.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate project requirements before initiation.</li>
              <li>Ensure timely communication and approvals during the project lifecycle.</li>
              <li>Make payments as agreed upon in official quotations or contracts.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Estimates & Quotations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All cost estimates are prepared with the best available data at the time of issuance.</li>
              <li>Final project cost may vary depending on design changes or market conditions.</li>
              <li>Written approval is required for variations in scope or budget.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payments must be made as per the agreed schedule.</li>
              <li>Delays may result in suspension of work or termination of services.</li>
              <li>Taxes and government fees are the client’s responsibility.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Site Access & Safety</h2>
            <p>
              Clients must provide safe and reasonable access to the site. We follow strict safety 
              standards; unauthorized interference is prohibited. We are not liable for delays 
              caused by client-side restrictions or force majeure events.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Intellectual Property</h2>
            <p>
              All designs, drawings, and documentation remain the property of Khokhar Construction 
              unless otherwise agreed in writing. Unauthorized use or reproduction is prohibited.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">8. Limitation of Liability</h2>
            <p>
              We are not liable for delays due to natural disasters, government restrictions, 
              or third-party suppliers, nor for damages caused by misuse or lack of maintenance 
              after project handover.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">9. Termination of Services</h2>
            <p>
              Either party may terminate services if terms are not complied with, approvals/payments 
              are delayed, or by mutual agreement in writing.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">10. Governing Law</h2>
            <p>
              These Terms & Conditions are governed by the laws of <span className="font-semibold">India</span>. 
              Any disputes will be under the jurisdiction of courts in <span className="font-semibold">Punjab, India</span>.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">11. Updates</h2>
            <p>
              Khokhar Construction reserves the right to update these Terms at any time. Clients 
              will be notified of significant changes via official communication channels.
            </p>
          </section>

          {/* Final Note */}
          <div className="bg-gray-100 border-l-4 border-yellow-500 p-4 rounded-md mt-8">
            <p>
              📌 By engaging with <span className="font-semibold">Khokhar Construction</span>, 
              you agree to these Terms & Conditions, ensuring a transparent and successful collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
