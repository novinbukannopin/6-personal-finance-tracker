export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-gray-300 hover:text-white">Home</a>
          </li>
          <li>
            <a href="/add" className="text-gray-300 hover:text-white">Add Tracker</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}