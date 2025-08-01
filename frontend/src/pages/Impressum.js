import React from "react";
import { MapPin, Mail, Phone, FileText, Shield } from "lucide-react";

const Impressum = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Impressum
          </h1>
          <p className="text-lg text-gray-600">
            Rechtliche Informationen gemäß § 5 TMG
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Verantwortlich */}
          <section>
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Angaben gemäß § 5 TMG</h2>
            </div>
            
            <div className="bg-gradient-to-r from-rose-50 to-purple-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-800 mb-2">Maria Schneider</h3>
              <p className="text-gray-700 mb-1">Handwerkskünstlerin & DIY-Enthusiastin</p>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Kreativstraße 123<br />80333 München<br />Deutschland</span>
                </div>
              </div>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kontakt</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <Mail className="w-5 h-5 text-rose-500 mr-2" />
                  <span className="font-semibold text-gray-800">E-Mail</span>
                </div>
                <p className="text-gray-700">maria@kreative-welten.de</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <Phone className="w-5 h-5 text-purple-500 mr-2" />
                  <span className="font-semibold text-gray-800">Telefon</span>
                </div>
                <p className="text-gray-700">+49 (0) 89 12345678</p>
              </div>
            </div>
          </section>

          {/* Umsatzsteuer */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Umsatzsteuer</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700">
                <strong>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</strong><br />
                DE123456789
              </p>
            </div>
          </section>

          {/* Verantwortlich für Inhalte */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-xl">
              <p className="text-gray-700">
                Maria Schneider<br />
                Kreativstraße 123<br />
                80333 München<br />
                Deutschland
              </p>
            </div>
          </section>

          {/* Haftungsausschluss */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Haftungsausschluss</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Haftung für Inhalte</h3>
                <p className="text-gray-600 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                  rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Haftung für Links</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                  der Seiten verantwortlich.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Urheberrecht</h3>
                <p className="text-gray-600 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </section>

          {/* Datenschutz Hinweis */}
          <section className="border-t border-gray-200 pt-8">
            <div className="bg-gradient-to-r from-purple-100 to-rose-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">Datenschutz</h3>
              </div>
              <p className="text-gray-700">
                Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten finden 
                Sie in unserer <a href="/datenschutz" className="text-purple-600 hover:text-purple-700 underline">Datenschutzerklärung</a>.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Letzte Aktualisierung: Januar 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;