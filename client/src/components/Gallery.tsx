import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { useState } from "react";

const images = Object.values(
    import.meta.glob('@/assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true })
).map((mod: any) => mod.default);


export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="relative">
            {/* Fullscreen Image Overlay */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
                    <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-lg font-bold">
                        <X className="h-8 w-8" />
                    </button>
                    <img src={selectedImage} className="max-w-full max-h-full rounded-lg shadow-xl" onClick={(e) => e.stopPropagation()} />
                </div>
            )}

            {/* Masonry Grid */}
            <section className="py-20 md:py-32 bg-muted/30">
                <div className="text-center mb-16">
                    <span className="inline-block text-xl font-medium text-white mb-3 tracking-widest uppercase">
                        Gallery
                    </span>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have a look at our previous works as a testimonial to the quality we provide.
                    </p>
                </div>

                <div className="container mx-auto px-4 md:px-6">
                    <div className="columns-2 md:columns-5 gap-4 space-y-4">
                        {images.map((src, i) => (
                            <img src={src} key={i} className="w-full rounded-lg" onClick={() => setSelectedImage(src)}/>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
