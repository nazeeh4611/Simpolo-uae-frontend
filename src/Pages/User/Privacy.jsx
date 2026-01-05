import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, ChevronRight, FileText, Users, Database, Cookie, CheckCircle, AlertTriangle } from 'lucide-react';
import { useSEO } from '../../util/SEO';

function PrivacyPolicy() {

  useSEO({
    title: "Privacy Policy | Simpolo Trading",
    description: "Privacy policy for Simpolo Trading LLC. Learn how we collect, use, and protect your personal information.",
  });

  const pageTitle = "Privacy Policy | Simpolo Trading LLC - Data Protection & Privacy";
  const pageDescription = "Read Simpolo Trading LLC's privacy policy. We are committed to protecting your personal data and ensuring your privacy rights in UAE.";
  const pageKeywords = "Simpolo Trading privacy policy, data protection UAE, GDPR compliance Dubai, personal data protection, privacy statement";

  useEffect(() => {
    document.title = pageTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.content = pageDescription;
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.content = pageKeywords;
    
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Privacy Policy',
      'description': pageDescription,
      'url': window.location.href,
      'publisher': {
        '@type': 'Organization',
        'name': 'Simpolo Trading LLC',
        'url': window.location.origin
      },
      'datePublished': '2024-01-01',
      'dateModified': '2024-01-01'
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) existingScript.remove();
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, []);

  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: "We collect information that you provide directly to us, including name, email address, phone number, company details, project requirements, and any other information you choose to provide."
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      content: "We use the information we collect to provide and improve our services, communicate with you, process transactions, send promotional materials, and comply with legal obligations."
    },
    {
      title: "Data Protection",
      icon: Shield,
      content: "We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction."
    },
    {
      title: "Cookies & Tracking",
      icon: Cookie,
      content: "Our website uses cookies to enhance user experience. You can control cookie preferences through your browser settings. We use analytics tools to understand website usage."
    },
    {
      title: "Third-Party Sharing",
      icon: FileText,
      content: "We do not sell your personal information. We may share data with trusted service providers who assist in our operations, subject to strict confidentiality agreements."
    },
    {
      title: "Your Rights",
      icon: CheckCircle,
      content: "You have the right to access, correct, delete, or restrict processing of your personal data. Contact our Data Protection Officer to exercise these rights."
    }
  ];

  return (
    <>
      <div className="sr-only" aria-hidden="true">
        <h1>Privacy Policy - Simpolo Trading LLC</h1>
        <p>Comprehensive privacy policy detailing how we collect, use, and protect your personal information in accordance with UAE data protection laws.</p>
      </div>

      <main className="min-h-screen bg-black text-white">
        <style dangerouslySetInnerHTML={{__html: `
          .policy-section {
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
            border: 1px solid rgba(255,255,255,0.1);
          }
          .gradient-border {
            border: 2px solid transparent;
            background: linear-gradient(black, black) padding-box,
                        linear-gradient(135deg, #c0c0c0, #808080) border-box;
          }
        `}} />

        <section className="py-30  bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-gray-700">
                <Shield size={18} className="mr-2 text-gray-400" />
                <span className="text-gray-400 font-medium">Data Protection</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Privacy <span className="text-gray-300">Policy</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Protecting your privacy and personal data is our top priority. Learn how we collect, use, and safeguard your information.
              </p>
              
              <div className="text-sm text-gray-500">
                Last Updated: January 1, 2024
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {sections.map((section, index) => (
                <article key={index} className="policy-section rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gray-800 mr-4">
                      <section.icon size={24} className="text-gray-300" />
                    </div>
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{section.content}</p>
                </article>
              ))}
            </div>

            <div className="gradient-border rounded-2xl p-8 mb-12">
              <div className="flex items-center mb-6">
                <AlertTriangle size={28} className="text-yellow-500 mr-3" />
                <h2 className="text-2xl font-bold">Important Notice</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  By using our website and services, you consent to the collection and use of your information as described in this Privacy Policy. We may update this policy periodically, and any changes will be posted on this page.
                </p>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at <strong>privacy@simpolotrading.com</strong>.
                </p>
                <p>
                  This policy complies with UAE Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data and international data protection standards including GDPR principles.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Lock className="mr-3 text-gray-400" size={24} />
                  Data Retention
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Customer data: Retained for 7 years after last transaction
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Website analytics: Retained for 26 months
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Marketing data: Retained until consent withdrawal
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Eye className="mr-3 text-gray-400" size={24} />
                  Your Choices
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
                    Opt-out of marketing communications
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
                    Request data access or deletion
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
                    Update your personal information
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
                    Manage cookie preferences
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="text-center">
                <p className="text-gray-500 mb-6">
                  This policy is effective as of January 1, 2024 and applies to all users of our website and services.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
                >
                  Contact Data Protection Officer
                  <ChevronRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default PrivacyPolicy;