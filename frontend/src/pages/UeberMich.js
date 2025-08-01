import React from "react";
import { aboutData } from "../data/mockData";
import { 
  Heart, 
  Award, 
  MapPin, 
  Clock, 
  Palette, 
  Sparkles,
  Star,
  CheckCircle
} from "lucide-react";

const UeberMich = () => {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Über mich
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hallo! Ich bin Maria, eine leidenschaftliche Handwerkskünstlerin aus München. 
            Hier erfährst du mehr über meine kreative Reise.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Image & Quick Info */}
          <div className="space-y-8">
            <div className="relative">
              {/* Placeholder for profile image */}
              <div className="w-full h-96 bg-gradient-to-br from-rose-200 via-purple-200 to-teal-200 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-white font-medium">Profil Foto</p>
                  <p className="text-white/80 text-sm">maria-portrait.jpg</p>
                </div>
              </div>
              
              {/* Floating Info Cards */}
              <div className="absolute -right-4 top-8 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="font-semibold text-sm">Erfahrung</p>
                    <p className="text-purple-600">{aboutData.experience}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-4 bottom-8 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-rose-500" />
                  <div>
                    <p className="font-semibold text-sm">Standort</p>
                    <p className="text-rose-600">{aboutData.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-6 rounded-xl text-center">
                <Star className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-800">100+</p>
                <p className="text-gray-600 text-sm">Projekte</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-xl text-center">
                <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-800">5</p>
                <p className="text-gray-600 text-sm">Kategorien</p>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {aboutData.name}
              </h2>
              <p className="text-xl text-purple-600 mb-6">{aboutData.title}</p>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {aboutData.bio}
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Palette className="w-6 h-6 text-purple-500 mr-2" />
                Meine Fähigkeiten
              </h3>
              <div className="space-y-3">
                {aboutData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-r from-rose-50 to-purple-50 p-12 rounded-3xl mb-16">
          <div className="text-center">
            <Sparkles className="w-12 h-12 text-purple-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Meine Philosophie</h3>
            <blockquote className="text-xl text-gray-700 italic leading-relaxed max-w-4xl mx-auto">
              "{aboutData.philosophy}"
            </blockquote>
            <p className="text-purple-600 font-semibold mt-4">— {aboutData.name}</p>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Mein kreativer Prozess
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Inspiration sammeln",
                description: "Ideen aus der Natur, dem Alltag und meinen Träumen",
                color: "rose"
              },
              {
                step: "02", 
                title: "Materialien wählen",
                description: "Nachhaltige und hochwertige Materialien für beste Qualität",
                color: "purple"
              },
              {
                step: "03",
                title: "Mit Liebe erschaffen",
                description: "Jedes Detail wird sorgfältig und mit Leidenschaft ausgearbeitet",
                color: "teal"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={`text-2xl font-bold text-${item.color}-500`}>
                    {item.step}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-purple-100 to-rose-100 p-12 rounded-3xl text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Lass uns kreativ werden!
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Du hast Fragen zu meinen Projekten oder möchtest mehr über meine Arbeitsweise erfahren? 
            Ich freue mich über jede Nachricht!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-400 to-rose-400 hover:from-purple-500 hover:to-rose-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Nachricht senden
            </button>
            <button className="px-8 py-4 border-2 border-purple-300 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transform hover:scale-105 transition-all duration-300">
              Galerie besuchen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UeberMich;