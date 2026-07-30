function Footer() {
  return (
    <footer className="bg-deep text-cream px-6 md:px-14 pt-14 pb-8 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="font-serif font-semibold text-xl">JOB-PORTAL</p>

        <div className="flex gap-7">
          <a
            className="text-cream/90 hover:text-goldlight transition-colors text-sm"
            href="#"
          >
            About Us
          </a>
          <a
            className="text-cream/90 hover:text-goldlight transition-colors text-sm"
            href="#"
          >
            Contact
          </a>
          <a
            className="text-cream/90 hover:text-goldlight transition-colors text-sm"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto border-t border-cream/10 mt-8 pt-5">
        <p className="font-mono text-xs text-cream/55">
          © 2025 Job Portal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
