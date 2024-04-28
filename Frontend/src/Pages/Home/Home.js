import "./Home.css";
import Image from "../../images/oie_YnkmtSt56Shv.png";
import flash from "../../images/2152.jpg";
import others from "../../images/remote-management-distant-work-isometric-icons-composition-with-man-computer-table-with-avatars-distant-workers_1284-63071.jpeg"
export default function Home() {
    return (
        <>
            <section className="relative pb-20  overflow-hidden">
                <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-zospace-1" />
                <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
                    <div className="relative flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-12 mb:mb-0">
                            <h2 className="max-w-lg lg:max-w-md 2xl:max-w-none mt-7 mb-12 mb:mb-20 text-6xl lg:text-7xl 2xl:text-9xl text-white font-bold font-heading">
                                Get all the amazing resources at one place
                            </h2>
                            <p className="mb-12 lg:mb-24 text-lg text-white opacity-90">
                                Discover how it works and start for free.
                            </p>
                        </div>
                        <div className={"imgdiv"} id={"homeimg"}>
                            <img src={Image} className={"bgimg"} alt={""} />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-zospace-1" />
                <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
                    <div className="relative flex flex-wrap -mx-4">
                        <div className={"imgdiv"} id={"homeimg"}>
                            <img src={flash} className={"bgimg rounded-md"} alt={""} />
                        </div>
                        <div className="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-12 mb:mb-0">
                            <h2 className="mb-12 lg:mb-24 text-6xl text-white opacity-90">
                                Create your own flash cards and use others
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-zospace-1" />
                <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
                    <div className="relative flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-12 mb:mb-0">
                            <h2 className="mb-12 lg:mb-24 text-6xl text-white opacity-90">
                                Make your tracker and explore what others are doing.
                            </h2>
                        </div>
                        <div className={"imgdiv"} id={"homeimg"}>
                            <img src={others} className={"bgimg rounded-md"} alt={""} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
