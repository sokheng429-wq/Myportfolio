import { TelegramIcon, GithubIcon } from "../SubComponents/Icons";

function SocialLinks() {
  const links = [
    {
      id: 1,
      label: "Telegram",
      href: "https://t.me/SokHeng_4290",
      svg: <TelegramIcon />
    },
    {
      id: 2,
      label: "GitHub",
      href: "https://github.com/sokheng429-wq",
      svg: <GithubIcon />
    }
  ];

  return (
    <div className="d-flex gap-3">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          {link.svg}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;