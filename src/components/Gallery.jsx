import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
  'https://images.unsplash.com/photo-1540575861501-7c0011e7398a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1475721027187-4024733923f0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540575861501-7c0011e7398a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1475721027187-4024733923f0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540575861501-7c0011e7398a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1475721027187-4024733923f0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540575861501-7c0011e7398a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1475721027187-4024733923f0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop'
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="section-container">
        <div className="gallery-header">
        </div>

        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="gallery-item"
            >
              <img src={src} alt={`Event photo ${index + 1}`} className="gallery-img" />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Gallery;
