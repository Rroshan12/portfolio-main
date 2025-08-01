export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Roshan Poudel",
    "jobTitle": "AWS Solution Architect & Full Stack Developer",
    "description": "Leading .NET and React developer in Nepal. AWS Solution Architect certified professional specializing in cloud architecture, React development, .NET applications, and Node.js solutions.",
    "url": "https://roshanpoudel.com",
    "image": "https://roshanpoudel.com/roshan1.jpg",
    "sameAs": [
      "https://github.com/rroshan12",
      "https://www.linkedin.com/in/roshan-poudel-a84145185/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NP",
      "addressLocality": "Nepal"
    },
    "knowsAbout": [
      ".NET Development",
      "React Development", 
      "AWS Cloud Architecture",
      "Node.js Development",
      "Red Hat Technologies",
      "Cloud Infrastructure",
      "Full Stack Development",
      "DevOps Engineering"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "AWS Solution Architect Certification"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "Red Hat Certified System Administrator"
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer & Cloud Architect"
    },
    "knowsLanguage": ["English", "Nepali"],
    "nationality": "Nepali",
    "alumniOf": {
      "@type": "Organization",
      "name": "Software Development & Cloud Architecture"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 