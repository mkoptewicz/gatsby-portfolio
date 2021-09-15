import React from "react";

import {
  AboutSection,
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function MainPage() {
  return (
    <>
      <Seo title="MainPage" />
      <Page >
        <HeroSection sectionId="about" />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <ProjectsSection />
      </Page>
    </>
  );
}
