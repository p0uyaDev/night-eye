import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "../Layouts/MainLayout";
import Hero from "../shared/components/UIElements/Hero/Hero";
import { SettingsContext } from "../shared/context/SettingsContext";

function About() {
  const { siteTitle } = useContext(SettingsContext);
  return (
    <>
      <Helmet>
        <title>About Us - {siteTitle.slice(0, 10)}</title>
      </Helmet>
      <MainLayout>
        <Hero
          image="/Night Eye.png"
          title="About Us"
          description={
            <>
              <strong className="text-primary">Night Eye</strong> is a modern
              news platform built to deliver information with clarity, speed,
              and depth. We believe that news should be accessible, reliable,
              and tailored to the reader’s perspective. Designed with a sleek,
              dark-inspired aesthetic,{" "}
              <strong className="text-primary">Night Eye</strong> offers an
              immersive experience where technology meets journalism. Our
              mission is simple: to provide readers with accurate stories,
              intuitive navigation, and a trustworthy space to stay informed in
              an age of overwhelming information.
            </>
          }
          buttonText="Contact Us"
          buttonLink="/Contact"
        />
      </MainLayout>
    </>
  );
}

export default About;
