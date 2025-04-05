import React, { useState } from 'react';

const projects = [
  {
    title: "AI Startup Disrupter",
    description: "Generates disruptive AI startup ideas to replace industries.",
    link: "https://chatgpt.com/g/g-67d241239a88819195fd319fa422d375-ai-startup-disruptor",
    details: "This tool generates bold startup concepts based on GPT analysis of current industries and trends. Great for entrepreneurs and venture scouts."
  }
];

export default function Home() {
  const [visiblePreview, setVisiblePreview] = useState(null);
  return (
    <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.75rem', fontWeight: 'bold', marginBottom: '2.5rem', textAlign: 'center', color: '#166534' }}>
        ✨ My AI Projects
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ borderRadius: '1rem', background: '#ffffff', padding: '1.5rem', border: '1px solid #bbf7d0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#14532d' }}>{project.title}</h2>
            <p style={{ color: '#166534' }}>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#16a34a', color: '#fff', borderRadius: '0.375rem' }}>
              View Project
            </a>
            <button
              onClick={() => setVisiblePreview(visiblePreview === index ? null : index)}
              style={{ marginLeft: '1rem', padding: '0.5rem 1rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: '0.375rem', border: 'none', fontWeight: '600', cursor: 'pointer' }}
            >
              {visiblePreview === index ? 'Hide Details' : 'Show Details'}
            </button>
            <div style={{
              overflow: 'hidden',
              maxHeight: visiblePreview === index ? '200px' : '0px',
              opacity: visiblePreview === index ? 1 : 0,
              transition: 'all 0.4s ease',
              marginTop: visiblePreview === index ? '1rem' : '0px',
              color: '#065f46',
              fontSize: '0.95rem'
            }}>
              <p>{project.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

