import { Link } from "react-router-dom";

export default function Header() {
  return (
<header className="fixed top-0 w-full z-50 bg-primary-container/95 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.5)] border-b border-surface-stroke/40">
  <div className="bg-surface-charcoal text-on-surface-variant flex items-center justify-center overflow-hidden py-1.5 px-margin">
    <div className="flex items-center gap-space-md font-label-mono text-[11px] md:text-label-mono tracking-widest uppercase whitespace-nowrap">
      <span className="text-pure-white font-semibold">GIAO NHANH HỎA TỐC 2H TẠI TP.HCM & HÀ NỘI</span>
      <span className="text-crimson-heat">•</span>
      <span>CAM KẾT CHÍNH HÃNG 100% NGUYÊN SEAL</span>
      <span className="text-crimson-heat">•</span>
      <span className="text-racing-orange font-bold">MIỄN PHÍ VẬN CHUYỂN ĐƠN TỪ 800.000đ</span>
      <span className="text-crimson-heat">•</span>
      <span className="text-pure-white font-mono">HOTLINE: 0988 123 456</span>
    </div>
  </div>
  <div className="h-20 w-full px-4 lg:px-margin-lg flex items-center justify-between gap-space-md">
    <div className="flex items-center gap-space-md shrink-0">
      <Link className="flex items-center gap-space-xs group" to="/">
        <div className="w-10 h-10 flex items-center justify-center bg-surface-charcoal/80 p-1 border border-surface-stroke/60">
          <img alt="N1H5 Models Diecast Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XZsHHkGJyDs3n4jme30Y_ojqjjB-41yPPlMWIDWBCrRNw8_G-rPY64sNeLg9bSgnc7yrsEizxaRexX4iPGsCfGZABHFqKQk_VaXQ-80snbUUN9LscoBfz3igoyyM4afSUQE6qR2v1xSLZ3EQaGlaf2EfecoHlGuowArve5z4BP2xoe4ix8kKm4fdu237sGwAefUuI3QNDP5zjOaraETVBBgYviqWippgrzSTW94zYNYQ" />
        </div>
        <div className="flex flex-col">
          <span className="font-headline-lg text-[22px] tracking-wider text-pure-white uppercase font-black leading-none group-hover:text-crimson-heat transition-colors">
            APEX
            <span className="text-crimson-heat">SCALE</span>
          </span>
          <span className="font-label-mono text-[9px] tracking-widest text-asphalt-gray uppercase">DIECAST GARAGE // 1:64 - 1:18</span>
        </div>
      </Link>
    </div>
    <nav className="hidden 2xl:flex items-center gap-space-md font-label-caps text-[12px] tracking-wider" data-active-classes="text-pure-white font-bold">
      <a aria-current="page" className="transition-colors text-pure-white font-bold hover:text-crimson-heat" data-path="shop" href="#">TẤT CẢ SẢN PHẨM</a>
      <a className="text-on-surface-variant hover:text-pure-white transition-colors" data-path="hot-wheels" href="#">HOT WHEELS</a>
      <a className="text-on-surface-variant hover:text-pure-white transition-colors" data-path="mini-gt" href="#">MINI GT</a>
      <a className="text-on-surface-variant hover:text-pure-white transition-colors" data-path="kaido-house" href="#">KAIDO HOUSE</a>
      <a className="text-on-surface-variant hover:text-pure-white transition-colors" data-path="inno64" href="#">INNO64</a>
      <a className="text-on-surface-variant hover:text-pure-white transition-colors" data-path="tarmac-works" href="#">TARMAC WORKS</a>
      <a className="text-on-surface-variant hover:text-pure-white transition-colors" data-path="tomica-limited" href="#">TOMICA LIMITED</a>
      <a className="text-on-surface-variant hover:text-pure-white transition-colors" data-path="diorama" href="#">DIORAMA & PHỤ KIỆN</a>
      <a className="text-crimson-heat hover:text-racing-orange transition-colors font-bold flex items-center gap-1" data-path="chase-edition" href="#">
        <span className="w-1.5 h-1.5 rounded-full bg-crimson-heat animate-ping"></span>
        GÓC SĂN CHASE
      </a>
    </nav>
    <div className="flex items-center gap-space-md">
      <div className="relative hidden md:block group">
        <div className="flex items-center bg-surface-charcoal/80 px-space-sm py-1.5 focus-within:ring-1 focus-within:ring-crimson-heat transition-all border border-surface-stroke/60">
          <span className="material-symbols-outlined text-asphalt-gray text-[18px] mr-2">search</span>
          <input className="bg-transparent border-none outline-none font-label-mono text-label-mono text-pure-white placeholder:text-asphalt-gray w-52 lg:w-72 focus:w-80 transition-all" placeholder="Tìm kiếm mẫu xe, hãng xe (Nissan Skyline, Porsche...)..." type="text" />
        </div>
        <div className="absolute right-0 top-full mt-2 w-80 bg-surface-charcoal/95 backdrop-blur-xl p-space-md shadow-2xl opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all z-50 border border-surface-stroke">
          <p className="font-label-mono text-label-mono text-asphalt-gray uppercase mb-space-xs">Mẫu xe tìm kiếm phổ biến</p>
          <div className="flex flex-wrap gap-space-xs font-label-mono text-[11px]">
            <a className="bg-surface px-2 py-1 text-on-surface hover:text-crimson-heat transition-colors" data-path="shop" href="#">#Nissan Skyline R34</a>
            <a className="bg-surface px-2 py-1 text-on-surface hover:text-crimson-heat transition-colors" data-path="shop" href="#">#Porsche 911 GT3 RS</a>
            <a className="bg-surface px-2 py-1 text-on-surface hover:text-crimson-heat transition-colors" data-path="shop" href="#">#Kaido House Datsun</a>
            <a className="bg-surface px-2 py-1 text-crimson-heat hover:underline" data-path="chase-edition" href="#">#Hot Wheels RLC 1993</a>
          </div>
        </div>
      </div>
      <a className="p-1.5 text-on-surface-variant hover:text-pure-white transition-colors" data-path="wishlist" href="#" title="Xe yêu thích">
        <span className="material-symbols-outlined text-[22px]">favorite</span>
      </a>
      <a className="relative p-1.5 text-on-surface-variant hover:text-pure-white transition-colors" data-path="cart" href="#" title="Giỏ hàng">
        <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
        <span className="absolute -top-1 -right-1 bg-crimson-heat text-pure-white font-label-mono text-[10px] w-4 h-4 flex items-center justify-center font-bold">2</span>
      </a>
      <Link className="p-0.5 ml-space-xs" to="/login" title="Tài khoản">
        <div className="w-8 h-8 rounded-full bg-surface-bright border border-surface-stroke flex items-center justify-center text-pure-white hover:border-crimson-heat transition-colors">
          <span className="material-symbols-outlined text-[18px]">person</span>
        </div>
      </Link>
    </div>
  </div>
</header>
  );
}
