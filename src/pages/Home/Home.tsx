import {
  Comment,
  Discover,
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
    </div>
  );
};

export default Home;
