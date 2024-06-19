import {
  Comment,
  Discover,
  Gallery,
  Hero,
  Introduce,
  Partner,
  WhyUs,
} from "@/pages/Home/components";

const Home = () => {
  return (
    <div>
      <Hero />
      <Introduce />
      <WhyUs />
      <Discover />
      <Comment />
      <Gallery />
      <Partner />
    </div>
  );
};

export default Home;
