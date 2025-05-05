import Logo from "../assets/checkbox.png";

export default function Header() {
  return (
    <header className="pt-20 sm:pt-32 lg:pt-40 text-8xl mb-8">
      <h1 className="font-black text-center flex items-center justify-center gap-2 sm:gap-1 lg:gap-3 text-4xl sm:text-7xl lg:text-8xl">
        <span>
          <img
            src={Logo}
            className="h-[1em] w-[1em] object-contain mr-2 sm:mr-4 lg:mr-5"
          />
        </span>
        <span className="text-violet-400">To-Do</span> List
      </h1>
    </header>
  );
}
