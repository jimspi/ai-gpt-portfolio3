import React, { useState } from 'react';

const projects = [
  {
    title: "AI Startup Disrupter",
    description: "Generates disruptive AI startup ideas to replace industries.",
    link: "https://chatgpt.com/g/g-67d241239a88819195fd319fa422d375-ai-startup-disruptor",
    details: "Generates bold startup concepts based on GPT analysis of current industries and trends. Great for entrepreneurs and venture scouts."
  },
  {
    title: "Ease Legalese",
    description: "Simplifies legal documents into plain language.",
    link: "https://chatgpt.com/g/g-6750d272af4c8191ace9294460026f8e-ease-legalese",
    details: "Paste dense legalese and instantly get a simplified, human-friendly summary. Great for contracts, terms, or anything lawyer-wrapped."
  },
  {
    title: "EduGuide",
    description: "A personalized educational assistant.",
    link: "https://chatgpt.com/g/g-UOSsNsS10-eduguide",
    details: "Students and parents can get custom tutoring help, study plans, or project guidance, all powered by GPT."
  },
  {
    title: "Script Converter",
    description: "Conversational AP style script formatter for clarity and accuracy.",
    link: "https://chatgpt.com/g/g-DgehhsYKw-script-converter",
    details: "Takes raw interviews and turns them into clean, conversational broadcast-ready scripts."
  },
  {
    title: "Prep Me",
    description: "Let's get you ready for that job interview.",
    link: "https://chatgpt.com/g/g-47fgwcJj3-prep-me",
    details: "Ask it anything from common questions to curveballs—this prep tool helps you ace interviews with confidence."
  },
  {
    title: "Summary",
    description: "Summarizes input with 3 pros and 3 cons.",
    link: "https://chatgpt.com/g/g-tUfFrdbX3-summary-widget",
    details: "Give it any topic, article, or argument—get a balanced list of pros and cons. Helpful for decisions and debates."
  },
  {
    title: "Bill Explainer",
    description: "Explains legislative bills in easy to understand terms.",
    link: "https://chatgpt.com/g/g-6785de19285081918478f514310756d5-bill-explainer",
    details: "Drop in legal or legislative text, and it spits out an accessible, layperson-friendly summary."
  },
  {
    title: "Math Tutor",
    description: "A friendly fourth-grade math tutor for fractions and decimals.",
    link: "https://chatgpt.com/g/g-67d6f5a4f77c819199b8c34d3bcec024-fourth-grade-math-tutor",
    details: "Designed for younger students learning fractions and decimals. Simple, visual explanations and step-by-step guidance."
  },
  {
    title: "Dreamer",
    description: "Enchanting stories and facts, instantly crafted for kids!",
    link: "https://chatgpt.com/g/g-pQTOayOrZ-dreamer",
    details: "Creates magical short stories, bedtime tales, or fun fact adventures on demand. Great for parents or classrooms."
  },
  {
    title: "Summary Suit",
    description: "Summarizes lawsuits in clear, accessible language with specific allegation details.",
    link: "https://chatgpt.com/g/g-67e43f1d653c8191ba132d8f2c2596d5-summary-suit",
    details: "Gathers legal filings and turns them into understandable summaries, including who’s suing who and why."
  }
];

export default function Home() {
  const [visiblePreview, setVisiblePreview] = useState(null);
  return (
    <div style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.75rem', fontWeight: 'bold', marginBottom: '2.5rem', textAlign: 'center', color: '#166534' }}>
        ✨ My AI Projects
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
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


