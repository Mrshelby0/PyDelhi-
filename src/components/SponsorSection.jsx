import React from 'react';

const SPONSORS = [
  { id: 1, name: 'TechCorp', logo: '💼' },
  { id: 2, name: 'CloudSoft', logo: '☁️' },
  { id: 3, name: 'DataStream', logo: '📊' },
  { id: 4, name: 'WebFlow', logo: '🌐' },
  { id: 5, name: 'PyTools', logo: '🛠️' },
  { id: 6, name: 'DevHub', logo: '👨‍💻' },
];

export default function SponsorSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="badge mb-4">💎 Partners</span>
          <h2 className="text-gradient text-4xl md:text-5xl font-bold mb-4">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Supporting the PyDelhi community and making events possible
          </p>
        </div>

        {/* Sponsor Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 p-8">
            <div className="flex gap-8 carousel-scroll">
              {/* Duplicate sponsors for seamless loop */}
              {[...SPONSORS, ...SPONSORS].map((sponsor, idx) => (
                <div
                  key={`${sponsor.id}-${idx}`}
                  className="flex-shrink-0 w-40 h-32 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all p-4"
                >
                  <div className="text-5xl">{sponsor.logo}</div>
                  <span className="text-sm font-semibold text-gray-700 text-center">
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Sponsor Us CTA */}
        <div className="bg-gradient-primary rounded-2xl p-12 text-white text-center shadow-lg">
          <h3 className="text-2xl font-bold mb-3">Ready to Partner With Us?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join leading companies supporting Python education and innovation in India
          </p>
          <a href="#sponsor-form" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white text-primary font-bold hover:scale-105 transition-transform">
            <span>🤝</span>
            Become a Sponsor for Next Event
          </a>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="card text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h4 className="font-bold mb-2">Reach Community</h4>
            <p className="text-sm text-gray-600">
              Connect with 1000+ Python developers and tech enthusiasts
            </p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-3">📈</div>
            <h4 className="font-bold mb-2">Brand Visibility</h4>
            <p className="text-sm text-gray-600">
              Get featured on all marketing materials and social channels
            </p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-3">🌟</div>
            <h4 className="font-bold mb-2">Community Impact</h4>
            <p className="text-sm text-gray-600">
              Make a meaningful difference in Python education
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
