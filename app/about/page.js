/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-32 py-8 text-sm">
      <h1 className="text-3xl font-semibold mb-4">About Get Me a Chai</h1>
      <p className="text-base mb-6">
        Get Me a Chai is a crowdfunding platform for creators to fund their
        projects with the support of their fans. It's a space where your fans
        can directly contribute to your creative edavours by buying you a chai.
        Unlock the potential of your fanbase and bring your ideas to life.
      </p>
      <h2 className="text-2xl font-semibold mb-4">How it works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex items-center mb-6">
          <img
            className="w-20 h-20 rounded-full mr-4"
            src="../Assets/GIFs/group.gif"
            alt="Fans want to help"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">Fans want to help</h3>
            <p>
              Your fans are enthusiastic about collaborating with you on your
              projects.
            </p>
          </div>
        </div>
        <div className="flex items-center mb-6">
          <img
            className="w-20 h-20 rounded-full mr-4"
            src="../Assets/GIFs/coin.gif"
            alt="Support through Chai"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">Support through Chai</h3>
            <p>
              Receive support from your fans in the form of chai purchases,
              directly contributing to your project funding.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Benefits for Creators</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Direct financial support from your fanbase</li>
        <li className="mb-2">Engage with your fans more closely</li>
        <li className="mb-2">Get your projects funded faster</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Benefits for Fans</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">Support your favourite creators</li>
        <li className="mb-2">Get exclusive perks and rewards</li>
        <li className="mb-2">Be a part of the creative process</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">
        Benefits for collaborators
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          Unlock new opportunities through collaboration with fellow creators
        </li>
        <li className="mb-2">Expand your network and reach a wider audience</li>
        <li className="mb-2">
          Combine skill and resources to create innovative projects
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Access to Resources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          Gain access to resources such as tutorials, templates, and tools
        </li>
        <li className="mb-2">
          Receive guidance and mentorship from experienced creators
        </li>
        <li className="mb-2">
          Stay updated to industry trends and best practices
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Recognition and Exposure</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          Showcase your work to a global audience and gain recognition
        </li>
        <li className="mb-2">Feature in promotional materials and campaigns</li>
        <li className="mb-2">
          Build your portfolio and increase your credibility as a creator
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Supportive Community</h2>
      <ul className="list-disc pl-6 mb-6">
        <li className="mb-2">
          Connect with like-minded creators and share your experiences
        </li>
        <li className="mb-2">
          Collaborate on projects and learn from each other
        </li>
        <li className="mb-2">
          Receive feedback and encouragement from the community
        </li>
      </ul>
    </div>
  );
};

export default About;
export const metadata = {
  title: "About - Get Me a Chai",
};
