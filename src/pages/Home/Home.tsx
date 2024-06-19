import {
  Comment,
  Discover,
  Gallery,
  Hero,
  Introduce,
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
    </div>
  );
};

export default Home;
