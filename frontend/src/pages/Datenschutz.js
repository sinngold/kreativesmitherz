import React from "react";
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";

const Datenschutz = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-lg text-gray-600">
            Informationen zum Schutz Ihrer persönlichen Daten
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Einleitung */}
          <section>
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Datenschutz im Überblick</h2>
            </div>
            
            <div className="bg-gradient-to-r from-rose-50 to-purple-50 p-6 rounded-xl">
              <p className="text-gray-700 leading-relaxed">
                Der Schutz Ihrer persönlichen Daten ist mir wichtig. Diese Datenschutzerklärung 
                informiert Sie darüber, welche Daten bei der Nutzung dieser Website erhoben werden 
                und wofür sie verwendet werden. Diese Website wird datenschutzkonform betrieben 
                und verwendet keine externen Dienste oder Cookies.
              </p>
            </div>
          </section>

          {/* Verantwortliche Stelle */}  
          <section>
            <div className="flex items-center mb-6">
              <UserCheck className="w-6 h-6 text-rose-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Verantwortliche Stelle</h2>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700">
                <strong>Maria Schneider</strong><br />
                Kreativstraße 123<br />
                80333 München<br />
                Deutschland<br />
                <br />
                E-Mail: maria@kreative-welten.de<br />
                Telefon: +49 (0) 89 12345678
              </p>
            </div>
          </section>

          {/* Datenerhebung */}
          <section>
            <div className="flex items-center mb-6">
              <Database className="w-6 h-6 text-teal-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Welche Daten erfassen wir?</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-3">Server-Log-Dateien</h3>
                <p className="text-gray-700 mb-3">
                  Bei jedem Aufruf dieser Website werden automatisch folgende Informationen gespeichert:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>IP-Adresse des zugreifenden Rechners</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                  <li>Verwendeter Browser und Betriebssystem</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Diese Daten werden ausschließlich zur Gewährleistung eines störungsfreien Betriebs 
                  der Website verwendet und nach 30 Tagen automatisch gelöscht.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-3">Kontaktformular (falls vorhanden)</h3>
                <p className="text-gray-700">
                  Wenn Sie mir über ein Kontaktformular schreiben, werden Ihre Angaben (Name, E-Mail-Adresse 
                  und Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage gespeichert und verwendet. 
                  Diese Daten werden nicht an Dritte weitergegeben.
                </p>
              </div>
            </div>
          </section>

          {/* Rechtsgrundlage */}
          <section>
            <div className="flex items-center mb-6">
              <FileText className="w-6 h-6 text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Rechtsgrundlage</h2>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl">
              <p className="text-gray-700 leading-relaxed">
                Die Verarbeitung der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO 
                (berechtigtes Interesse). Unser berechtigtes Interesse besteht in der ordnungsgemäßen 
                Funktionalität unserer Website. Bei Kontaktanfragen erfolgt die Verarbeitung auf 
                Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
              </p>
            </div>
          </section>

          {/* Keine externen Dienste */}
          <section>
            <div className="flex items-center mb-6">
              <Lock className="w-6 h-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Keine externen Dienste</h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
              <p className="text-gray-700 leading-relaxed mb-4">
                Diese Website ist bewusst datenschutzfreundlich gestaltet und verzichtet auf:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Google Analytics oder andere Tracking-Dienste</li>
                <li>Social Media Plugins</li>
                <li>Externe Schriftarten (Google Fonts)</li>
                <li>Content Delivery Networks (CDNs)</li>
                <li>Cookies (außer technisch notwendigen)</li>
                <li>Werbe-Tracker oder Remarketing-Tools</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Alle verwendeten Ressourcen (Schriftarten, Bilder, Stylesheets) werden lokal gehostet.
              </p>
            </div>
          </section>

          {/* Ihre Rechte */}
          <section>
            <div className="flex items-center mb-6">
              <Eye className="w-6 h-6 text-rose-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Ihre Rechte</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Auskunft", desc: "Informationen über gespeicherte Daten" },
                { title: "Berichtigung", desc: "Korrektur unrichtiger Daten" },
                { title: "Löschung", desc: "Entfernung gespeicherter Daten" },
                { title: "Einschränkung", desc: "Begrenzung der Datenverarbeitung" },
                { title: "Übertragbarkeit", desc: "Datenübertragung in strukturiertem Format" },
                { title: "Widerspruch", desc: "Widerspruch gegen Datenverarbeitung" }
              ].map((right, index) => (
                <div key={index} className="bg-white border border-gray-200 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-800 mb-2">{right.title}</h3>
                  <p className="text-gray-600 text-sm">{right.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-rose-50 p-6 rounded-xl">
              <p className="text-gray-700">
                <strong>Widerrufsrecht:</strong> Sie können Ihre Einwilligung zur Datenverarbeitung 
                jederzeit widerrufen. Eine bereits erfolgte Datenverarbeitung bleibt davon unberührt.
              </p>
            </div>
          </section>

          {/* Datenlöschung */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Speicherdauer und Löschung</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 leading-relaxed">
                Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen 
                Zweck erforderlich ist. Server-Log-Dateien werden nach 30 Tagen automatisch gelöscht. 
                Kontaktanfragen werden nach vollständiger Bearbeitung gelöscht, spätestens nach 2 Jahren.
              </p>
            </div>
          </section>

          {/* SSL Verschlüsselung */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">SSL-Verschlüsselung</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
              <p className="text-gray-700 leading-relaxed">
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung 
                vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Übertragung 
                erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" 
                wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>
          </section>

          {/* Kontakt bei Fragen */}
          <section className="border-t border-gray-200 pt-8">
            <div className="bg-gradient-to-r from-purple-100 to-rose-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Fragen zum Datenschutz?</h3>
              <p className="text-gray-700 mb-4">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, 
                bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
              </p>
              <div className="text-gray-700">
                <strong>Maria Schneider</strong><br />
                E-Mail: maria@kreative-welten.de<br />
                Telefon: +49 (0) 89 12345678
              </div>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Stand: Januar 2025 | Diese Datenschutzerklärung wurde mit besonderer Sorgfalt erstellt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;