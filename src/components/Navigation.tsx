export const Navigation = () => {
  return (
    <div className="w-full flex items-center justify-between px-12 border border-red-500">
      <p className="text-gray-800 text-3xl font-bold">Rafał Łukawski</p>
      <ul className="flex gap-6 text-lg">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <ul className="flex gap-2">
        <li>PL</li>
        <li>EN</li>
      </ul>
    </div>
  );
};
