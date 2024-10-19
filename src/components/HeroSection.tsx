import { useTheme } from "@/lib/ThemeContext";
import Image from 'next/image'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion"
 

const HeroSection = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div id='HeroSection' className='min-h-screen w-screen overflow-x-hidden flex items-center justify-center'>

      {/* lefte */}
      <div className="relative  w-full bg-gradient-to-r flex items-center justify-center">
        <Image width={200} height={100} src="/images/cube-in-left-large.png" alt="left-large"
          className="absolute left-0 top-5 object-cover animate-cube-float-large" />

        <Image width={300} height={100} src="/images/cube-in-left-medium.png" alt="left-medium"
          className="absolute left-28 top-14 object-cover animate-cube-float-medium" />

        <Image width={300} height={100} src="/images/cube-in-left-small.png" alt="left-small"
          className="absolute left-20 top-20 object-cover animate-cube-float-small" />

{/* right */}
        <Image width={400} height={500} src="/images/cube-in-right-large.png" alt="right-large"
          className="absolute -right-10 bottom-52 -z-0 object-cover animate-cube-float-large" />

        <Image width={200} height={500} src="/images/cube-in-right-medium.png" alt="right-medium"
          className="absolute -right-10 bottom-52 object-cover animate-cube-float-medium" />

        <Image width={200} height={500} src="/images/cube-in-right-small.png" alt="right-small"
          className="absolute right-20 top-1 z-10 object-cover animate-cube-float-small" />

        {/* content */}
        <div id="HeroSection-content" className="w-[85%] mx-auto py-16">
          <div id="HeroSection-title" className="flex justify-center items-center">
            <Image src={"/images/logo_stroke.png"} width={450} height={120} alt='fad' />
          </div>
          <div className="  flex justify-center items-center mt-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1 ,scale: 1}}
              transition={{ duration: 0.8, ease: 'easeInOut' }}

            >

              <h2 className="text-5xl leading-tight  text-center">
                <span className="font-bold">Solutions</span>
                {" "}
                de développement
                <br />
                {" "}
                <span className="font-bold">rapides</span>
                {" "}
                et
                {" "}
                <span className="font-bold">flexibles</span>
                {" "}
                avec
              </h2>
            </motion.div>

          </div>
          <div className="relative flex justify-center items-center  mt-8 ">
            <div className=" relative overflow-hidden flex justify-center items-center py-4 px-20 gap-4 border-2 border-[var(--secondary)] rounded-lg">
              <Image src={isDarkTheme ? "/images/Strapi-logo-white.png" : "/images/Strapi-logo-black.png"} width={160} height={100} alt='fad' />
              <span className="text-xl">&</span>
              <Image src={isDarkTheme ? "/images/Next-JS-logo-white.png" : "/images/Next-JS-logo-black.png"} width={160} height={100} alt='fad' />
              <span className="snake absolute top-0 left-0 w-full h-full rounded-lg"></span>

            </div>
          </div>
          <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1 ,scale: 1}}
              transition={{ duration: 0.8, ease: 'easeInOut' }}

            >
          <div className="flex justify-center items-center mt-10">
            <p className="text-center font-normal">Nous créons des applications web sur mesure, rapides et évolutives grâce à Strapi pour une gestion de contenu flexible et Next.js pour des performances optimales et un SEO renforcé.</p>
          </div>
            </motion.div>


          <div className="flex justify-center items-center mt-10 relative">
          <motion.div
              initial={{ y: '10vh', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 100 }}

            >

            <button className="bg-[var(--secondary)] flex items-center justify-center  gap-4 rounded-full pr-2 pl-6 py-2" >
              <span className="font-bold">Demander une démo</span>
              <BsArrowUpRightCircleFill size={30} />

            </button>
            </motion.div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default HeroSection