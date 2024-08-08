import BlurArrow from '../../../public/assets/arrow.png'
import Image from 'next/image'
import Gradient from '../../../public/assets/Gradient.svg'
import Heroimage from '../../../public/assets/Image.svg'
import Google from '../../../public/assets/Google.svg'
import Slack from '../../../public/assets/Slack.svg'
import Trustpilot from '../../../public/assets/Trustpilot.svg'
import CNN from '../../../public/assets/CNN.svg'
import Clutch from '../../../public/assets/Clutch.svg'

export function Hero(){
    return(
        <div className="pt-4">
            <div className="px-20">
                <div className="px-[20px] lg:px-[280px]">

                    <h1 className="text-3xl text-center text-[32px] leading-[40px] font-medium pt-6">
                        Start monitoring your website like a pro
                    </h1>
                    <p className="text-center font-medium">Get a birds eye view with our customizable dashboard.
                        Stay on top of things! Revamp your work process with our game-chaing feature. Boost productivity
                        and efficincy!
                    </p>
                </div>

                <div className="flex w-full pt-8 pb-12 gap-x-6 justify-center">
                    <button className=" bg-violet-600 text-white font-semibold rounded-lg w-1/2 py-4 px-4 lg:w-fit">
                        Try for free
                    </button>
                    <button className="border border-violet-600 text-violet-600 font-semibold rounded-lg w-1/2 py-4 px-4 flex items-center justify-center gap-x-2 lg:w-fit">
                        View pricing
                    <span><Image src={BlurArrow} alt="Learn more"/></span>
                    </button>
                </div>
            </div>

            
            <div className="relative flex-full w-full justify-center">
                <Image src={Gradient} alt="gradient" className='min-h-[500px] w-full object-cover lg:h-auto'/>
                <div className="absolute bottom-5 flex w-full flex-col items-center">
                    <Image src={Heroimage} alt="Hero image" className='-ml-6 h-[310] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]' />

                    <div className='flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20'>
                        <p className='text-white font-bold text-center'>Trusted by these compaines</p>
                        <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
                            <Image src={Google} alt='google'></Image>
                            <Image src={Slack} alt='slack'></Image>
                            <Image src={Trustpilot} alt='trust pilot'></Image>
                            <Image src={CNN} alt='cnn'></Image>
                            <Image src={Clutch} alt='clutch'></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}