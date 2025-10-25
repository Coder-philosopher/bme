"use client";

import { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X, ZoomIn } from "lucide-react";

const Gallery = () => {
  const { data: galleryData, isLoading } = useQuery({
    queryKey: ["/api/department-data/gallery"],
  });

  const gallery = galleryData?.data;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories =
    gallery?.categories || [
      "All",
      "Laboratory",
      "Events",
      "Facilities",
      "Research",
      "Achievements",
    ];

  const filteredImages =
    selectedCategory === "All"
      ? gallery?.images || []
      : gallery?.images?.filter(
          (image: any) => image.category === selectedCategory
        ) || [];

  const ImageModal = ({ image, index }: { image: any; index: number }) => (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="relative group cursor-pointer overflow-hidden border-2 border-gray-400"
          data-testid={`image-trigger-${index}`}
        >
          <Image
            src={image.url}
            alt={image.caption}
            width={800}
            height={600}
            className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-75"
            data-testid={`image-thumbnail-${index}`}
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center">
            <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-90 p-3 border-t-2 border-white">
            <p
              className="text-white text-sm font-semibold uppercase tracking-wide"
              data-testid={`image-caption-preview-${index}`}
            >
              {image.caption}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent
        className="max-w-4xl p-0 border-4 border-gray-400"
        data-testid={`modal-image-${index}`}
      >
        <div className="relative">
          <Image
            src={image.url}
            alt={image.caption}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[80vh] object-contain border-b-4 border-gray-400"
            data-testid={`image-full-${index}`}
          />
          <div className="p-6 bg-gray-50">
            <h3
              className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide pb-2 border-b-2 border-blue-900"
              data-testid={`modal-image-caption-${index}`}
            >
              {image.caption}
            </h3>
            <div className="flex items-center space-x-2">
              <span
                className="px-3 py-1 border-2 border-gray-400 bg-white text-gray-900 text-xs font-bold uppercase tracking-wide"
                data-testid={`modal-image-category-${index}`}
              >
                {image.category}
              </span>
              {image.year && (
                <span
                  className="px-3 py-1 bg-blue-900 text-white text-xs font-bold uppercase tracking-wide"
                  data-testid={`modal-image-year-${index}`}
                >
                  {image.year}
                </span>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  if (isLoading) {
    return (
      <div
        className="min-h-screen pt-20"
        data-testid="page-gallery-loading"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 mb-6 border-2 border-gray-300"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 border-2 border-gray-300"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" data-testid="page-gallery">
      {/* Hero Section - Academic */}
      <section className="bg-blue-900 border-b-4 border-gray-800" data-testid="section-gallery-hero">
        <div className="max-w-7xl mx-auto px-6 text-center py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide" data-testid="heading-gallery-title">
            Gallery
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200" data-testid="text-gallery-subtitle">
            Explore our department through images of our facilities, events, and achievements
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-gray-50 sticky top-20 z-40 border-b-2 border-gray-300" data-testid="section-gallery-filters">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`font-bold uppercase tracking-wide text-sm ${
                  selectedCategory === category 
                    ? "bg-blue-900 hover:bg-blue-800 text-white border-2 border-blue-900" 
                    : "border-2 border-gray-400 text-gray-800 hover:bg-gray-100"
                }`}
                data-testid={`filter-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white border-b-2 border-gray-300" data-testid="section-gallery-grid">
        <div className="max-w-7xl mx-auto px-6">
          {filteredImages.length === 0 ? (
            <div className="text-center py-16 border-2 border-gray-300 bg-gray-50" data-testid="empty-gallery">
              <div className="p-8">
                <ZoomIn className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">No Images Found</h3>
                <p className="text-gray-700">No images found for the selected category.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-12 pb-6 border-b-2 border-gray-400">
                <h2 className="text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide" data-testid="heading-gallery-section">
                  {selectedCategory === "All" ? "All Images" : selectedCategory}
                </h2>
                <div className="w-24 h-1 bg-blue-900 mx-auto mb-4"></div>
                <p className="text-gray-800 font-semibold" data-testid="text-gallery-count">
                  {filteredImages.length} {filteredImages.length === 1 ? "image" : "images"} found
                </p>
              </div>
              
              {/* Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image, index) => (
                  <div 
                    key={index}
                    className="overflow-hidden border-2 border-gray-400 bg-gray-50 hover:shadow-lg hover:border-blue-900 transition-all duration-300"
                    data-testid={`card-image-${index}`}
                  >
                    <ImageModal image={image} index={index} />
                    <div className="p-4 bg-white border-t-2 border-gray-300">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-1 border border-gray-400 bg-gray-50 text-xs font-bold uppercase tracking-wide text-gray-900" data-testid={`badge-image-category-${index}`}>
                          {image.category}
                        </span>
                        {image.year && (
                          <span className="px-2 py-1 bg-blue-900 text-white text-xs font-bold uppercase tracking-wide" data-testid={`badge-image-year-${index}`}>
                            {image.year}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Gallery Statistics */}
      <section className="py-20 bg-gray-50 border-b-2 border-gray-300" data-testid="section-gallery-stats">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 pb-6 border-b-2 border-gray-400">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide" data-testid="heading-gallery-stats">
              Gallery Statistics
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700" data-testid="text-gallery-stats-subtitle">
              Our visual documentation across different categories
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {categories.filter(cat => cat !== "All").map((category, index) => {
              const categoryCount = gallery?.images?.filter(img => img.category === category).length || 0;
              return (
                <div 
                  key={category}
                  className="p-6 text-center border-2 border-gray-400 bg-white hover:shadow-lg hover:border-blue-900 transition-all duration-300"
                  data-testid={`card-stat-${category.toLowerCase()}`}
                >
                  <div className="bg-blue-900 p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">{category}</h3>
                  <div className="text-2xl font-bold text-blue-900" data-testid={`stat-count-${category.toLowerCase()}`}>
                    {categoryCount}
                  </div>
                  <p className="text-gray-700 text-xs font-semibold uppercase tracking-wide">Images</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upload Guidelines */}
      <section className="py-20 bg-white" data-testid="section-upload-guidelines">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-10 border-2 border-gray-400 bg-gray-50" data-testid="card-upload-guidelines">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-3 uppercase tracking-wide pb-3 border-b-2 border-blue-900" data-testid="heading-upload-guidelines">
                Contribute to Our Gallery
              </h2>
              <p className="text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="text-upload-description">
                Help us document the life and activities of our department. Faculty, staff, and students 
                can contribute high-quality images of events, research activities, and achievements.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-8">
                <div className="bg-white p-4 border-2 border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-sm pb-2 border-b border-gray-300">Image Quality</h4>
                  <p className="text-gray-800 text-sm">High resolution (min 1920x1080)</p>
                </div>
                
                <div className="bg-white p-4 border-2 border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-sm pb-2 border-b border-gray-300">File Format</h4>
                  <p className="text-gray-800 text-sm">JPEG, PNG, or WEBP</p>
                </div>
                
                <div className="bg-white p-4 border-2 border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-sm pb-2 border-b border-gray-300">Content</h4>
                  <p className="text-gray-800 text-sm">Department-related activities only</p>
                </div>
                
                <div className="bg-white p-4 border-2 border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-sm pb-2 border-b border-gray-300">Privacy</h4>
                  <p className="text-gray-800 text-sm">Obtain consent for identifiable persons</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-blue-900 hover:bg-blue-800 text-white border-0 font-bold uppercase tracking-wide px-8 py-6" data-testid="button-contact-admin">
                  Contact Admin for Upload Access
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
