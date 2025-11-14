import React, {useRef} from 'react';

export default function Tutorial(){
  const codeRef = useRef();
  const outputRef = useRef();

  function doCopy(){
    const text = codeRef.current.innerText.trim();
    navigator.clipboard?.writeText(text);
  }
  function runSim(){
    const text = codeRef.current.innerText;
    const m = text.match(/print\\((.*)\\)/);
    if(m){
      let out = m[1].trim().replace(/^["']|["']$/g,'');
      outputRef.current.innerText = out;
    } else {
      outputRef.current.innerText = 'No visible output (simulated).';
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 mt-12 grid md:grid-cols-2 gap-8">
      <div className="enter-up">
        <h3 className="text-2xl font-bold gradient-text">Python in 60 Seconds</h3>
        <pre ref={codeRef} className="mt-4 p-5 bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 rounded-lg border border-slate-700 shadow-lg overflow-x-auto">def greet(name):
    return f"Hello, {name}!"

print(greet("PyDelhi"))</pre>
        <div className="mt-4 flex gap-3">
          <button onClick={runSim} className="pill-cta bg-[var(--accent)] text-white soft-shadow">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="w-5 h-5">
              <path d="M8 5v14l11-7z" fill="#fff"/>
            </svg>
            Run
          </button>
          <button onClick={doCopy} className="pill-cta secondary">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="w-5 h-5">
              <rect x="3" y="3" width="13" height="13" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 8h12v12H8z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            Copy
          </button>
        </div>
        <div ref={outputRef} className="mt-4 p-4 bg-gradient-to-br from-[var(--peach)]/30 to-[var(--lavender)]/30 rounded-lg text-sm text-gray-700 border border-[var(--accent)]/10">Console output will appear here.</div>
      </div>

      <aside className="p-6 glass rounded-lg enter-up" style={{animationDelay: '100ms'}}>
        <h4 className="text-lg font-bold gradient-text">Why Python?</h4>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          Python is elegant, readable, and powerful. It's the language of choice for data science, AI/ML, web development, automation, and so much more. Join us to explore the possibilities!
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-medium">Beginner-friendly</span>
          <span className="px-3 py-1 rounded-full bg-[var(--accent2)]/10 text-[var(--accent)] text-xs font-medium">Versatile</span>
          <span className="px-3 py-1 rounded-full bg-[var(--accent)]/5 text-[var(--muted)] text-xs font-medium">Community-driven</span>
        </div>
      </aside>
    </section>
  );
}
