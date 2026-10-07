function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

        <p className="text-sm text-slate-500">
          © {year} Vishal Kumar Mathuri. All rights reserved.
        </p>

        <p className="text-sm text-slate-500">
          Blockchain Developer · Ethereum / Solidity · Rust / Solana
        </p>

      </div>
    </footer>
  );
}

export default Footer;