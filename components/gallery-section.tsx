"use client"

import { useState } from "react"

const galleryItems = [
  { id: 1, type: "image", src: "/1-6.webp" },
  { id: 2, type: "image", src: "/11-3.webp" },
  { id: 3, type: "image", src: "/12-4.webp" },
  { id: 4, type: "image", src: "/12-5.webp" },
  { id: 5, type: "image", src: "/13-3.webp" },
  { id: 6, type: "image", src: "/14-3.webp" },
  { id: 7, type: "image", src: "/14-4.webp" },
  { id: 8, type: "image", src: "/15-2.webp" },
  { id: 9, type: "image", src: "/17-3.webp" },
  { id: 10, type: "image", src: "/18-4.webp" },
  { id: 11, type: "image", src: "/19-3.webp" },
  { id: 12, type: "image", src: "/20-3.webp" },
  { id: 13, type: "image", src: "/21-3.webp" },
  { id: 14, type: "image", src: "/23-3.webp" },
  { id: 15, type: "image", src: "/25-3.webp" },
  { id: 16, type: "image", src: "/27-3.webp" },
  { id: 17, type: "image", src: "/28-3.webp" },
  { id: 18, type: "image", src: "/33-3.webp" },
  { id: 19, type: "image", src: "/36-3.webp" },
  { id: 20, type: "image", src: "/37-3.webp" },
  { id: 21, type: "image", src: "/38-3.webp" },
  { id: 22, type: "image", src: "/4-3.webp" },
  { id: 23, type: "image", src: "/40-3.webp" },
  { id: 24, type: "image", src: "/5-3.webp" },
  { id: 25, type: "image", src: "/52-3.webp" },
  { id: 26, type: "image", src: "/54-3.webp" },
  { id: 27, type: "image", src: "/56-3.webp" },
  { id: 28, type: "image", src: "/59-3.webp" },
  { id: 29, type: "image", src: "/7-3.webp" },
  { id: 30, type: "image", src: "/8-3.webp" },
  { id: 31, type: "image", src: "/9-3.webp" },
]

export function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "image">("all")

  const filteredItems = galleryItems

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Gallery of Excellence</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "Explore our stunning collection of wedding turbans and see the artistry that makes every groom look royal"
            }
          </p>
        </div>



        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <img
                src={item.src}
                alt={`Gallery image ${item.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-mono mb-6 text-lg">
            {"Want to see more? Visit our social media for daily updates"}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/safawalaofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-full font-mono transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/people/Safawalacom/61579176513014/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-full font-mono transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
