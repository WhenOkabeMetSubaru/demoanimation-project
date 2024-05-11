"use client"
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer'
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis, useLenis } from 'lenis/react'
import Marquee from 'react-fast-marquee'
import { PiMapPinAreaDuotone } from "react-icons/pi";
import { FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TiSocialLinkedin } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { VscBook } from "react-icons/vsc";


export default function Home ()
{

  const element = useRef(null);
  const element2 = useRef(null);
  const element3 = useRef(null)

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 1.2', 'start 0.20']
  })

  const para2 = useScroll({
    target: element2,
    offset: ['start 0.9', 'start 0.20']
  })
  const para3 = useScroll({
    target: element3,
    offset: ['start 0.9', 'start 0.20']
  })

  useEffect(() =>
  {

    scrollYProgress.on('change', () => { })
    para2.scrollYProgress.on('change');
    para3.scrollYProgress.on('change')

  }, [])



  const p1 = "As a young, passionate team we set out to build a factory that would directly benefit those who trust us.";
  const p1_filtered = p1.split(" ");

  const p2 = "Welcome to our story of innovation and dedication to quality in the manufacturing industry. With a wealth of experience, we embarked on a journey that led us to establish a state-of-the-art manufacturing facility in Cherlapally, Hyderabad. In our pursuit of excellence we have chosen to collaborate directly with various brands as third-party partners, making a strategic decision to eliminate middlemen and commissions. This enables us to pass on direct benefits to our valued customers.";
  const p2_filtered = p2.split(" ");

  const p3 = "We extend a warm invitation for you to experience our commitment to quality firsthand by visiting our factory in Cherlapally. Take the opportunity to personally inspect our ongoing projects, witness the efficiency of our machines, and gain insights into our meticulous processes and high-quality materials. We believe that touring our facility not only provides a comprehensive understanding of our operations but also offers a knowledgeable and insightful experience that reinforces our dedication to delivering exceptional products. Join us in shaping the future of manufacturing, where transparency, quality, and customer satisfaction are at the forefront of everything we do.";
  const p3_filtered = p3.split(" ");


  const variantText = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    },
    hidden: {
      opacity: 0,
      x: 200
    }
  }

  return (
    <ReactLenis root>


      <section>
        <section style={ { background: `rgba(22,22,22,0.7) url("/herobg1.webp")` } } className='w-full bg-blend-darken  relative bg-center bg-no-repeat bg-cover h-[100vh] bg-red-200'>
          <div className='p-0 md:p-16'>
            <nav className=' h-24 flex px-2 justify-between '>
              <div className='flex items-center'>
                <Image width={ 180 } height={ 10 } alt='' src={ "/trufitLogo.webp" } />
              </div>

              <ul className='lg:flex  text-white text-xl items-center gap-x-16'>
                <li className='hover:underline cursor-pointer'>Home</li>
                <li className='hover:underline cursor-pointer'>Portfolio</li>
                <li className='hover:underline cursor-pointer'>About</li>
                <li className='hover:underline cursor-pointer'>Contact</li>
              </ul>
            </nav>

            <div className='absolute leading-tight text-7xl font-sans text-white p-2 bottom-10 left-24'>
              We specialize in <strong className='font-serif'>Custom Cabinets</strong> and <strong>Modular Kitchen</strong> solutions.
            </div>
          </div>

        </section>
        <section className='w-full relative overflow-hidden duration-500  h-[70vh]'>
          {/* <p className={`text-5xl px-5 '}`}>
          
        </p> */}
          <motion.p initial={ { opacity: 0.2, x: 300, y: 125 } } viewport={ { once: false } } transition={ { duration: 0.5 } } whileInView={ { opacity: 1, x: 100, y: 100 } } className='text-5xl'>
            We`&apos;re the Manufactures –<br />
            straight from our factory to your home.
          </motion.p>

          <div className=''>
            <div className='w-full text-7xl mt-52 flex items-center h-28 overflow-hidden bg-black text-white'>
              <Marquee speed={ 150 }>

                <div className='flex first:pl-3 overflow-hidden items-center gap-x-5'>

                  <p>No Comsission</p>
                  <p className='mt-4'>*</p>
                  <p>No Middlemen</p>
                  <p className='mt-4'>*</p>
                  <p>No Hassles</p>
                  <p className='mt-4'>*</p>
                  <p>No Comsission</p>
                  <p className='mt-4'>*</p>
                  <p>No Middlemen</p>
                  <p className='mt-4'>*</p>
                  <p>No Hassles</p>
                  <p className='mt-4'>*</p>
                </div>





              </Marquee>
            </div>
          </div>
        </section>

        <section className='w-full flex p-24 overflow-hidden  h-[120vh] bg-white'>
          <div className='w-2/3'>
            {/* <motion.span aria-hidden initial={ { opacity: 0.2, x: 200 } } viewport={ { once: false } } transition={ { duration: 0.8,staggerChildren:0.5 } } whileInView={ { opacity: 1, x: 0 } } className='text-6xl flex'>
             {
                "ABOUT US"?.split("")?.map((char)=>{
                  return <motion.p initial={{opacity:0}} animate={{opacity:1}} className=''>{char}</motion.p>;
                })
             }

            </motion.span > */}
            <div className='flex'>


              <motion.span initial={ { x: 200 } } whileInView={ { x: 2 } } transition={ { duration: 0.5, staggerChildren: 1 } } className='flex text-5xl'>
                {
                  "ABOUT US"?.split("")?.map((char,i) =>
                  {
                    return <motion.span key={i} initial={ { x: 50, y: 10, opacity: 0 } } animate={ { x: 10, y: 0, opacity: 1 } } className=''>{ char }</motion.span>;
                  })
                }
              </motion.span>
            </div>
            <div className='flex text-[1.1rem] flex-col gap-y-8 my-10 pr-10'>


              <p ref={ element } className='aboutpara leading-4 flex flex-wrap'>
                {

                  p1_filtered?.map((item, i) =>
                  {

                    const start = i / p1_filtered?.length;

                    const end = start + (1 / p1_filtered?.length);

                    return <Word key={ i } range={ [start, end] } progress={ scrollYProgress }>{ item }</Word>
                  })
                }
              </p>
              <p ref={ element2 } className='aboutpara leading-4 flex flex-wrap'>
                {

                  p2_filtered?.map((item, i) =>
                  {

                    const start = i / p2_filtered?.length;

                    const end = start + (1 / p2_filtered?.length);

                    return <Word key={ i } range={ [start, end] } progress={ para2.scrollYProgress }>{ item }</Word>
                  })
                }
              </p>
              <p ref={ element3 } className='aboutpara leading-4 flex flex-wrap'>
                {

                  p3_filtered?.map((item, i) =>
                  {

                    const start = i / p3_filtered?.length;

                    const end = start + (1 / p3_filtered?.length);

                    return <Word key={ i } range={ [start, end] } progress={ para3.scrollYProgress }>{ item }</Word>
                  })
                }
              </p>

            </div>
          </div>
          <div className='1/3'>
            <Image width={ 500 } height={ 1000 } src={ "/aboutimage.webp" } />
          </div>
        </section>

        <section className='w-full overflow-hidden p-20 min-h-[100vh] border-black border-t-1.5 border-b-1.5 bg-white'>
          <motion.p initial="hidden" whileInView="visible" viewport={ { once: false } } variants={ variantText } className='text-6xl font-semibold'>We are dedicated to</motion.p>
          <motion.p initial="hidden" whileInView="visible" viewport={ { once: false } } variants={ variantText } className='text-6xl font-semibold'>Modular Interiors like</motion.p>

          <div className='flex mt-16'>
            <div className='w-1/2 my-3'>
              <ul className='flex flex-col gap-y-8'>
                <li className='text-4xl font-semibold'>MODULAR KITCHENS</li>
                <li className='text-4xl font-semibold'>WARDROBES</li>
                <li className='text-4xl font-semibold'>CABINETS & CONSOLES</li>
                <li className='text-4xl font-semibold'>TV UNITS</li>
                <li className='text-4xl font-semibold'>VANITIES</li>
              </ul>
            </div>
            <div className='w-1/2  flex justify-center items-center'>
              <div className='w-80 h-80'>
                <Image width={ 250 } height={ 200 } alt="" src="/modularsection.svg" />
              </div>
            </div>
          </div>

        </section>

        <section className='w-full relative flex min-h-[100vh]'>
          <div className='w-1/2 sticky top-[30%] p-20 flex justify-center items-center h-[40vh]'>
            <div>
              <motion.p initial="hidden" whileInView="visible" viewport={ { once: false } } variants={ variantText } className='text-6xl font-semibold'>OUR PROCESS</motion.p>
              <motion.p initial="hidden" whileInView="visible" viewport={ { once: false } } variants={ variantText } className='text-md mt-10'>We start with a detailed understanding of your needs, preferences and budget. We will take the time to listen to your ideas and vision and work with you to create a design plan that reflects your unique style and personality.</motion.p>
            </div>
          </div>
          <div style={ { height: '200%' } } className='w-1/2 p-20 py-28'>
            <div className='flex justify-center items-center h-[60vh]  sticky top-24'>
              <div className='w-full min-h-[45vh] relative p-7 rounded-3xl bg-white border border-black'>
                <motion.p initial={ { opacity: 0, x: 30 } } viewport={ { once: false } } transition={ { duration: 0.5 } } whileInView={ { opacity: 1, x: 0 } } className='text-2xl font-semibold'>Estimate</motion.p>
                <motion.p initial={ { opacity: 0, x: 30 } } viewport={ { once: false } } transition={ { duration: 0.5 } } whileInView={ { opacity: 1, x: 0 } } className='mt-28'>
                  To quicken the process, our team will produce a project estimate based on the requirements and floor layout.
                </motion.p>
                <div className='absolute right-8 top-6 w-24 h-24'>
                  <Image width={ 200 } height={ 100 } src="/card1.svg" />
                </div>
              </div>
            </div>


            <div className='flex justify-center items-center h-[60vh] sticky top-28'>
              <div className='w-full my-5 min-h-[45vh] relative p-7 rounded-3xl bg-white border border-black'>
                <motion.p initial={ { opacity: 0, x: 100 } } viewport={ { once: false } } transition={ { duration: 0.5 } } whileInView={ { opacity: 1, x: 0 } } className='text-2xl font-semibold'>Design & Measurements</motion.p>
                <motion.p initial={ { opacity: 0, x: 100 } } viewport={ { once: false } } transition={ { duration: 0.5 } } whileInView={ { opacity: 1, x: 0 } } className='mt-28'>
                  If you find the estimate align with your budget, we kindly request a 3% refundable* charge on the estimate. This payment allows us to visit the site and take realtime measurements to provide detailed 3D and 2D drawings tailored to your layout requirements. If you decide to work with us, that 3% charge will be deducted from the production cost.
                </motion.p>
                <div className='absolute right-8 top-6 w-24 h-24'>
                  <Image width={ 200 } height={ 100 } src="/card2.svg" />
                </div>
              </div>
            </div>

            <div className='flex justify-center items-center h-[60vh] sticky top-32'>
              <div className='w-full my-5 min-h-[45vh] relative p-7 rounded-3xl bg-white border border-black'>
                <motion.p initial={ { opacity: 0, x: 30 } } viewport={ { once: false } } transition={ { duration: 0.5 } } whileInView={ { opacity: 1, x: 0 } } className='text-2xl font-semibold'>Material Selection
                  & Check list</motion.p>
                <motion.p initial={ { opacity: 0, x: 30 } } viewport={ { once: false } } transition={ { duration: 0.5 } } whileInView={ { opacity: 1, x: 0 } } className='mt-28'>
                  At this stage, we schedule a meeting at our factory to showcase materials that meet your requirements. Together, we`&apos;ll review and finalise the checklist for each room, making any necessary required revisions or additions. This collaborative process ensures an accurate final quote for your project.
                </motion.p>
                <div className='absolute right-8 top-6 w-24 h-24'>
                  <Image width={ 200 } height={ 100 } src="/card3.svg" />
                </div>
              </div>
            </div>

            <div className='flex justify-center items-center h-[60vh] sticky top-36'>
              <div className='w-full my-5 min-h-[45vh] relative p-7 rounded-3xl bg-white border border-black'>
                <motion.p initial={ { opacity: 0, x: 30 } } viewport={ { once: false } } transition={ { duration: 0.5 } } whileInView={ { opacity: 1, x: 0 } } className='text-2xl font-semibold'>Final measurements
                  & Production</motion.p>
                <motion.p initial={ { opacity: 0, x: 30 } } viewport={ { once: false } } transition={ { duration: 0.5 } } whileInView={ { opacity: 1, x: 0 } } className='mt-28'>
                  At this stage, our team double-checks the measurements, taking into consideration any changes made by the client. Once we ensure accuracy we proceed to take the final measurements and kickstart the production process.
                </motion.p>
                <div className='absolute right-8 top-6 w-24 h-24'>
                  <Image width={ 200 } height={ 100 } src="/card4.svg" />
                </div>
              </div>
            </div>

            <div className='flex justify-center items-center h-[60vh] sticky top-40'>
              <div className='w-full my-5 min-h-[45vh] relative p-7 rounded-3xl bg-white border border-black'>
                <motion.p initial={ { opacity: 0, x: 30 } } viewport={ { once: false } } transition={ { duration: 0.5 } } whileInView={ { opacity: 1, x: 0 } } className='text-2xl font-semibold'>Installation</motion.p>
                <motion.p initial={ { opacity: 0, x: 30 } } viewport={ { once: false } } transition={ { duration: 0.5 } } whileInView={ { opacity: 1, x: 0 } } className='mt-28'>
                  At this stage, the materials will be delivered to the location once production and quality inspections are finished. We assign an installation team to start the installation process within 48 hours of dispatch. Our team keeps a close watch on the project throughout this phase for perfect execution.
                </motion.p>
                <div className='absolute right-8 top-6 w-24 h-24'>
                  <Image width={ 200 } height={ 100 } src="/card5.svg" />
                </div>
              </div>
            </div>

            <div className='flex justify-center items-center h-[60vh] sticky top-36'>
              <div className='w-full my-5 min-h-[45vh] relative p-7 rounded-3xl bg-white border border-black'>
                <motion.p initial={ { opacity: 0, x: 30 } } viewport={ { once: false } } transition={ { duration: 0.5 } } whileInView={ { opacity: 1, x: 0 } } className='text-2xl font-semibold'>Inspection & Handover</motion.p>
                <motion.p initial={ { opacity: 0, x: 30 } } viewport={ { once: false } } transition={ { duration: 0.5 } } whileInView={ { opacity: 1, x: 0 } } className='mt-28'>
                  On the day of handover, our team ensures a thorough check of the installation, confirming that all committed checklist items have been addressed. We then submit the respective brands warranties to the client if any.
                </motion.p>
                <div className='absolute right-8 top-6 w-24 h-24'>
                  <Image width={ 200 } height={ 100 } src="/card6.svg" />
                </div>
              </div>
            </div>

          </div>
        </section>


        <section className='w-full overflow-hidden p-20 min-h-[120vh] border-t-2 border-b-2 border-black'>
          <motion.p initial="hidden" whileInView="visible" viewport={ { once: false } } variants={ variantText } className='text-6xl font-semibold'>MATERIALS WE USE</motion.p>
          <motion.p initial="hidden" whileInView="visible" viewport={ { once: false } } variants={ variantText } className='text-4xl mt-12'>We make an effort to use only the best supplies and components, so that anything we make for you is long-lasting.</motion.p>
          <div className='my-10 grid xl:grid-cols-4 grid-cols-3 gap-5'>
            <BrandComponent url="/salice.webp" />
            <BrandComponent url="/blum.png" />
            <BrandComponent url="/hafele.png" />
            <BrandComponent width={ 100 } url="/hettich.png" />
            <BrandComponent width={ 150 } url="/greenply.webp" />
            <BrandComponent url="/greenpanel.webp" />
            <BrandComponent url="/centuryply.webp" />
            <BrandComponent url="/kajariaply.webp" />
            <BrandComponent url="/fenix.webp" />
            <BrandComponent url="/rehau.webp" />
            <BrandComponent url="/greenlam.webp" />
            <BrandComponent url="/mariadecor.png" />
          </div>
        </section>


        <section className='w-full overflow-hidden p-20 min-h-[100vh] '>

          <motion.p initial="hidden" whileInView="visible" viewport={ { once: false } } variants={ variantText } className='text-6xl'>CONTACT US</motion.p>


          <motion.div initial="hidden" whileInView="visible" viewport={ { once: false } } variants={ variantText } className='mt-16 flex flex-col gap-y-3'>
            <p className='text-4xl'>Are you ready?</p>
            <p className='text-4xl'>We are here to assist you for your home, office, or commercial space.</p>
            <p className='text-4xl animate-pulse font-semibold'>Contact us right now!</p>
          </motion.div>


          <div className='w-full flex h-[70vh] overflow-hidden rounded-xl my-10 border border-black'>
            <div className='w-1/2 border-r border-black h-[70vh] flex justify-center items-center'>
              <div className='w-64 h-64'>
                <Image alt="" height={ 500 } width={ 500 } src="/contactlogo.webp" />
              </div>
            </div>
            <div className='w-1/2 p-8 pl-16'>
              <label className='font-semibold text-xl'>Address :</label>
              <div className='flex mt-2 text-lg gap-x-10'>
                <p className='w-2/3'>Plot No 16A/4, Phase IV, IDA Cherlapally Hyderabad, Telangana, India. 500 051</p>
                <PiMapPinAreaDuotone color="black" className='cursor-pointer' size={ 45 } />
              </div>

              <p className='font-semibold text-xl mt-12'>Whatsapp :</p>
              <div className='flex mt-2 items-center text-lg gap-x-10'>
                <p className=''>+91 993444999</p>
                <FaWhatsapp color="black" className='cursor-pointer -mt-5' size={ 50 } />
              </div>

              <p className='font-semibold text-xl mt-12'>Email :</p>
              <p className='mt-2 text-lg'>inquiry@trufitcabinets.com</p>

              <p className='font-semibold text-xl mt-12'>Social :</p>
              <div className='flex gap-x-5 mt-2'>
                <CustomSocialIcons icon={ <FaWhatsapp color='white' size={ 35 } /> } />
                <CustomSocialIcons icon={ <TiSocialLinkedin color='white' size={ 45 } /> } />
                <CustomSocialIcons icon={ <BsInstagram color='white' size={ 30 } /> } />
                <CustomSocialIcons icon={ <FaFacebookF color='white' size={ 35 } /> } />
                <CustomSocialIcons icon={ <FaXTwitter color='white' size={ 35 } /> } />
                <CustomSocialIcons icon={ <FaYoutube color='white' size={ 35 } /> } />
                <CustomSocialIcons icon={ <VscBook color='white' size={ 35 } /> } />
              </div>

            </div>


          </div>

          <motion.p initial="hidden" whileInView="visible" viewport={ { once: false } } variants={ variantText } className='text-4xl mt-16'>Request a callback!</motion.p>
          <div className='mt-10  grid grid-cols-2 gap-6'>
            <input type="text" placeholder='First Name*' className='w-full outline-none h-12 border border-black rounded-2xl px-5' />
            <input type="text" placeholder='Last Name' className='w-full outline-none h-12 border border-black rounded-2xl px-5' />
            <input type="text" placeholder='Email*' className='w-full outline-none h-12 border border-black rounded-2xl px-5' />
            <input type="text" placeholder='Phone Number*' className='w-full outline-none h-12 border border-black rounded-2xl px-5' />
          </div>

          <p className='my-12 text-lg font-semibold text-center'>TYPE</p>
          <div className='my-10 flex justify-center'>
            <div className='h-12 bg-black  w-[1px]'></div>
          </div>
          <div className='my-8 flex justify-around'>
            <div className='flex gap-x-1.5'>
              <input type="radio" />
              <p className='text-[0.95rem]'>FLAT</p>
            </div>
            <div className='flex gap-x-1.5'>
              <input type="radio" />
              <p className='text-[0.95rem]'>INDIVIDUAL/VILLA</p>
            </div>
            <div className='flex gap-x-1.5'>
              <input type="radio" />
              <p className='text-[0.95rem]'>COMMERCIAL</p>
            </div>
            <div className='flex gap-x-1.5'>
              <input type="radio" />
              <p className='text-[0.95rem]'>OFFICE</p>
            </div>
          </div>

          <div className='my-8 flex justify-center'>
            <div className='h-12 bg-black  w-[1px]'></div>
          </div>
          <p className='my-12 text-lg font-semibold text-center'>MESSAGE</p>

          <textarea rows={ 6 } placeholder='Type your message...' className='w-full p-5 rounded-xl outline-none border border-black' />

          <div className='flex justify-center my-5'>
            <button className='w-80 h-12 rounded-3xl text-black border border-black bg-white flex justify-center items-center'>
              <p className='text-lg'>SUBMIT</p>
            </button>
          </div>

          <div className='flex justify-between text-[0.88rem]'>
            <p>All Rights Reserved</p>
            <p>* T&C Apply</p>
          </div>

        </section>
        <div className='bg-white'>
          <FaWhatsapp size={ 40 } className='fixed right-5 cursor-pointer bottom-5 z-20' color="black" />
        </div>

      </section>
    </ReactLenis>
  )
}


const Word = ({ children, range, progress }) =>
{

  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className='mr-3 mt-3 relative'>
      <span className='absolute opacity-10'>{ children }</span>
      <motion.span style={ { opacity: opacity } }  >{ children }</motion.span>
    </span>
  )
}


// const Word = ({ children, range, progress }) =>
// {
//   const characters = children?.split("");

//   const opacity = useTransform(progress, range, [0, 1])

//   const amount = range[1] - range[0];

//   const step = amount / children?.length;

//   return (
//     <span className='mr-3 mt-3 relative'>
//       {
//         characters?.map((item, i) =>
//         {

//           const start = range[0] + (step * i);
//           const end = range[0] + (step * (i + 1))

//           return <Character key={ i } range={ [start, end] } progress={ progress }>{ item }</Character>
//         })
//       }
//     </span>
//   )
// }


const Character = ({ children, range, progress }) =>
{

  const opacity = useTransform(progress, range, [0, 1]);

  return <>
    <span>
      <span className='absolute opacity-10'>{ children }</span>
      <motion.span style={ { opacity: opacity } }>
        { children }
      </motion.span>
    </span>
  </>
}


const CustomSocialIcons = ({ icon }) =>
{
  return (
    <div className='bg-black w-12 h-12 cursor-pointer rounded-full flex justify-center items-center'>
      { icon }
    </div>
  )
}

const BrandComponent = ({ url = "", height = 100, width = 220 }) =>
{
  return (
    <div className='w-76 h-28 flex justify-center items-center border border-black'>
      <Image width={ width } objectFit={ "" } height={ height } alt="" src={ url } />
    </div>
  )
}