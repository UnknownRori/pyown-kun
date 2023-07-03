import Twitter from '@/assets/image/social/twitter.svg';
import Instagram from '@/assets/image/social/instagram.svg';
import Pixiv from '@/assets/image/social/pixiv.svg';
import Facebook from '@/assets/image/social/facebook.svg';

import type SocialList from "@/types/SocialList";

// TODO : Download and add icons here
const socialLists = [
    { name: "Pixiv", link: "https://www.pixiv.net/users/94250146", icon: Pixiv },
    { name: "Twitter", link: "https://twitter.com/Pyown_kun?t=1CZlzhopMVS7KbBec6eIUw&s=08", icon: Twitter },
    { name: "Facebook", link: "https://www.facebook.com/profile.php?id=100092453631515&mibextid=ZbWKwL", icon: Facebook },
    { name: "Instagram", link: "https://instagram.com/pyown_kun?igshid=MzNlNGNkZWQ4Mg==", icon: Instagram },
] as Array<SocialList>;

export default socialLists;