// app/about/team/team.tsx
import React from 'react';

const ceo = {
  image: "/images/team/img1.png",
  name: "Megha Timalsina",
  title: "Founder and 1st Charter President",
  description: "Ethan is the visionary behind TechBlog, driving innovation and shaping the future of tech journalism. With over 15 years of experience in the industry, he brings a wealth of knowledge and a passion for technology to our team.",
};

const teamMembers = [
  {
    image: "/images/team/img2.png",
    name: "Liam Harper",
    title: "Editor-in-Chief",
    description: "Liam leads our editorial team with a passion for tech and storytelling.",
  },
  {
    image: "/images/team/img3.png",
    name: "Olivia Bennett",
    title: "Senior Writer",
    description: "Olivia brings years of experience in tech journalism to our writing team.",
  },
  {
    image: "/images/team/img4.png",
    name: "Noah Thompson",
    title: "Tech Analyst",
    description: "Noah analyzes market trends and emerging technologies.",
  },
  {
    image: "/images/team/img5.png",
    name: "Sophia Evans",
    title: "Content Strategist",
    description: "Sophia develops content strategies to engage our audience.",
  },
  {
    image: "/images/team/img6.png",
    name: "Caleb Foster",
    title: "Product Reviewer",
    description: "Caleb provides in-depth reviews of the latest tech products.",
  },
  {
    image: "/images/team/img7.png",
    name: "Ava Greene",
    title: "Ava Greene", // The image only shows the name, not title/description. Assuming name for now.
    description: "",
  },
];

export default function Team() {
  return (
    <div style={{ maxWidth: '960px', margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
      {/* CEO Section */}
      <div style={{ marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src={ceo.image}
          alt={ceo.name}
          style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '20px' }}
        />
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }}>{ceo.name}</h3>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>{ceo.title}</p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>{ceo.description}</p>
      </div>

      {/* Meet Our Team Section */}
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '15px' }}>Meet Our Team</h2>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
          Get to know the talented individuals behind our blog. Our team of experts and enthusiasts are dedicated to bringing you the latest insights and trends in technology.
        </p>
      </div>

      {/* Team Members Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '40px 20px',
        justifyItems: 'center',
      }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img
              src={member.image}
              alt={member.name}
              style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }}
            />
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{member.name}</h4>
            {member.title && (
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.4' }}>{member.title}</p>
            )}
            {member.description && (
              <p style={{ fontSize: '14px', color: '#777', lineHeight: '1.4', marginTop: '5px' }}>{member.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
