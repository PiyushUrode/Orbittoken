// import "../Homepagesection/Usecase.css"
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Navigation, Pagination, Autoplay } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";

  // Import your images
  import usecase1 from "../assets/usecase/11.png"; // Replace with actual paths
  import usecase2 from "../assets/usecase/13.png"; // Replace with actual paths
  import usecase3 from "../assets/usecase/10.png"; // Replace with actual paths
  import usecase4 from "../assets/usecase/7.png"; // Replace with actual paths
  import usecase5 from "../assets/usecase/14.png"; // Replace with actual paths
  import usecase6 from "../assets/usecase/3.png"; // Replace with actual paths
  import usecase7 from "../assets/usecase/15.png"; // Replace with actual paths

  const SliderComponent = () => {
    return (
    <> 
  <div
              className="flex flex-col  items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-[#000000] py-10"
              id="usecase"
            >
              <div className="w-full max-w-5xl">
              
                <h2 className="font-semibold bg-text-custom-gradient font-gilroy  bg-clip-text text-transparent mt-4 text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
                  Use Cases of  ORB
                </h2>
                <div className="flex justify-center mt-4">
                  <p className="text-[#CECECE] text-base md:text-xl leading-relaxed w-full md:max-w-[80%] max-w-full font-Titillium_Web">
                  Revolutionizing Gaming, Payments, and Decentralized Futures—Empowering a Connected Digital World.
                  </p>
                </div>
              </div>
            </div>
      <div className="w-full px-4 md:px-4 py-4  align-middle justify-center flex ">
        <Swiper
          id="slider1"
          modules={[Navigation, Pagination, Autoplay,    ]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true ,  
             }}
          navigation={true}
          

      scrollbar={{ draggable: true }}
        >



      {/* Custom Pagination */}
      <div className="custom-pagination flex justify-center mt-4 space-x-2  border-red-400 border-2"> </div>
          {/* Slide 1 */}
          <SwiperSlide>
            <SlideContent image={usecase1} title="Gaming Ecosystem" description="Powering play-to-earn games, in-game asset tokenization, and decentralized tournaments, ORB transforms gaming into a rewarding experience. Players can earn ORB tokens by completing challenges and competing in tournaments. The ecosystem enables true ownership of in-game assets, allowing players to buy, sell, and trade tokenized items across platforms." />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <SlideContent image={usecase2} 
            title=" Borderless Payment Ecosystem" 
            description=" ORB is designed to facilitate seamless, instant, and low-cost transactions across borders. Whether you're sending funds to family abroad, paying for services, or conducting business globally, ORB eliminates intermediaries, ensuring a truly decentralized payment ecosystem. With enhanced security and near-zero transaction fees, ORB is the ultimate solution for global financial inclusion." />
          </SwiperSlide>


          {/* Slide 3 */}
          <SwiperSlide>
            <SlideContent image={usecase3}
             title="Decentralized Finance " 
             description=" Unlock new financial opportunities with ORB’s integration into the DeFi ecosystem. From yield farming and staking to liquidity pools and lending protocols, ORB empowers users to take control of their assets without relying on traditional financial institutions. Experience transparency, security, and limitless possibilities in a decentralized financial landscape." />
          </SwiperSlide>


          {/* Slide 4 */}
          <SwiperSlide>
            <SlideContent image={usecase4} 
            title="E-Commerce"
             description=" ORB is revolutionizing online shopping by providing a fast, secure, and efficient payment method for e-commerce platforms. Businesses can accept ORB payments without dealing with high transaction fees or payment processor restrictions." />
          </SwiperSlide>

                    {/* Slide 5 */}
          <SwiperSlide>
            <SlideContent image={usecase5} 
            title="NFT Marketplace"
             description=" Empowering creators and collectors, ORB enables seamless transactions in the NFT space. Whether it's digital art, music, virtual real estate, or in-game assets, ORB ensures smooth and secure buying, selling, and trading of NFTs." />
          </SwiperSlide>


                    {/* Slide 6 */}
          <SwiperSlide>
            <SlideContent image={usecase6} 
            title="Own Wallet "
             description="Take full control of your assets with ORB’s dedicated wallet. Designed for security and ease of use, the ORB Wallet allows users to store, send, and receive ORB tokens effortlessly. With features like multi-layer encryption and private key ownership, users can transact with confidence while maintaining full autonomy over their funds." />
          </SwiperSlide>


                    {/* Slide 7 */}
          <SwiperSlide>
            <SlideContent image={usecase7} 
            title="Own Blockchain"
             description="ORB is not just a token—it’s an entire ecosystem built on its own blockchain. Designed for scalability, speed, and security, the ORB blockchain ensures seamless integration across multiple industries By eliminating reliance on third-party networks, ORB provides unmatched efficiency, transparency, and adaptability for businesses and individuals alike." />
          </SwiperSlide>

        </Swiper>
      </div>
      </>
    );
  };

  // Component for Each Slide
  const SlideContent = ({ image, title, description }) => {
    return (
      <> 

  <div className="flex flex-col  relative md:flex-row items-center justify-center  p-0 lg:p-14">
  <div className="relative  flex w-full md:w-[70%]  ml-0 md:ml-20   flex-col md:flex-row  justify-center align-middle">
        {/* Image */}
        <div className="absolute  top-0 left-[-55%] lg:left-[-50%]  xl:top-[-25%] xl:left-[-20%]   flex justify-center items-center">
          <img src={image} alt={title} className="w-[80%]      md:w-[50%] xl:w-[70%] h-auto  hidden md:block" />
        </div>

        {/* Content Box */}
        <div className="relative   xl:max-w-[60%] lg:max-w-[90%] xl:max-w-[60%]      w-full   align-middle justify-end w-full rounded-2xl p-0.5"
        style={{
          background: "linear-gradient(90deg, #00FFED 0%, #A50093 17%, #FDFDFD 43% , #0D0B19 91%)",
          zIndex: -1, 
        }}>
        <div className="relative rounded-2xl p-5 align-middle justify-end"
          style={{
            background: "linear-gradient(90deg, rgba(1,108,140,1) 0%, rgba(1,56,73,1) 50%, rgba(0,0,0,1) 100%)",
            zIndex: -1, 
          }}>
          <div className="relative rounded-2xl p-4 md:p-5 p-1 md:px-16 "
            style={{
              background: "linear-gradient(90deg, #0F0C29 0%, #302B63 50%, #24243E 100%)",
              zIndex: -1, 
            }}> 
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className=" text-sm md:text-base leading-relaxed">{description}</p>
        </div>
      </div>
      </div>
      </div>
      </div>
      </>

    );
  };

  export default SliderComponent;
