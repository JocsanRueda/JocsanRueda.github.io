import { useActiveSection } from "@/context/active-section.context"

export const handleSetActiveSection = (section: string) => {
  const { setActiveSection } =useActiveSection()
  setActiveSection(section)
}