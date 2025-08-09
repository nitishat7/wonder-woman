// components/landing-page/hero3.tsx
"use client"
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Import the Button component

const articles = [
  {
    image: "/images/hero3/img1.jpg",
    title: "The Future of Remote Work: Trends and Predictions",
    description:
      "Explore the evolving landscape of remote work, including emerging technologies and best practices for success.",
  },
  {
    image: "/images/hero3/img2.jpg",
    title: "Mastering Time Management: Strategies for Productivity",
    description:
      "Learn proven techniques to optimize your time and enhance productivity in today's fast-paced work environment.",
  },
  {
    image: "/images/hero3/img3.jpg",
    title: "Effective Communication in Virtual Teams",
    description:
      "Discover how to foster clear and effective communication within remote teams to achieve common goals.",
  },
];

export default function Hero3() {
  return (
    <div style={{ padding: "60px 20px", maxWidth: 1200, margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", textAlign: "left", margin: 0 }}>
          Blogs
        </h2>
        <Button
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg rounded-md transition-all duration-300 transform "
        size="lg"
           // Placeholder for actual navigation
        >
          More
        </Button>
      </div>
      <div style={{ display: "flex", gap: "24px", justifyContent: "space-between" }}>
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: typeof articles[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      style={{
        flex: "1",
        minWidth: "300px",
        maxWidth: "calc(33.33% - 16px)", 
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: isHovered ? "0 8px 24px rgba(0,0,0,0.15)" : "0 4px 12px rgba(0,0,0,0.05)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={article.image}
        alt={article.title}
        style={{ width: "100%", height: "225px", objectFit: "cover", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
      />
      <div style={{ padding: "20px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", lineHeight: "1.4" }}>
          {article.title}
        </h3>
        <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.5" }}>
          {article.description}
        </p>
      </div>
    </Card>
  );
}
