import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Michal Koptewicz junior frontend developer" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        <InterestsSection sectionId="skills" heading="Skills" />
        <ProjectsSection sectionId="projects" heading="Latest projects" />
        <ContactSection sectionId="contact" />
      </Page>
    </>
  );
}
