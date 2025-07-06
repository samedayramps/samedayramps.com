import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-8">

            <section>
              <h2 className="text-2xl font-bold mb-6">Agreement to Terms</h2>
              <p className="text-lg leading-relaxed">
                By using Same Day Ramps services, you agree to these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Our Services</h2>
              <p className="text-lg leading-relaxed mb-6">
                Same Day Ramps provides wheelchair ramp rental services including:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>Professional consultation and assessment</li>
                <li>Aluminum wheelchair ramp rentals</li>
                <li>Professional installation and setup</li>
                <li>Maintenance during rental period</li>
                <li>Removal at end of rental period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Rental Terms</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Rental Period</h3>
                  <p className="text-lg leading-relaxed">
                    Rentals are available on a monthly basis with no long-term contracts required. The rental period begins on the installation date and continues until removal.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Payment</h3>
                  <p className="text-lg leading-relaxed">
                    Payment is due monthly in advance. We accept various payment methods and will provide clear pricing upfront with no hidden fees.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Installation and Removal</h3>
                  <p className="text-lg leading-relaxed">
                    We will schedule installation and removal at mutually convenient times. Our professional technicians will ensure proper setup and safe removal.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Customer Responsibilities</h2>
              <p className="text-lg leading-relaxed mb-6">
                As a customer, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>Provide accurate information about your accessibility needs</li>
                <li>Ensure safe access to the installation site</li>
                <li>Use the ramp only for its intended purpose</li>
                <li>Report any damage or safety concerns immediately</li>
                <li>Allow access for maintenance and removal</li>
                <li>Make timely rental payments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Safety and Liability</h2>
              <p className="text-lg leading-relaxed mb-6">
                Our ramps are professional-grade aluminum with a 1,000 lb capacity when properly installed. We maintain liability insurance for our installations.
              </p>
              <p className="text-lg leading-relaxed">
                Customers are responsible for using the ramp safely and reporting any issues immediately. We are not liable for injuries resulting from misuse or failure to report safety concerns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Cancellation Policy</h2>
              <p className="text-lg leading-relaxed">
                You may cancel your rental at any time with 48 hours notice. We will schedule removal within a reasonable timeframe. No refunds for partial months, but no additional charges for early cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Damage and Maintenance</h2>
              <p className="text-lg leading-relaxed">
                Normal wear and tear is expected and covered. Customers are responsible for damage due to misuse, negligence, or failure to report issues. We will assess any damage charges fairly and transparently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Service Area</h2>
              <p className="text-lg leading-relaxed">
                We currently serve the Dallas-Fort Worth metropolitan area. Service availability may vary by location and demand.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Changes to Terms</h2>
              <p className="text-lg leading-relaxed">
                We may update these Terms of Service from time to time. We will notify customers of any significant changes. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-lg leading-relaxed mb-6">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-3 text-lg">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Email:</span> info@samedayramps.com
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Phone:</span> (123) 456-7890
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Service Area:</span> Dallas-Fort Worth Area
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Governing Law</h2>
              <p className="text-lg leading-relaxed">
                These Terms of Service are governed by the laws of the State of Texas. Any disputes will be resolved in the courts of Texas.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 