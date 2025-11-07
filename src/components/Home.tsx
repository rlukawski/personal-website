import authorImg from "../assets/author.jpg";

export const Home = () => {
  return (
    <main id="home" className="mt-16">
      <div className="flex w-full justify-around items-center border border-red-500">
        <div className="h-full flex flex-col gap-2">
          <p className="header-text">A full stack developer and IT Project Manager</p>
          <div className="flex gap-2 items-center pl-4">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <p className="body-text">Let’s build something great together!</p>
          </div>
        </div>
        <div className="w-64">
          <img src={authorImg} alt="Rafał Łukawski" className="rounded-xl" />
        </div>
      </div>
    </main>
  );
};
