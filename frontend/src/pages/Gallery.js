import React, { useState } from "react";
import { galleryItems, categories } from "../data/mockData";
import { Filter, Calendar, Tag, Eye } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = selectedCategory === "Alle" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Meine Galerie
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eine Sammlung meiner liebsten Handwerksprojekte - jedes Stück erzählt eine einzigartige Geschichte 
            voller Kreativität und Leidenschaft.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Filter className="w-5 h-5 text-purple-500 mr-2" />
            <span className="text-lg font-semibold text-gray-700">Kategorien</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-rose-300 to-purple-300 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-purple-50 border border-purple-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>Ansehen</span>
                    </div>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-purple-600 text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(item.date).toLocaleDateString('de-DE')}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    <span className="text-xs">{item.fileName}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No items message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="w-12 h-12 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Keine Projekte gefunden</h3>
            <p className="text-gray-500">
              In dieser Kategorie sind noch keine Projekte vorhanden.
            </p>
          </div>
        )}
      </div>

      {/* Modal for Image Details */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                  {selectedItem.category}
                </span>
                <span className="text-gray-500 text-sm">
                  {new Date(selectedItem.date).toLocaleDateString('de-DE')}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedItem.title}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {selectedItem.description}
              </p>
              
              <div className="flex items-center text-sm text-gray-500">
                <Tag className="w-4 h-4 mr-2" />
                <span>Dateiname: {selectedItem.fileName}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;