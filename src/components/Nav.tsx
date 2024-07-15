export default function Nav() {
  return (
    <nav className="sticky top-24 z-50 max-w-[1000px] w-full justify-between backdrop-blur-fg-1 flex py-16 px-64 items-center rounded-out border border-stroke-1 bg-fg-1">
      <a href="/" className="hover-effect-scale">
        <img src="/logo.svg" alt="Alive Logo" className="size-32" />
      </a>
      <div className="flex gap-32">
        <a href="/" className="subtext hover-effect-colour">
          Home
        </a>
        <a href="/about" className="subtext hover-effect-colour">
          About
        </a>
        <a href="/alive-city" className="subtext hover-effect-colour">
          Alive City
        </a>
        <a href="/docs" className="subtext hover-effect-colour">
          Docs
        </a>
        <a href="/blog" className="subtext hover-effect-colour">
          Blog
        </a>
        <a href="https://duckyhq.com" className="subtext hover-effect-colour">
          DuckyHQ
        </a>
      </div>
    </nav>
  );
}
