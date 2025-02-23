import React from "react";
import { Divider } from "antd";
import { FacebookOutlined, TwitterOutlined, YoutubeOutlined, InstagramOutlined } from "@ant-design/icons";
import "../css/Footer.css";

const footer = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <marquee behavior="scroll" direction="left" scrollamount="6" className='bg-gray-200'>
  🌍 Global News: World leaders meet for climate summit | 📉 Stock Market: Tech shares plunge amid economic uncertainty | ⚽ Sports: Barcelona secures victory in Champions League match | 🏆 Entertainment: Oscars 2025 nominations announced | 💡 Tech: Apple unveils new AI-powered MacBook lineup.
</marquee>

    <div className="flex items-center justify-center space-x-6 text-gray-700 text-lg font-medium">
      <div className="flex items-center space-x-2">
        <FacebookOutlined className="text-blue-600 text-2xl" />
        <span>Facebook</span>
      </div>
      <div className="flex items-center space-x-2">
        <TwitterOutlined className="text-blue-400 text-2xl" />
        <span>Twitter</span>
      </div>
      <div className="flex items-center space-x-2">
        <YoutubeOutlined className="text-red-600 text-2xl" />
        <span>YouTube</span>
      </div>
      <div className="flex items-center space-x-2">
        <InstagramOutlined className="text-pink-600 text-2xl" />
        <span>Instagram</span>
      </div>
    </div>
  </div>
  );
};

export default footer;
