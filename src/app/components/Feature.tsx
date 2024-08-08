import Feature1 from '../../../public/assets/feature-1.svg'
import Feature2 from '../../../public/assets/feature-2.svg'
import Feature3 from '../../../public/assets/feature-3.svg'
import Checkmark from '../../../public/assets/check.svg'
import Bluebtn from '../../../public/assets/blue-button.svg'
import Greenbtn from '../../../public/assets/green-button.svg'
import Pinkbtn from '../../../public/assets/pink-button.svg'
import Image from 'next/image'

export function Feature(){
    return(
        <div className="flex flex-col gap-y-[57px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature1} alt='feature1' className='hidden w-1/2 sm:block'/>
                <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                    <h3 className="text-sky-500 font-medium lg:text-[18px]">Sales Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
                        Simplify your sales monitoring
                    </h1>
                    <Image src={Feature1} alt="feature 1" className='pt-[24px] sm:hidden'/>
                    <p className='py-6 lg:text-[18px]'>
                        Stay on top of things and revamp your work process with our game-changing
                        features. get a birds eye view with our customizable dashboard.
                    </p>

                    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                        <li className='flex gap-x-2 items-center'>
                            <span>
                                <Image src={Checkmark} alt="checkmark"/>
                            </span>
                            30 days free trial
                        </li>
                        <li className='flex gap-x-2 items-center'>
                            <span>
                                <Image src={Checkmark} alt="checkmark"/>
                            </span>
                            Save on anual deals
                        </li>
                        <li className='flex gap-x-2 items-center'>
                            <span>
                                <Image src={Checkmark} alt="checkmark"/>
                            </span>
                            30 day oney back garuntte
                        </li>
                    </ul>

                    <p className='flex gap-x-2 mt-4 font-bold text-sky-500 lg:text-[18px]'>
                        Learn More <span><Image src={Bluebtn} alt="bluebtn"/></span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-x-6 sm:flex-row">
                <Image src={Feature2} alt='feature2' className='hidden w-1/2 sm:block'/>
                <div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>
                    <h3 className="text-lime-500 font-medium lg:text-[18px]">Customer Support</h3>
                    <h1 className="pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
                        Get in touch with oyur customers
                    </h1>
                    <Image src={Feature1} alt="feature 1" className='pt-[24px] sm:hidden'/>
                    <p className='py-6 lg:text-[18px]'>
                        Stay on top of things and revamp your work process with our game-changing
                        features. get a birds eye view with our customizable dashboard.
                    </p>

                    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                        <li className='flex gap-x-2 items-center'>
                            <span>
                                <Image src={Checkmark} alt="checkmark"/>
                            </span>
                            30 days free trial
                        </li>
                        <li className='flex gap-x-2 items-center'>
                            <span>
                                <Image src={Checkmark} alt="checkmark"/>
                            </span>
                            Save on anual deals
                        </li>
                        <li className='flex gap-x-2 items-center'>
                            <span>
                                <Image src={Checkmark} alt="checkmark"/>
                            </span>
                            30 day oney back garuntte
                        </li>
                    </ul>

                    <p className='flex gap-x-2 mt-4 font-bold text-lime-500 lg:text-[18px]'>
                        Learn More <span><Image src={Greenbtn} alt="greenbtn"/></span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature3} alt='feature3' className='hidden w-1/2 sm:block'/>
                <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                    <h3 className="text-pink-500 font-medium lg:text-[18px]">Growth Monitoring</h3>
                    <h1 className="pt-[12px] text-2xl font-medium lg:text-[42px] lg:leading-[58px]">
                        Monitor your sites new subscribers
                    </h1>
                    <Image src={Feature1} alt="feature 1" className='pt-[24px] sm:hidden'/>
                    <p className='py-6 lg:text-[18px]'>
                        Stay on top of things and revamp your work process with our game-changing
                        features. get a birds eye view with our customizable dashboard.
                    </p>

                    <div className="flex w-full gap-x-6">
                        <div className="flex flex-col gap-y-3 w-1/2">
                            <h3 className='text-2xl font-bold'>100+</h3>
                            <p>some info here</p>
                        </div>
                        <div className="flex flex-col gap-y-3 w-1/2">
                            <h3 className='text-2xl font-bold'>800+</h3>
                            <p>some info here</p>
                        </div>
                    </div>

                    <p className='flex gap-x-2 mt-4 font-bold text-pink-500 lg:text-[18px]'>
                        Learn More <span><Image src={Pinkbtn} alt="pinkbtn"/></span>
                    </p>
                </div>
            </div>
        </div>
    )
}