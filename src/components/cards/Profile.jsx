
import { Phone, Mail, MapPin } from "lucide-react";

import Button from "../buttons/Button";
import Sociallink from "../links/Sociallink";
import Contactlink from "../links/Contactlink";
import { Link } from "react-router-dom";

const Profile = () => {

    const downloadResume = () => {
        console.log('Downloading Resume');
    }

    return (
        <div className="border border-[#AAAAAA]/60 rounded-lg flex flex-col items-center max-w-[520px] w-full h-fit md:h-full lg:h-full px-4 md:px-8 pb-8">
            
            {/* Profile Image */}
            <div className="my-8">
                <img src="/profile/baby-perry.webp" className="w-[100px] h-[100px] rounded-full"/>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="font-[public-sans] font-bold text-sm md:text-base">Raymond C. Balingbing</h1>
                <h2 className="font-[jetbrains-mono] text-[#888888] text-sm md:text-base lg:text-base">
                    <Link to='/'>/remunn.</Link>
                </h2>
            </div>

            <div className="flex flex-col items-center mt-6 ">
                <div className="flex flex-col items-center gap-y-4">
                    <Button onClick={downloadResume} variant="primary" size="default">Resume</Button>
                    <div className="flex justify-between gap-x-[10px] md:gap-x-4">
                        <Sociallink href="https://github.com/dev-remun">@github</Sociallink>
                        <Sociallink href="https://huggingface.co/ml-remunn">@huggingface</Sociallink>
                        <Sociallink href="https://www.linkedin.com/in/raymond-balingbing-04293937a/">@linkedin</Sociallink>
                        <Sociallink href="https://www.facebook.com/ray.cabarlo">@facebook</Sociallink>
                    </div>
                </div>

                <div className="hidden md:flex flex-col items-center gap-y-4 mt-10">
                    <Contactlink className="self-start">
                        <Phone className="w-4" />
                        <p>0963 - 7678 - 838</p>
                    </Contactlink>

                    <Contactlink className="self-start">
                        <Mail className="w-4" />
                        <p>dev.rcbalingbing@gmail.com</p>
                    </Contactlink>

                    <Contactlink className="self-start">
                        <Mail className="w-4" />
                        <p>rcb2023-9793-64187@bicol-u.edu.ph</p>
                    </Contactlink>

                    <Contactlink className="self-start">
                        <MapPin className="w-4" />
                        <p>Tabaco City, Albay, PH</p>
                    </Contactlink>
                </div>
            </div>
        </div>
    );

}

export default Profile;