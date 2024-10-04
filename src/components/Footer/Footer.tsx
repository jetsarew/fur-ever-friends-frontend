import { FacebookIcon, GitHubIcon, InstagramIcon, YoutubeIcon } from "@/shared/Icon";

export default function Footer(){
    return (
        <footer className="border-t border-bd-gray">
            <div className="w-[1154px] h-[144px] mx-auto pt-8 flex flex-row justify-between">
                <h2 className="text-header text-dark-blue">FUR-EVER FRIENDS</h2>
                <div className="flex flex-row gap-[64px]">
                    <div className="flex flex-col gap-4">
                        <p className="text-subheading2 text-dark-blue">Follow us</p>
                        <div className="flex flex-row items-center gap-3">
                            <GitHubIcon />
                            <FacebookIcon />
                            <InstagramIcon />
                            <YoutubeIcon />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[21px]">
                        <p className="text-subheading2 text-dark-blue">Contact us</p>
                        <p className="text-body text-dark-blue">fureverfriends@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}