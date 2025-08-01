import React from "react";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Palette, ArrowRight, Star } from "lucide-react";

const Home = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/40 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-teal-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-10 w-28 h-28 bg-pink-200/40 rounded-full blur-lg animate-bounce delay-500"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8 animate-fade-in">
            {/* Title with Gradient */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-rose-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Kreativ
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                mit Herz
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Entdecke die zauberhafte Welt des Handwerks, wo jede Idee zu Leben erwacht 
              und aus einfachen Materialien kleine Kunstwerke entstehen.
            </p>

            {/* Decorative Elements */}
            <div className="flex items-center justify-center space-x-4 py-4">
              <Sparkles className="w-6 h-6 text-rose-400 animate-pulse" />
              <Heart className="w-8 h-8 text-purple-400 animate-bounce" />
              <Palette className="w-6 h-6 text-teal-400 animate-pulse delay-500" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Link
                to="/gallery"
                className="group px-8 py-4 bg-gradient-to-r from-rose-300 to-purple-300 hover:from-rose-400 hover:to-purple-400 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Galerie entdecken</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                to="/ueber-mich"
                className="px-8 py-4 border-2 border-purple-300 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transform hover:scale-105 transition-all duration-300"
              >
                Über mich erfahren
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Was macht meine Arbeiten besonders?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Jedes Stück erzählt eine Geschichte und wird mit viel Liebe zum Detail erschaffen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Mit Herz gemacht",
                description: "Jedes Projekt entsteht mit Leidenschaft und persönlicher Note",
                color: "rose"
              },
              {
                icon: Sparkles,
                title: "Einzigartige Designs",
                description: "Individuelle Kreationen, die es nirgendwo sonst gibt",
                color: "purple"
              },
              {
                icon: Palette,
                title: "Nachhaltig & Fair",
                description: "Verwendung umweltfreundlicher Materialien und Techniken",
                color: "teal"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 text-${feature.color}-500`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Was andere über meine Arbeit sagen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Anna Weber",
                text: "Marias Keramikarbeiten sind einfach magisch! Jede Tasse erzählt ihre eigene Geschichte.",
                rating: 5
              },
              {
                name: "Thomas Müller", 
                text: "Die Holzdekorationen haben unser Zuhause in etwas ganz Besonderes verwandelt.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-100 to-rose-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Bereit für deine eigene kreative Reise?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Lass dich inspirieren und entdecke, wie aus einfachen Materialien 
            wunderbare Kunstwerke entstehen können.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-400 to-rose-400 hover:from-purple-500 hover:to-rose-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 space-x-2"
          >
            <span>Galerie besuchen</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;