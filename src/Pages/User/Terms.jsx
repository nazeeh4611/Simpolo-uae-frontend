import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Scale, BookOpen, AlertCircle, CheckCircle, ChevronRight, Shield, Clock } from 'lucide-react';
import { useSEO } from '../../util/SEO';

function TermsOfService() {

  useSEO({
    title: "Terms of Service | Simpolo Trading",
    description: "Terms and conditions for using Simpolo Trading LLC website and services.",
  });

  const pageTitle = "Terms of Service | Simpolo Trading LLC - Legal Terms & Conditions";
  const pageDescription = "Read Simpolo Trading LLC's terms of service. Legal terms governing the use of our website and services in UAE.";
  const pageKeywords = "Simpolo Trading terms of service, legal terms UAE, website terms, service conditions, legal agreement";

  useEffect(() => {
    document.title = pageTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.content = pageDescription;
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.content = pageKeywords;
    
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Terms of Service',
      'description': pageDescription,
      'url': window.location.href,
      'publisher': {
        '@type': 'Organization',
        'name': 'Simpolo Trading LLC',
        'url': window.location.origin
      }
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) existingScript.remove();
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, []);

  const terms = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website."
    },
    {
      title: "Use of Services",
      content: "Our services are available only to individuals who can form legally binding contracts under applicable law. You must be at least 18 years old to use our services."
    },
    {
      title: "Intellectual Property",
      content: "All content on this website, including text, graphics, logos, and images, is the property of Simpolo Trading LLC and is protected by UAE and international copyright laws."
    },
    {
      title: "User Conduct",
      content: "You agree not to use the website for any unlawful purpose or in any way that could damage, disable, or impair the website or interfere with any other party's use."
    },
    {
      title: "Product Information",
      content: "We strive to ensure product information is accurate. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free."
    },
    {
      title: "Limitation of Liability",
      content: "Simpolo Trading LLC shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use or inability to use the service."
    },
    {
      title: "Governing Law",
      content: "These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions."
    },
    {
      title: "Changes to Terms",
      content: "We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms of Service on this page."
    }
  ];

  return (
    <>
      <div className="sr-only" aria-hidden="true">
        <h1>Terms of Service - Simpolo Trading LLC</h1>
        <p>Legal terms and conditions governing the use of Simpolo Trading LLC website and services in accordance with UAE laws.</p>
      </div>

      <main className="min-h-screen bg-black text-white">
        <section className="py-30 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-gray-700">
                <Scale size={18} className="mr-2 text-gray-400" />
                <span className="text-gray-400 font-medium">Legal Agreement</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Terms of <span className="text-gray-300">Service</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Please read these terms carefully before using our website or services. These terms constitute a legally binding agreement.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock size={16} className="mr-2" />
                  Last Updated: January 1, 2024
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Shield size={16} className="mr-2" />
                  UAE Legal Compliance
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <FileText size={32} className="text-gray-400 mr-4" />
                <h2 className="text-3xl font-bold">Terms & Conditions</h2>
              </div>
              
              <div className="space-y-8">
                {terms.map((term, index) => (
                  <article key={index} className="bg-gray-900/50 rounded-xl p-6 border-l-4 border-gray-700">
                    <div className="flex items-start mb-4">
                      <div className="p-2 rounded-lg bg-gray-800 mr-4">
                        <span className="text-gray-300 font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold">{term.title}</h3>
                    </div>
                    <p className="text-gray-400 ml-12 leading-relaxed">{term.content}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 mb-12">
              <div className="flex items-center mb-6">
                <AlertCircle size={28} className="text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold">Important Disclaimers</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    All prices are quoted in UAE Dirhams (AED) and are subject to change without notice. Prices do not include VAT unless specified.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Product images are for illustrative purposes only. Actual products may vary in color, texture, or appearance.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Delivery times are estimates and may vary based on location, product availability, and custom requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <BookOpen size={28} className="text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold">Additional Agreements</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-800/50 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3">Privacy Policy</h4>
                  <p className="text-gray-400 mb-4">
                    Our Privacy Policy explains how we collect, use, and protect your personal information.
                  </p>
                  <Link
                    to="/privacy-policy"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    Read Privacy Policy
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
                
                <div className="p-6 bg-gray-800/50 rounded-xl">
                  <h4 className="text-lg font-semibold mb-3">Cookie Policy</h4>
                  <p className="text-gray-400 mb-4">
                    Learn about how we use cookies and similar technologies on our website.
                  </p>
                  <button className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    View Cookie Settings
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-500 mb-6">
                For any questions regarding these Terms of Service, please contact our legal department.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
              >
                Contact Legal Department
                <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default TermsOfService;