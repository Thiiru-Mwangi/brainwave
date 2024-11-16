import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section className="!px-0 !py-0">
      <div className="container flex flex-wrap sm:justify-between justify-center items-center gap-10 max-sm:flex-column">
        <p className="caption text-n-4 lg:block">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
        <ul className="flex gap-5 flex-wrap">
            {socials.map((item) =>(
                <a className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-color hover:bg-n-6 " key={item.id} href="item.url" target="_blank">
                    <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                </a>
            ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
