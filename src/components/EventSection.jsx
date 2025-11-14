import React, { useState } from 'react';

const PAST_EVENTS = [
  {
    id: 1,
    title: 'PyDelhi Meetup - AI & ML Workshop',
    date: 'October 28, 2025',
    location: '📍 Delhi Tech Hub',
    attendees: 245,
    image: '🤖',
    description: 'Explore latest AI and Machine Learning frameworks with hands-on coding sessions.'
  },
  {
    id: 2,
    title: 'Python Web Development Bootcamp',
    date: 'September 15, 2025',
    location: '📍 Gurgaon Convention Center',
    attendees: 189,
    image: '🌐',
    description: 'Master Django, FastAPI, and modern web development practices.'
  },
  {
    id: 3,
    title: 'Data Science Hackathon',
    date: 'August 20, 2025',
    location: '📍 NVIDIA India Office',
    attendees: 312,
    image: '📊',
    description: '24-hour coding challenge with amazing prizes and networking opportunities.'
  },
  {
    id: 4,
    title: 'Python Basics for Beginners',
    date: 'July 10, 2025',
    location: '📍 IIT Delhi',
    attendees: 156,
    image: '🐍',
    description: 'Introduction to Python programming for complete beginners.'
  },
];

const UPCOMING_EVENTS = [
  {
    id: 5,
    title: 'FastAPI & Async Python Advanced Workshop',
    date: 'December 5, 2025',
    location: '📍 Delhi Tech Hub',
    attendees: 0,
    image: '⚡',
    description: 'Deep dive into async programming with FastAPI and build scalable APIs.',
    registrationLink: '#register'
  },
  {
    id: 6,
    title: 'PyDelhi Annual Conference 2025',
    date: 'December 20-21, 2025',
    location: '📍 New Delhi Convention Center',
    attendees: 0,
    image: '🎉',
    description: 'Two-day conference with keynote speakers, workshops, and networking events.',
    registrationLink: '#register'
  },
  {
    id: 7,
    title: 'Django Performance Optimization',
    date: 'January 10, 2026',
    location: '📍 Noida Tech Park',
    attendees: 0,
    image: '🚀',
    description: 'Learn optimization techniques to build lightning-fast Django applications.',
    registrationLink: '#register'
  },
  {
    id: 8,
    title: 'Python for Cloud Computing',
    date: 'January 25, 2026',
    location: '📍 Online',
    attendees: 0,
    image: '☁️',
    description: 'AWS, GCP, and Azure integration with Python applications.',
    registrationLink: '#register'
  },
];

export default function EventSection() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const events = activeTab === 'upcoming' ? UPCOMING_EVENTS : PAST_EVENTS;

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="badge mb-4">📅 Community Events</span>
          <h2 className="text-gradient text-4xl md:text-5xl font-bold mb-4">
            PyDelhi Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our vibrant community for workshops, conferences, and networking sessions
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-8 py-3 rounded-lg font-bold transition-all ${
              activeTab === 'upcoming'
                ? 'bg-gradient-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📌 Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-8 py-3 rounded-lg font-bold transition-all ${
              activeTab === 'past'
                ? 'bg-gradient-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            ✅ Past Events
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <div
              key={event.id}
              className="card group h-full hover:shadow-xl transition-all"
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.33, 0.66, 0.66, 1) both`,
                animationDelay: `${idx * 100}ms`,
                opacity: 0,
              }}
            >
              {/* Event Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-primary/10 flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {event.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{event.date}</p>
                </div>
              </div>

              {/* Event Details */}
              <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                {event.description}
              </p>

              {/* Event Info */}
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                <span>{event.location}</span>
                {activeTab === 'past' && (
                  <span className="badge badge-light text-xs">
                    👥 {event.attendees} attended
                  </span>
                )}
              </div>

              {/* Action Button */}
              <button
                className={`w-full py-2 rounded-lg font-semibold transition-all ${
                  activeTab === 'upcoming'
                    ? 'bg-gradient-primary text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {activeTab === 'upcoming' ? '✨ Register Now' : '📸 View Photos'}
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-12 text-center border-2 border-primary/20">
          <h3 className="text-2xl font-bold mb-3">Never Miss an Event</h3>
          <p className="text-lg text-gray-600 mb-6">
            Subscribe to our newsletter and stay updated with all upcoming PyDelhi events
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="px-8 py-3 rounded-lg bg-gradient-primary text-white font-bold hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
