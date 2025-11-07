import authorImg from "../assets/author.jpg";

export const Home = () => {
  return (
    <>
      <header id="home" className="header-box" />
      <main>
        <div className="flex w-full justify-around items-center border border-red-500">
          <div className="h-full border border-blue-500 header-text">
            <p>I create software that evolves with you</p>
          </div>
          <div className="w-64">
            <img src={authorImg} alt="Rafał Łukawski" className="rounded-xl" />
          </div>
        </div>
      </main>
    </>
  );
};
