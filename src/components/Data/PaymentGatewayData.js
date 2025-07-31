import JamboPay from "../../resources/images/GatewayPartners/JamboPay.png";
import Webpay from "../../resources/images/GatewayPartners/Webpay.png";
import DPOPay from "../../resources/images/GatewayPartners/DPOPay.png";

const PaymentGatewayData = [
  {
    name: "I&M WebPay",
    logo: Webpay,
    description:
      "I&M WebPay is an online payment service by I&M Bank Kenya (Tier 1 Bank), IZSoftwares joined I&M Bank Kenya Merchant Network in 2023 in other to utilize their online payment services. I&M WebPay was launched several years ago and allows merchants to accept online payments through Visa, MasterCard, and Union Pay credit, Prepaid, Virtual and Debit cards.",
    links: [
      {
        text: "More about I&M WebPay",
        url: "https://www.imbankgroup.com/ke/business-solutions/im-webpay",
      },
    ],
  },
  {
    name: "DPOPay",
    logo: DPOPay,
    description:
      "By joining the DPO Pay Merchant Network in 2024, IZSoftwares seeks to strengthen its presence in Southern and West Africa by leveraging DPO’s payment gateway to streamline payment processes for its clients within these regions. DPO Pay’s ability to facilitate payments across multiple channels within this market made it a strategic priority for IZSoftwares to become part of their merchant network.",
    links: [
      { text: "More about DPO Pay", url: "https://dpogroup.com/payment-methods/" },
    ],
  },
  {
    name: "Jambo Pay",
    logo: JamboPay,
    description:
      "By joining the JamboPay Merchant Network in 2024, IZSoftwares aimed to utilize their robust Payment Gateway Services. Operating across East Africa, JamboPay is a distinguished fintech platform from Kenya that provides versatile payment solutions such as mobile money, and credit cards. Their robust and secure services help Businesses and Governments to streamline payment processing while enhancing the customer experience.",
    links: [
      {
        text: "More about JamboPay",
        url: "https://www.jambopay.com/",
      },
    ],
  },
  
];

export default PaymentGatewayData;
