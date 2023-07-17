import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About"),
    items: [
      {
        label: t("Contact"),
        href: "https://docs.ball.exchange/contact-us",
        isHighlighted: true,
      },
      {
        label: t("Brand"),
        href: "https://docs.ball.exchange/brand",
      },
      {
        label: t("Blog"),
        href: "https://blog.ball.exchange/",
      },
      {
        label: t("Community"),
        href: "https://docs.ball.exchange/contact-us/telegram",
      },
      {
        label: t("Litepaper"),
        href: "https://v2litepaper.ball.exchange/",
      },
    ],
  },
  {
    label: t("Help"),
    items: [
      {
        label: t("Customer Support"),
        href: "https://docs.ball.exchange/contact-us/customer-support",
      },
      {
        label: t("Troubleshooting"),
        href: "https://docs.ball.exchange/help/troubleshooting",
      },
      {
        label: t("Guides"),
        href: "https://docs.ball.exchange/get-started",
      },
    ],
  },
  {
    label: t("Developers"),
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: t("Documentation"),
        href: "https://docs.ball.exchange",
      },
      {
        label: t("Bug Bounty"),
        href: "https://docs.ball.exchange/code/bug-bounty",
      },
      {
        label: t("Audits"),
        href: "https://docs.ball.exchange/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: t("Careers"),
        href: "https://docs.ball.exchange/hiring/become-a-chef",
      },
    ],
  },
];
