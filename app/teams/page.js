"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import SectionHeader from "@/components/SectionHeader";
import ContactSection from "@/components/ContactSection";
import Logo from "@/public/images/association.png";
import Image from "next/image";

const teamData = [
  {
    position: "President",
    members: [
      {
        name: "Prashant Kafle",
        image: "https://i.ibb.co/V00xt1sm/president.jpg",
        designation: "President",
        url: "https://www.prashantkafle.com.np",
      },
    ],
  },
  {
    position: "Vice President & Secretaries",
    members: [
      {
        name: "Ashes Pokhrel",
        image: "https://i.ibb.co/7dFNLPbB/vicepresident.jpg",
        designation: "Vice President",
      },
      {
        name: "Sidhant Subba",
        image: "https://shorturl.at/5Nvt1",
        designation: "Secretary",
      },
      {
        name: "Sanket Shiwakoti",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQHDGkMDEuSt_g/profile-displayphoto-shrink_200_200/B4DZUzHCbdHIAY-/0/1740319238605?e=1746057600&v=beta&t=Cv7DtW8cTuzcrU4opbgs7niNXYJG8OMWS1aS_zu2UaE",
        designation: "Vice Secretary",
      },
      {
        name: "Prazwal Rayamajhi",
        image: "https://shorturl.at/yZy8o",
        designation: "Vice Secretary",
      },
      {
        name: "Bishal Pulami Mager",
        image: "https://i.ibb.co/x8R1hjGt/bishalpulami.jpg",
        designation: "Vice Secretary",
      },
      {
        name: "Reeshika Kathayat",
        image:
          "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/472852185_1142282517455025_3420595830824679676_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHMrVYuEbS3uPDDNHB9Md9e_ZyfPig4Vy_9nJ8-KDhXL-NYRBXEGu1UqmjgX1N-eO2sy1DcZESijn6_YPGyImYe&_nc_ohc=cpQPAcukQ7MQ7kNvgFUySs_&_nc_oc=AdjSNLm3jGW4EK4z491cq8j-FQgLiEc-e0OJaJLcROA_mS6XNnTX61WaWvhWOQCkDEp5ERMXW8c72TvF6Rgduj1T&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AT3sXdNLeRDIFKu6E99g43r&oh=00_AYB0BGi-vXTh50ifbHQ_y1XJ4AK0rAArEB19zDw3yBABqw&oe=67C0C6AD",
        designation: "Treasurer",
      },
    ],
  },
  {
    position: "Tech Members",
    members: [
      {
        name: "Santosh bhandari",
        image:
          "https://i.ibb.co/KchQ9jTV/santoshvandari.jpg",
        designation: "Tech Lead",
        url: "https://bhandari-santosh.com.np/",
      },
      {
        name: "Shameer Kharel",
        image:
          "https://i.ibb.co/nMYrqqkP/shameerkharel.webp",
        designation: "Tech Member",
      },
      {
        name: "Yangsing Hang Ignam",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQFWfBKM46cV-w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710846955648?e=1746057600&v=beta&t=pnYQ_szqjLMsWttRXm3rLPFnDXw-CeDcaNa6G6j3aM0",
        designation: "Tech Member",
      },
      {
        name: "Rojan Chapagain",
        image: "https://i.ibb.co/Zp75GGPS/IMG-20241205-WA0011.jpg",
        designation: "Tech Member",
      },
    ],
  },
  {
    position: "Graphics Members",
    members: [
      {
        name: "Manish Pradhan",
        image:
          "https://i.ibb.co/NgxszPz0/manishpradhan.jpg" ,
        designation: " Graphics Lead",
      },
      {
        name: "Kiran Sitoula",
        image:
          "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/474010549_1674215829829330_8218314131920887089_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFhI4LXqkyAv-Gz-3aiT4bcyU8vOHK81iDJTy84crzWILuoT1jpJ6z-EfUT6jfblE-7YMDPD2FMYoo1N1DNhSjg&_nc_ohc=R0Pgtmrphn8Q7kNvgF2CGou&_nc_oc=AdgqYUqjBd52Rx8EJd2B7-lSawNz_wjXnVc1k1wbKrO734b1NqP_zBYk8ey9ClDOkdZYgwFJDJp3igYsqT9e_Ky4&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=Ahs53ulZ3bzxn3UwpoM1cSz&oh=00_AYA1KsGjrfGIKIpCJ2-DUgvNKGiwUTNRQTJHRXjbAGYO2w&oe=67C0BEE8",
        designation: "Graphics Member",
      },
      {
        name: "Utsav Ghimire",
        image:
          "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/469725539_122176317446098666_7009627631256199188_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeG3feh6U7ot_Fhd9HOgHZo5Tmy6o-YQ0rJObLqj5hDSst0GPZEfgBx5X0ySRAZ-2Hl4e9WFZ-q8ynAjDvRDLmad&_nc_ohc=BGOc3IttxhoQ7kNvgFtIHAp&_nc_oc=AdhD53ZiSaJ8E4TmHst62Yk-uwBX2xfANAigemQ7OT7A20KYqCeK2l2O11r--DP4vPDrygilv7QfK8gJ0D0l54_I&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyoAP1lXWcAoES69JD8VDyM&oh=00_AYAu8eQvrr_WWealrM9TeXSh4hPQ2ZPN2QjeCHvWwg2Asg&oe=67C0BB31",
        designation: "Graphics Member",
      },
    ],
  },
  {
    position: "Executive Members",
    members: [
      {
        name: "Manish Raut",
        image:
          "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/474573837_955682126510472_5467798840284455455_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFYx3gA400LY0HLAUgcoMMB0H86JPgLe3_Qfzok-At7fxKXziFpiUpHycnnHs3eCxAbMM8tFOYyv22y1n2L9XVH&_nc_ohc=BkNhNU3evbIQ7kNvgGh5hss&_nc_oc=Adii5DGNy3peHzjTiu_ATL92zEJGBgvkwGoXfJUnXXQ8pt-A8xetQUaVxkZmad3IboAkIjwOJoZTlmSE4WhcYsm8&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AwgTJEao-sVrr2HxDHF2SxH&oh=00_AYBdneEWZGrdzfjKoIdmoqarJDyCX3bI2KogNfjwkmE-Lg&oe=67C0C3DF",
        designation: " ",
      },
      { name: "Dipesh Timsina", image: "", designation: "" },
      {
        name: "Sarika Rai",
        image: "https://i.ibb.co/67B0hXNY/FB-IMG-1723290426677.jpg",
        designation: "",
      },
      {
        name: "Enjila Poudel",
        image:
          "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/441605743_1017566929825533_508551422135341449_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEqcd3_lA8Nsv6DvP-hXmAllS0U2ocJsOuVLRTahwmw6yPerA-ZzamsphZZUET4ziGfJAEtAkrc1H0nM9wm_pXb&_nc_ohc=oeZOyTrdR8MQ7kNvgHvW-EZ&_nc_oc=AdiMbwAaYJC7nXMroijl8gwusFRuZB2UPtOuXG2VzrpQZHaC1fTGYkf-s0DMJufRRmRQrVcyy26PHUIFOhUWcGPm&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AsX4ihFdtX6tD94bvIT5PLw&oh=00_AYBKi9rjuswoTBxq3rTkxFz1TkvqKKg2rQQ-eUTm4tp7_A&oe=67C0DE10",
        designation: "",
      },
      {
        name: "Rahul Bastola",
        image: "https://i.ibb.co/Fbny0xhR/1740322416133.jpg",
        designation: "",
      },
      {
        name: "Bivek Dhungel",
        image: "https://i.ibb.co/dTrZrMx/1000009316.jpg",
        designation: "",
      },
      {
        name: "Dibya Laxmi Limbu",
        image:
          "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/463385936_475157618885108_1833792297296490165_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHtS2GoWQHpr_Z45jU6OzpTIecdhECAIhAh5x2EQIAiEFS8cRKH22MDBjlBGiAEOHV9VddrX_S971JXmkqD6Llu&_nc_ohc=d3LjArGhORMQ7kNvgGfxsyT&_nc_oc=AdiZQmXmEx44TK8Ua_eWdqfISZf6TiGWeYKkryO9ijzlSLfF7QeL7uBQ9nc6pQjTnI9zQnUKwSdq-U10596lMvy_&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=Apy7NU-UNNvekEp1mxkaTPL&oh=00_AYAyvlM8zp1J-IqRlJ8NT9-vZNiNh55M1DmBaS9Jtw-NQA&oe=67C0DD0F",
        designation: "",
      },
      {
        name: "Saurav Bhattarai",
        image: "https://i.ibb.co/hF4Wdgff/IMG-4964.jpg",
        designation: "",
      },
    ],
  },
];

const TeamsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <>
      <div className="max-w-6xl relative mx-auto text-center bg-white pt-20">
        {/* Header Section */}
        <SectionHeader
          title="Meet Our Team"
          subtitle="The leadership behind BCA Association MMC"
        />

        {/* President Section */}
        <div className="mb-12" data-aos="fade-up">
          {teamData.slice(0, 1).map((team, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-3xl font-bold text-blue-900">
                {team.position}
              </h2>
              <div className="flex justify-center gap-6 mt-6">
                {team.members.map((member, idx) => (
                  <div key={idx} className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full w-40 h-40 object-cover mx-auto"
                      data-aos="zoom-in"
                    />
                    <p className="mt-2 text-lg font-medium text-blue-900">
                      {member.name}
                    </p>
                    <p className="text-md text-gray-600">
                      {member.designation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Vice Presidents & Secretaries Section */}
        <div className="mb-12" data-aos="fade-up">
          {teamData.slice(1, 2).map((team, index) => (
            <div key={index} className="mb-10 hover:cursor-pointer">
              <h2 className="text-2xl font-bold text-blue-900">
                {team.position}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {team.members.map((member, idx) => (
                  <div key={idx} className="text-center" data-aos="flip-right">
                    {!!member?.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-full w-40 h-40 object-cover mx-auto"
                      />
                    ) : (
                      <Image
                        src={Logo}
                        alt="BCA Association MMC"
                        height={150}
                        width={150}
                        className="rounded-full w-40 h-40 object-cover mx-auto"
                      />
                    )}
                    <p className="mt-2 text-lg font-medium text-blue-900">
                      {member.name}
                    </p>
                    <p className="text-md text-gray-600">
                      {member.designation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Executive Members Section */}
        <div data-aos="fade-up ">
          {teamData.slice(2).map((team, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-blue-900 mt-8">
                {team.position}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {team.members.map((member, idx) => (
                  <div key={idx} className="text-center" data-aos="flip-left">
                    {!!member?.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-full w-40 h-40 object-cover mx-auto"
                      />
                    ) : (
                      <Image
                        src={Logo}
                        alt="BCA Association MMC"
                        height={150}
                        width={150}
                        className="rounded-full w-40 h-40 object-cover mx-auto"
                      />
                    )}
                    <p className="mt-2 text-lg font-medium text-blue-900">
                      {member.name}
                    </p>
                    <p className="text-md text-gray-600">
                      {member.designation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default TeamsPage;
