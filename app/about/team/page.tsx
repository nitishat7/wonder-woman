// app/about/team/team.tsx
import React from 'react';

const ceo = {
  image: "/images/team/img1.png",
  name: "Megha Timalsina",
  title: "Founder and 1st Charter President",
  description: "The Visionary Behind Wonder Woman Megha is the driving force and visionary behind our community-driven initiative, Wonder Woman. With a passion for empowering women and making a positive impact, she founded this movement to unite like-minded women dedicated to serving those in need. Her vision is to create a space where women from all walks of life can come together, lead, and make a difference without any personal gain. Through her unwavering dedication and leadership, Megha has inspired countless others to rise, serve, and contribute to the well-being of the community",
};

const teamMembers = [
  // {
  //   image: "/images/team/img2.png",
  //   name: "Liam Harper",
  //   title: "Editor-in-Chief",
  //   description: "Liam leads our editorial team with a passion for tech and storytelling.",
  // },
  {
    image: "/images/team/img3.png",
    name: "Sulena Shrestha",
    title: "President (2024-2025)",
    description: "Sulena is a very dedicated and cheerful member of the club.",
  },
  {
    image: "/images/team/img4.png",
    name: "Saradha Sharma Timalsina",
    title: "President (2025-Present)",
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
    title: "Ava Greene", 
    description: "",
  },
  {
    image: "/images/team/img7.png",
    name: "Ava Greene",
    title: "Ava Greene", 
    description: "",
  },
  {
    image: "/images/team/img7.png",
    name: "Ava Greene",
    title: "Ava Greene", 
    description: "",
  },
  {
    image: "/images/team/img7.png",
    name: "Ava Greene",
    title: "Ava Greene", 
    description: "",
  },
  {
    image: "/images/team/img7.png",
    name: "Ava Greene",
    title: "Ava Greene", 
    description: "",
  },
  {
    image: "/images/team/img7.png",
    name: "Ava Greene",
    title: "Ava Greene", 
    description: "",
  },
  {
    image: "/images/team/img7.png",
    name: "Ava Greene",
    title: "Ava Greene", 
    description: "",
  },
  {
    image: "/images/team/img7.png",
    name: "Ava Greene",
    title: "Ava Greene", 
    description: "",
  },
  {
    image: "/images/team/img7.png",
    name: "Ava Greene",
    title: "Ava Greene", 
    description: "",
  },
  {
    image: "/images/team/img7.png",
    name: "Ava Greene",
    title: "Ava Greene", 
    description: "",
  },
  {
    image: "/images/team/img7.png",
    name: "Ava Greene",
    title: "Ava Greene", 
    description: "",
  },
  {
    image: "/images/team/img7.png",
    name: "Ava Greene",
    title: "Ava Greene", 
    description: "",
  },
  {
    image: "/images/team/img7.png",
    name: "Ava Greene",
    title: "Ava Greene", 
    description: "",
  },
  {
    image: "/images/team/img7.png",
    name: "Ava Greene",
    title: "Ava Greene", 
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
        Our strength lies in the diversity and dedication of our incredible members. Each woman brings her unique skills, passion, and vision to our cause. Together, we are a force for positive change in our community. Meet the team members.
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
