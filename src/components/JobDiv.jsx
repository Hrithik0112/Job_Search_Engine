import React from "react";
import { BiTimeFive } from "react-icons/bi";

//we are using mock data with the help of Array list, we gonna acces it through map().
const Data = [
  {
    id: 1,
    image:
      "https://static.vecteezy.com/system/resources/previews/012/871/379/original/dell-brand-icon-illustration-top-tech-company-logotype-free-png.png",
    title: "web Developer",
    time: "now",
    location: "Canada",
    desc: "A passionate react developer with industry experience or equivalent own project",
    company: "Dell Cooperation",
  },
  {
    id: 2,
    image:
      "https://static.vecteezy.com/system/resources/previews/012/871/379/original/dell-brand-icon-illustration-top-tech-company-logotype-free-png.png",
    title: "Sr. Frontend Engineer",
    time: "now",
    location: "Canada",
    desc: "Design and implement user interfaces, optimize web performance, collaborate with back-end teams. Proficient in HTML, CSS, JavaScript.",
    company: "Dell Cooperation",
  },
  {
    id: 3,
    image:
      "https://static.vecteezy.com/system/resources/previews/012/871/379/original/dell-brand-icon-illustration-top-tech-company-logotype-free-png.png",
    title: "Web Designer",
    time: "now",
    location: "Canada",
    desc: "Create responsive web designs using HTML, CSS, and JS for seamless user experiences.",
    company: "Dell Cooperation",
  },
  {
    id: 4,
    image:
      "https://static.vecteezy.com/system/resources/previews/012/871/379/original/dell-brand-icon-illustration-top-tech-company-logotype-free-png.png",
    title: "Advocate",
    time: "now",
    location: "Canada",
    desc: "Translate wireframes into interactive interfaces, ensuring cross-browser compatibility and smooth functionality.",
    company: "Dell Cooperation",
  },
  {
    id: 5,
    image:
      "https://static.vecteezy.com/system/resources/previews/012/871/379/original/dell-brand-icon-illustration-top-tech-company-logotype-free-png.png",
    title: "Software Maintiner",
    time: "now",
    location: "Canada",
    desc: "Maintain and update existing codebases, troubleshoot issues, and implement UI improvements.",
    company: "Dell Cooperation",
  },
  {
    id: 6,
    image:
      "https://static.vecteezy.com/system/resources/previews/012/871/379/original/dell-brand-icon-illustration-top-tech-company-logotype-free-png.png",
    title: "IT expert",
    time: "now",
    location: "Canada",
    desc: "Implement accessibility standards, making web content usable for all users, including those with disabilities.",
    company: "Dell Cooperation",
  },
  {
    id: 7,
    image:
      "https://static.vecteezy.com/system/resources/previews/012/871/379/original/dell-brand-icon-illustration-top-tech-company-logotype-free-png.png",
    title: "Open Source Maintainer",
    time: "now",
    location: "Canada",
    desc: "Stay updated with industry trends, apply modern design patterns, and contribute to a dynamic front-end team.",
    company: "Dell Cooperation",
  },
  {
    id: 8,
    image:
      "https://static.vecteezy.com/system/resources/previews/012/871/379/original/dell-brand-icon-illustration-top-tech-company-logotype-free-png.png",
    title: "UI/UX Designer",
    time: "now",
    location: "Canada",
    desc: "Collaborate with UI/UX designers and backend developers to deliver visually appealing and functional websites.",
    company: "Dell Cooperation",
  },
];

const JobDiv = () => {
  return (
    <div className="jobContainer py-10 gap-10 flex flex-wrap justify-center items-center ">
      {Data.map(({ id, image, title, comapny, desc, location, time }) => {
        return (
          <div
            key={id}
            className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px]
             hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-black group-hover:text-white">
                {title}
              </h1>
              <span className="flex items-center gap-1 text-[#ccc]">
                {time}
                <BiTimeFive />
              </span>
            </span>
            <h6 className="text-[#ccc]">{location}</h6>
            <p className="tect-[13px] text-[#959595] border-t-[2px] mt-[10px] group-hover:text-white pt-[20px]">
              {desc}
            </p>
            <div className="company flex items-center gap-2">
              <img src={image} alt="logo" className="w-[30px] m-2" />
              <span className="text-[13px] py-[1rem] block group-hover:text-white">{comapny}</span>
            </div>
            <button
              className="border-[2px] block rounded-[10px] p-[10px] w-full text-[14px] font-semibold
        text-textColor group-hover/item:text-textColor hover:bg-white  hover:border-white "
            >
              Apply Now
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default JobDiv;
