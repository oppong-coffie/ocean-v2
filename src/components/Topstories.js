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
    <div className=''>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 bg-gray-200 p-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 bg-blue-200 p-2 bg-bg1 bg-cover h-64 w-full flex flex-col gap-2 justify-end">
              <p className='text-white font-bold text-3xl'>Ghanaians to endure dumsor until end of year – IES predicts</p>
              <h1 className='bg-green-400 w-12 text-center'>news</h1>
            </div>
            <div className="col-span-1">
              <a href='https://www.ghanaweb.com/GhanaHomePage/entertainment/'>
              <Card
                hoverable

                cover={<img alt="example" className='w-[100%] h-36' src={stone} />}
              >
                <h1 className='font-bold'>Where I come from, we don’t give up - Stonebwoy</h1>
                <h1 className='text-sm bg-purple-800 text-white w-24 text-center'>entertainment</h1>
              </Card>
              </a>
              
            </div>
          </div>
          <div className='grid grid-cols-3 gap-4 mt-4'>
          <a href='https://www.ghanaweb.com/GhanaHomePage/entertainment/'>
   <Card
              hoverable

              cover={<img alt="example" className='w-[100%] h-38' src={shs} />}
            >
              <h1 className='font-bold'>Deciding to review the Free SHS policy</h1>
              <h1 className='text-sm bg-red-600 text-white w-24 text-center'>opinions</h1>
            </Card>
</a>
<a href='https://www.ghanaweb.com/GhanaHomePage/entertainment/'>
  <Card
              hoverable

              cover={<img alt="example" className='w-[100%] h-42' src={naana} />}
            >
              <h1 className='font-bold'>Meet the Deputy Director-General of SSNIT Dr. Bernardette Naa Hoffman</h1>
              <h1 className='text-sm bg-yellow-500 text-white w-24 text-center'>business</h1>
            </Card>
</a> 
<a href='https://www.ghanaweb.com/GhanaHomePage/entertainment/'>
 <Card
              hoverable

              cover={<img alt="example" className='w-[100%] h-38' src={kudus} />}
            >
              <h1 className='font-bold'>Black Stars' struggles worsened after my departure – George Boateng</h1>
              <h1 className='text-sm bg-green-700 text-white w-24 text-center'>sports</h1>
            </Card>

</a>
           

          </div>
          <a href='https://www.ghanaweb.com/GhanaHomePage/television/news'>
          <img className='mt-4' src={video}/>

          </a>

        </div>

        <div className="col-span-1 mt-4">
          <div className="bg-red-500 p-4 rounded-xl shadow-md mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-96 h-20">
                <img src={toare} alt="News" className="w-full h-full object-cover" />
              </div>
              <div className="text-white font-medium leading-4">
                Anger as aid worker dies after DR Congo shooting
              </div>
            </div>
            <h1 className="mt-4 text-sm text-gray-700">BBC</h1>
          </div>

          <img className='mt-4 w-full h-[60vh]' src={ad1} />
          <img className='mt-4 w-full h-[60vh]' src={ad2} />

        </div>

      </div>
      <Divider />




    </div>

  )
}

export default Topstories
