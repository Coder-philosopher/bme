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
          className="relative group cursor-pointer overflow-hidden rounded-lg"
          data-testid={`image-trigger-${index}`}
        >
          <Image
            src={image.url}
            alt={image.caption}
            width={800}
            height={600}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            data-testid={`image-thumbnail-${index}`}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
            <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p
              className="text-white text-sm"
              data-testid={`image-caption-preview-${index}`}
            >
              {image.caption}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent
        className="max-w-4xl p-0"
        data-testid={`modal-image-${index}`}
      >
        <div className="relative">
          <Image
            src={image.url}
            alt={image.caption}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[80vh] object-contain"
            data-testid={`image-full-${index}`}
          />
          <div className="p-6">
            <h3
              className="text-xl font-semibold text-gray-900 mb-2"
              data-testid={`modal-image-caption-${index}`}
            >
              {image.caption}
            </h3>
            <div className="flex items-center space-x-2">
              <Badge
                variant="outline"
                data-testid={`modal-image-category-${index}`}
              >
                {image.category}
              </Badge>
              {image.year && (
                <Badge
                  variant="secondary"
                  data-testid={`modal-image-year-${index}`}
                >
                  {image.year}
                </Badge>
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
            <div className="h-12 bg-gray-200 rounded mb-6"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20" data-testid="page-gallery">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-teal to-primary-blue text-white" data-testid="section-gallery-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6" data-testid="heading-gallery-title">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" data-testid="text-gallery-subtitle">
            Explore our department through images of our facilities, events, and achievements
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm" data-testid="section-gallery-filters">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary-teal hover:bg-teal-700" : ""}
                data-testid={`filter-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20" data-testid="section-gallery-grid">
        <div className="max-w-7xl mx-auto px-6">
          {filteredImages.length === 0 ? (
            <div className="text-center py-12" data-testid="empty-gallery">
              <div className="bg-gray-100 p-8 rounded-lg">
                <ZoomIn className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Images Found</h3>
                <p className="text-gray-500">No images found for the selected category.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-gallery-section">
                  {selectedCategory === "All" ? "All Images" : selectedCategory}
                </h2>
                <p className="text-gray-600" data-testid="text-gallery-count">
                  {filteredImages.length} {filteredImages.length === 1 ? "image" : "images"} found
                </p>
              </div>
              
              {/* Masonry Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image, index) => (
                  <Card 
                    key={index}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    data-testid={`card-image-${index}`}
                  >
                    <ImageModal image={image} index={index} />
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs" data-testid={`badge-image-category-${index}`}>
                          {image.category}
                        </Badge>
                        {image.year && (
                          <Badge variant="secondary" className="text-xs" data-testid={`badge-image-year-${index}`}>
                            {image.year}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Gallery Statistics */}
      <section className="py-20 bg-gray-50" data-testid="section-gallery-stats">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4" data-testid="heading-gallery-stats">
              Gallery Statistics
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-gallery-stats-subtitle">
              Our visual documentation across different categories
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {categories.filter(cat => cat !== "All").map((category, index) => {
              const categoryCount = gallery?.images?.filter(img => img.category === category).length || 0;
              return (
                <Card 
                  key={category}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  data-testid={`card-stat-${category.toLowerCase()}`}
                >
                  <div className="bg-primary-teal p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
                  <div className="text-2xl font-bold text-primary-teal" data-testid={`stat-count-${category.toLowerCase()}`}>
                    {categoryCount}
                  </div>
                  <p className="text-gray-600 text-sm">Images</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upload Guidelines */}
      <section className="py-20" data-testid="section-upload-guidelines">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="p-8 bg-gradient-to-br from-primary-teal/10 to-primary-blue/10 border-primary-teal" data-testid="card-upload-guidelines">
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6" data-testid="heading-upload-guidelines">
                Contribute to Our Gallery
              </h2>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto" data-testid="text-upload-description">
                Help us document the life and activities of our department. Faculty, staff, and students 
                can contribute high-quality images of events, research activities, and achievements.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Image Quality</h4>
                  <p className="text-gray-600 text-sm">High resolution (min 1920x1080)</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">File Format</h4>
                  <p className="text-gray-600 text-sm">JPEG, PNG, or WEBP</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Content</h4>
                  <p className="text-gray-600 text-sm">Department-related activities only</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Privacy</h4>
                  <p className="text-gray-600 text-sm">Obtain consent for identifiable persons</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-primary-teal hover:bg-teal-700 text-white" data-testid="button-contact-admin">
                  Contact Admin for Upload Access
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
