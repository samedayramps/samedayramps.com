import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-8">

            <section>
              <h2 className="text-2xl font-bold mb-6">Information We Collect</h2>
              <p className="text-lg leading-relaxed mb-6">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-lg">
                <li>Request a quote or consultation</li>
                <li>Contact us via phone, email, or our website form</li>
                <li>Schedule ramp installation or removal services</li>
              </ul>
              <p className="text-lg leading-relaxed">
                This may include your name, email address, phone number, address, and details about your accessibility needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">How We Use Your Information</h2>
              <p className="text-lg leading-relaxed mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>Provide wheelchair ramp rental services</li>
                <li>Communicate with you about your service requests</li>
                <li>Schedule installations and removals</li>
                <li>Send you important updates about your rental</li>
                <li>Improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Information Sharing</h2>
              <p className="text-lg leading-relaxed mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>With service providers who help us deliver our services (installation technicians)</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with a business transfer or sale</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Data Security</h2>
              <p className="text-lg leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Your Rights</h2>
              <p className="text-lg leading-relaxed mb-6">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please contact us:
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
              <h2 className="text-2xl font-bold mb-6">Changes to This Policy</h2>
              <p className="text-lg leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 