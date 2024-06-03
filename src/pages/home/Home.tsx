import BemVindo2 from "../../components/home/bemvindo/BemVindo2";

function Home() {
  return (
    <div>
      {/* <BemVindo /> */}
      {/* <div className="container">
        <Slider />
      </div> */}

      <BemVindo2 />
      {/* <Slider /> */}

      <section className="container py-16 text-foreground">
        <h1 className="mb-4 text-4xl">Título</h1>
        <p className="max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          voluptate, illo, ipsum autem repellat, atque delectus veritatis
          architecto obcaecati explicabo accusantium ipsam minus libero
          laudantium hic omnis animi esse dignissimos?
        </p>
      </section>
    </div>
  );
}

export default Home;
