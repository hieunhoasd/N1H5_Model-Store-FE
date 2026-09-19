export default function ShowcaseBanner() {
  return (
<section className="relative w-full bg-primary-container">
  <div className="w-full h-[520px] lg:h-[640px] relative overflow-hidden">
    <div className="w-full h-full bg-cover bg-center" data-alt="Cinematic wide shot of supercar garage with glowing neon lights" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCO0Wgul5Ng3ZzuAVTHQDy1OuY0A1RVkrfuHA8Dvl7_cBGGt3uOMrveSYGaguqC3zx_o2D4R0JGQGypG34RijtoPpCXnQjyBLsM2RU9VCsXi00S4SaQ1-F3TozeE1Cu7jF7VMaOg5IjLoLTqyjAEnWMBaCmCfOIIWHWaEbjuY0nEd1spRl8K0jnwV578ZnT_QvSG84piRc4ff4E5m1RUeGYRlF1KKRjCmiknFUUb9xv')"}}></div>
    <div className="absolute inset-0 bg-gradient-to-r from-primary-container/95 via-primary-container/60 to-transparent"></div>
    <div className="absolute bottom-space-xl left-4 lg:left-margin-lg right-4 lg:right-margin-lg flex flex-col md:flex-row md:items-end justify-between gap-space-md">
      <div>
        <span className="font-label-mono text-label-mono text-crimson-heat uppercase tracking-widest font-bold">N1H5 DIECAST GARAGE CLUB</span>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-pure-white uppercase mt-1">BORN FOR COLLECTORS. BUILT FOR SPEED.</h2>
        <p className="text-asphalt-gray font-body-md max-w-xl mt-1">Hơn 5.000+ collector trên toàn quốc tin tưởng gửi gắm niềm đam mê sưu tầm mô hình tĩnh.</p>
      </div>
      <a className="px-8 py-3 bg-crimson-heat hover:bg-racing-orange text-pure-white font-label-caps text-label-caps tracking-wider uppercase transition-colors backdrop-blur-md self-start md:self-auto shadow-md" data-path="shop" href="#">XEM LOOKBOOK MÔ HÌNH</a>
    </div>
  </div>
</section>
  );
}
