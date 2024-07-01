import LeftPanel from "@/components/Intro/LeftPanel";
import RightPanel from "@/components/Intro/RightPanel";
import "@/styles/intro.scss";

const jsonLd = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Vernon Wee Hong Koh",
  jobTitle: "Full-stack Developer",
  url: "https://www.weehong.me",
  sameAs: [
    "https://github.com/weehongkoh?tab=repositories",
    "https://www.youtube.com/@weehongayden90",
  ],
  description:
    "Lifelong learner with expertise in crafting engaging user interfaces (UIs) and robust application programming interfaces (APIs). Passionate about sharing knowledge and contributing to community growth. Experienced in integrating front-end and back-end development to deliver high-performing applications using React, Spring Boot, and .NET Core.",
  memberOf: {
    "@type": "Organization",
    name: "DBS Bank",
  },
  image: "https://www.weehong.me/images/profile.jpg",
  contactPoint: {
    "@type": "ContactPoint",
    email: "mailto:vernon_weehongkoh6574.developer@hotmail.com",
    contactType: "Customer Service",
  },
  worksFor: {
    "@type": "Organization",
    name: "DBS Bank",
  },
  hasOccupation: {
    "@type": "CategoryCode",
    codeValue: "Full-stack Developer",
    inCodeSet: "https://weehong.me",
  },
};

const fetchResume = async () => {
  const res = await fetch(`${process.env.DIRECTUS_URL}/items/resume`, {
    method: "GET",
    headers: { Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}` },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch resume data");
  }

  return await res.json();
};

export default async function Home() {
  const { data } = await fetchResume();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid h-full grid-cols-1 gap-x-4 lg:grid-cols-2">
        <LeftPanel data={data} />
        <RightPanel data={data} />
      </div>
    </>
  );
}
