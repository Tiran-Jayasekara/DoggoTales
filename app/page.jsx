import Ppost from "@components/Ppost/Ppost";
import Footer from "@components/Footer/Footer";
import Visit from "@components/Visit/visit";

const Home = () => {
  return (
    <>
      <section className="w-full flex items-center justify-center flex-col mt-60 lg:mt-40 lg:mb-0 mb-10">
        <h1 className="head_text text-center">
          Doggo Tales
          <br />
          <span className="orange_gradient">Dog Lovers</span>
        </h1>
      </section>

      <div className="w-full flex justify-center items-center lg:mt-10 mt-20 px-8">
        <p className="text-gray-600 sm:text-xl max-w-2xl mt-10 text-center">
          About The dog is a domesticated descendant of the wolf. Also called
          the domestic dog, it is derived from extinct Pleistocene wolves, and
          the modern wolf is the dog's nearest living relative. Dogs were the
          first species to be domesticated by hunter-gatherers over 15,000 years
          ago before the development of agriculture.
        </p>
      </div>

      <Ppost />
      <Visit />
      <Footer />
    </>
  );
};

export default Home;
