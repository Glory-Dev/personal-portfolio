const Footer = () => {
  return (
    <footer className="w-full py-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024-2025 Amjad Mounir
        </p>
      </div>
    </footer>
  );
};

export default Footer;
