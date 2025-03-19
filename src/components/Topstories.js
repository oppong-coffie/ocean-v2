import React from 'react'
import '../css/Topstories.css'
import storyimg from '../images/storyimg.jpg'
import { Row, Col, Button, Divider, Carousel } from 'antd';
import worldcup1 from '../images/worldcup1.jpg'
import worldcup2 from '../images/worldcup2.png'
import worldcup4 from '../images/worldcup4.jpg'
import worldcup3 from '../images/worldcup3.webp'
import worldcup5 from '../images/worldcup5.webp'
import worldcup6 from '../images/worldcup6.jpg'
import worldcup7 from '../images/worldcup7.png'
import top2 from '../images/top2.jfif'
import ad1 from '../images/ad1.jpg'
import ad2 from '../images/ad2.jpg'
import video from '../images/video.png'
import top3 from '../images/top3.webp'
import top8 from '../images/top8.jpg'
import top9 from '../images/top9.jpg'
import top10 from '../images/top10.jpg'
import top11 from '../images/top11.jpg'
import top12 from '../images/top12.JPG'
import corona1 from '../images/corona1.jpg'
import corona2 from '../images/corona2.jpg'
import corona3 from '../images/corona3.jpg'
import corona4 from '../images/corona4.jpg'
import corona5 from '../images/corona5.jpg'
import corona6 from '../images/corona6.jpg'
import sp1 from '../images/sp1.jpg'
import sp2 from '../images/sp2.jpg'
import sp3 from '../images/sp3.png'
import sp4 from '../images/sp4.jpg'
import sp5 from '../images/sp5.jpg'
import sp6 from '../images/sp6.webp'
import carousel1 from '../images/caro1.jpg'
import caro2 from '../images/caro2.jpg'
import caro3 from '../images/caro3.webp'
import stone from '../images/stone.jpeg'
import shs from '../images/shs.jpg'
import naana from '../images/naana.jpg'
import kudus from '../images/kudus.webp'
import toare from '../images/taore.jpg'
import { Card } from 'antd';

const { Meta } = Card;


const Topstories = () => {

  {/*TOP STORIES*/ }
  const stories = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: top12,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: top3,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: top8,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: top9,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: top10,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: top11,
    },
  ]


  {/*WORLDCUP STORIES*/ }
  const worldcup = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: worldcup1,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: worldcup2,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: worldcup3,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: worldcup7,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: worldcup4,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: worldcup5,
    },
  ]

  {/*CORONAVIRUS STORIES*/ }
  const corona = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: corona1,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: corona2,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: corona3,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: corona4,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: corona5,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: corona6,
    },
  ]

  {/*SPORTS STORIES*/ }
  const sports = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: sp1,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: sp6,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: sp2,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: sp5,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: sp3,
    },
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus velit quasi!',
      description: '1st December 2022',
      image: sp4,
    },
  ]

  return (
<div className="p-4">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* Left Column (Main Content) */}
    <div className="md:col-span-3 bg-gray-100 p-4 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main News */}
        <div className="md:col-span-2 bg-blue-500 p-4 bg-bg1 bg-cover h-64 w-full flex flex-col gap-2 justify-end rounded-lg shadow-md">
          <p className="text-white font-bold text-2xl md:text-3xl">
            Ghanaians to endure dumsor until end of year – IES predicts
          </p>
          <span className="bg-green-600 text-white px-3 py-1 text-sm rounded-lg w-fit">
            News
          </span>
        </div>

        {/* Right Side News */}
        <div className="md:col-span-1">
          <a href="https://www.ghanaweb.com/GhanaHomePage/entertainment/">
            <Card hoverable className="rounded-lg overflow-hidden shadow-md">
              <img alt="Entertainment News" className="w-full h-40 object-cover" src={stone} />
              <div className="p-2">
                <h1 className="font-bold text-gray-800">Where I come from, we don’t give up - Stonebwoy</h1>
                <span className="text-sm bg-purple-700 text-white px-3 py-1 rounded-lg mt-2 inline-block">
                  Entertainment
                </span>
              </div>
            </Card>
          </a>
        </div>
      </div>

      {/* Additional News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {[ 
          { src: shs, title: "Deciding to review the Free SHS policy", category: "Opinions", color: "bg-red-600" },
          { src: naana, title: "Meet the Deputy Director-General of SSNIT Dr. Bernardette Naa Hoffman", category: "Business", color: "bg-yellow-500" },
          { src: kudus, title: "Black Stars' struggles worsened after my departure – George Boateng", category: "Sports", color: "bg-green-700" }
        ].map((news, index) => (
          <a key={index} href="https://www.ghanaweb.com/GhanaHomePage/entertainment/">
            <Card hoverable className="rounded-lg overflow-hidden shadow-md">
              <img alt="News" className="w-full h-40 object-cover" src={news.src} />
              <div className="p-2">
                <h1 className="font-bold text-gray-800">{news.title}</h1>
                <span className={`text-sm text-white px-3 py-1 rounded-lg mt-2 inline-block ${news.color}`}>
                  {news.category}
                </span>
              </div>
            </Card>
          </a>
        ))}
      </div>

      {/* Video Section */}
      <a href="https://www.ghanaweb.com/GhanaHomePage/television/news">
        <img className="mt-6 w-full object-cover rounded-lg shadow-md" src={video} alt="Video" />
      </a>
    </div>

    {/* Right Column (Sidebar) */}
    <div className="md:col-span-1">
      {/* Trending News */}
      <div className="bg-red-500 p-4 rounded-xl shadow-lg text-white">
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <img src={toare} alt="News" className="w-full md:w-32 h-24 object-cover rounded-lg" />
          <div className="font-medium leading-5 mt-2 md:mt-0">
            Anger as aid worker dies after DR Congo shooting
          </div>
        </div>
        <h1 className="mt-4 text-sm text-gray-300">BBC</h1>
      </div>

      {/* Advertisements */}
      {[ad1, ad2].map((ad, index) => (
        <img key={index} className="mt-6 w-full h-64 object-cover rounded-lg shadow-md" src={ad} alt={`Ad ${index + 1}`} />
      ))}
    </div>
  </div>
  <Divider className="mt-6" />
</div>



  )
}

export default Topstories
