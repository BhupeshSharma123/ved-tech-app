import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ApiDataDisplay from "@/components/ApiDataDisplay";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* API Data Section */}
      <section id="services" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Live Data Integration</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We integrate with public APIs to bring real-time data into your applications.
            </p>
          </div>
          <ApiDataDisplay />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
              <p className="text-muted-foreground mb-6">
                Have a project in mind? Fill out the form and our team will get back to you within 24 hours.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✅ Free consultation</li>
                <li>✅ Transparent pricing</li>
                <li>✅ Dedicated support</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Ved Tech Services. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}