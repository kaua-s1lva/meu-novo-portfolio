import { SectionAbout } from "@/components/SectionAbout";
import { SectionContact } from "@/components/SectionContact";
import { SectionHero } from "@/components/SectionHero";
import { SectionProject } from "@/components/SectionProject";
import { SectionSkill } from "@/components/SectionSkill";

export default function Home() {
  return (
    <div>
        <SectionHero />
        <SectionAbout />
        <SectionSkill />
        <SectionProject />
        <SectionContact />

    </div>
  )
}
