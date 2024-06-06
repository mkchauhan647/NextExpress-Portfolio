import Footer from "./Footer";
export default function Sidebar() {
  return (
    <aside className="absolute flex flex-col justify-around items-center left-16 h-2/3">
      <ul className="flex flex-col gap-4 p-4  ">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div>
        <Footer />
      </div>
    </aside>
  );
}
