import React from 'react';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Raj Kumar',
    role: 'Community Lead',
    expertise: 'Data Science & ML',
    bio: 'Leading PyDelhi with passion for building the Python ecosystem in India.',
    image: '👨‍💼',
  },
  {
    id: 2,
    name: 'Priya Singh',
    role: 'Event Coordinator',
    expertise: 'Workshop Design',
    bio: 'Organizing incredible learning experiences for our community members.',
    image: '👩‍💼',
  },
  {
    id: 3,
    name: 'Arun Patel',
    role: 'Tech Lead',
    expertise: 'Backend Development',
    bio: 'Guiding technical initiatives and mentoring junior developers.',
    image: '👨‍💻',
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Content Creator',
    expertise: 'AI/ML Content',
    bio: 'Creating engaging educational content for the community.',
    image: '👩‍💻',
  },
  {
    id: 5,
    name: 'Vikram Sharma',
    role: 'DevOps Expert',
    expertise: 'Infrastructure',
    bio: 'Ensuring scalability and reliability of our platforms.',
    image: '🧑‍🔧',
  },
  {
    id: 6,
    name: 'Sneha Verma',
    role: 'Community Manager',
    expertise: 'Community Building',
    bio: 'Nurturing connections and fostering collaboration.',
    image: '👩‍🎓',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="badge mb-4">👥 The Leaders</span>
          <h2 className="text-gradient text-4xl md:text-5xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dedicated volunteers making Python learning accessible to everyone in India
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={member.id}
              className="card group text-center"
              style={{
                animation: `fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
                animationDelay: `${idx * 100}ms`,
                opacity: 0,
              }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                {member.image}
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold mb-1 group-hover:text-gradient transition-all">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm font-semibold text-primary mb-1">
                {member.role}
              </p>

              {/* Expertise */}
              <span className="inline-block badge badge-light text-xs mb-3">
                {member.expertise}
              </span>

              {/* Bio */}
              <p className="text-sm text-gray-600 mb-4">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a href="#" className="btn btn-icon" title="GitHub">
                  🐙
                </a>
                <a href="#" className="btn btn-icon" title="Twitter">
                  𝕏
                </a>
                <a href="#" className="btn btn-icon" title="LinkedIn">
                  💼
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Want to join our amazing team?</p>
          <a href="#" className="pill">
            <span>🤝</span>
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
