
import { Phone, Mail, MapPin } from "lucide-react";

import Button from "../buttons/Button";
import Sociallink from "../links/Sociallink";
import Contactlink from "../links/Contactlink";

const Profile = () => {

    const downloadResume = () => {
        console.log('Downloading Resume');
    }

    return (
        <div className="border border-[#AAAAAA]/60 rounded-lg flex flex-col items-center max-w-[520px] w-full h-full px-4 pb-8 overflow-y-auto">
            
            {/* Profile Image */}
            <div className="my-8">
                <img src="/profile/baby-perry.webp" className="w-[100px] h-[100px] rounded-full"/>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="font-[public-sans] font-bold">Raymond C. Balingbing</h1>
                <h2 className="font-[jetbrains-mono] text-[#888888]">/remunn.</h2>
            </div>

            <div className="flex flex-col items-center my-8">
                <div className="flex flex-col items-center gap-y-4">
                    <Button onClick={downloadResume} variant="primary" size="default">Resume</Button>
                    <div className="flex justify-between gap-x-6">
                        <Sociallink href="https://github.com/dev-remun">@github</Sociallink>
                        <Sociallink href="https://huggingface.co/ml-remunn">@huggingface</Sociallink>
                        <Sociallink href="https://www.linkedin.com/in/raymond-balingbing-04293937a/">@linkedin</Sociallink>
                        <Sociallink href="https://www.facebook.com/ray.cabarlo">@facebook</Sociallink>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-y-4 w-full mt-10">
                    <Contactlink>
                        <Phone className="w-4" />
                        <p>0963 - 7678 - 838</p>
                    </Contactlink>

                    <Contactlink>
                        <Mail className="w-4" />
                        <p>dev.rcbalingbing@gmail.com</p>
                    </Contactlink>

                    <Contactlink>
                        <Mail className="w-4" />
                        <p>rcb2023-9793-64187@bicol-u.edu.ph</p>
                    </Contactlink>

                    <Contactlink>
                        <MapPin className="w-4" />
                        <p>Tabaco City, Albay, PH</p>
                    </Contactlink>
                </div>
            </div>
        </div>
    );

}

export default Profile;