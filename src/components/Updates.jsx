import React from 'react';

const SAMPLE_UPDATES = [
  {id:1, title: 'Planning Survey', desc: 'Help shape upcoming meetups by sharing what topics you want.', status: 'Open'},
  {id:2, title: 'Community Voting', desc: 'Vote for talks and workshops you want to see at the next event.', status: 'Closed'},
  {id:3, title: 'Call For Reviewers', desc: 'We need reviewers to help curate submissions for the mini-conference.', status: 'Open'}
];

export default function Updates(){
  return (
    <section className="max-w-6xl mx-auto px-4">
      <h3 className="text-2xl font-bold text-center">Updates</h3>
      <p className="text-center text-sm text-[var(--muted)] mt-2">Latest community news and calls</p>

      <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        {SAMPLE_UPDATES.map(u=> (
          <article key={u.id} className="rounded-xl bg-white shadow-sm update-card overflow-hidden enter-up">
            <div className="update-media">
              {/* placeholder artwork */}
              <svg width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect width="64" height="40" rx="6" fill="#fff"/>
                <path d="M6 30h52" stroke="#3776AB" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="14" cy="16" r="6" fill="#FFD43B" opacity="0.9"/>
              </svg>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-semibold">{u.title}</h4>
                <span className={`text-xs px-2 py-1 rounded ${u.status==='Open' ? 'bg-[var(--accent)]/10 text-[var(--accent)]' : 'bg-gray-100 text-gray-600'}`}>{u.status}</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">{u.desc}</p>
              <div className="mt-4 flex justify-between items-center">
                <button className="px-3 py-2 rounded bg-[var(--accent)] text-white text-sm soft-shadow">Learn more</button>
                <div className="text-xs text-[var(--muted)]">{u.status==='Open' ? 'Open' : 'Closed'}</div>
              </div>
            </div>
            <div className="p-3 border-t text-right bg-white/50">
              <small className="text-xs text-[var(--muted)]">Updated 3 days ago</small>
            </div>
          </article>
          
        ))}
      </div>
      <br />
      <br />
      <br />

    </section>

  );
}
