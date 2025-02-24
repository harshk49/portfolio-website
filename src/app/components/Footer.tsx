const Footer = () => {
  return (
    <footer className="flex justify-center w-full py-6 my-2 font-normal tracking-tighter text-center">
      <p className="text-neutral-500">
        &copy; {new Date().getFullYear()} Harsh Kardile. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
