import React from "react";
import { Divider } from "antd";
import { FacebookOutlined, TwitterOutlined, YoutubeOutlined, InstagramOutlined } from "@ant-design/icons";
import "../css/Footer.css";

const footer = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-md">
    {/* News Ticker (Marquee) */}
    <div className="overflow-hidden whitespace-nowrap">
      <marquee behavior="scroll" direction="left" scrollamount="6" className="bg-gray-200 text-gray-800 font-semibold py-2">
        🌍 Global News: World leaders meet for climate summit | 📉 Stock Market: Tech shares plunge amid economic uncertainty | ⚽ Sports: Barcelona secures victory in Champions League match | 🏆 Entertainment: Oscars 2025 nominations announced | 💡 Tech: Apple unveils new AI-powered MacBook lineup.
      </marquee>
    </div>
  
    {/* Social Media Links */}
    <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 text-gray-700 text-lg font-medium mt-3">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
        <FacebookOutlined className="text-blue-600 text-2xl" />
        <span>Facebook</span>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
        <TwitterOutlined className="text-blue-400 text-2xl" />
        <span>Twitter</span>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
        <YoutubeOutlined className="text-red-600 text-2xl" />
        <span>YouTube</span>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
        <InstagramOutlined className="text-pink-600 text-2xl" />
        <span>Instagram</span>
      </a>
    </div>
  </div>
  
  );
};

export default footer;
