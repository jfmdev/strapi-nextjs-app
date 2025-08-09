export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-4 bg-gray-800 text-white">
      <p className="text-sm">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </p>
    </footer>
  );
}