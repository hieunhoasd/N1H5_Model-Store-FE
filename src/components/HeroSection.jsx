export default function HeroSection() {
  return (
<section className="relative w-full overflow-hidden bg-primary-container">
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[640px] lg:h-[860px]">
    {/*  Left Hero Half: Mini GT x LBWK  */}
    <div className="relative flex flex-col justify-between p-space-lg lg:p-space-xl overflow-hidden group min-h-[440px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-surface-stroke/40">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" data-alt="High precision 1:64 diecast miniature model car of Nissan Skyline GT-R R34 Super Silhouette Liberty Walk on dark reflective asphalt in high contrast lighting" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqEgYPv-Dnn_KWF-eV39HDjYnW2yk8EjgPwwqsqa7dQqjAfEBrlW7q84KJIVKL0q5krRcZs7RnlFl8iTLOOfXoeRWJoubpdpnITrcNefAqX86vaJnKwTBDcDstV1omOWBVnsqxJPSk37HQJm6UCJeIl60WKCmI3CRSA9ZoNNyj6XCUJcgQOvwLFRGshoedmGA04MTPhOgHitQH0faMWCFZQ1YVcVTtXXJphp1ydYHv')"}}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/60 to-primary-container/20"></div>
      <div className="absolute inset-0 bg-primary-container/30 mix-blend-multiply"></div>
      {/*  Top Marker  */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-surface-charcoal/85 backdrop-blur-md text-pure-white font-label-mono text-label-mono uppercase tracking-widest border border-surface-stroke/60">
          <span className="w-2 h-2 rounded-full bg-crimson-heat animate-pulse"></span>
          
            DROP MỚI THÁNG NÀY // MINI GT x LBWK
          
        </span>
        <span className="font-label-mono text-label-mono text-asphalt-gray hidden sm:inline-block">SCALE 1:64 DIECAST LAB</span>
      </div>
      {/*  Hero Bottom Action  */}
      <div className="relative z-10 flex flex-col items-start gap-space-sm pt-24 lg:pt-0">
        <span className="font-label-mono text-label-mono tracking-widest text-racing-orange uppercase font-bold">LB-SILHOUETTE WORKS GT & GT3 RS</span>
        <h2 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-pure-white uppercase tracking-tight leading-none">
          
            NISSAN R34
          <br />
          <span className="text-secondary-fixed">& PORSCHE 911</span>
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Độ hoàn thiện kim loại đỉnh cao, gương cao su dẻo chống gãy, tem sơn tampo siêu sắc nét đạt chuẩn bảo tàng tỉ lệ 1:64.</p>
        <div className="pt-space-sm flex items-center gap-space-md">
          <a className="px-space-xl py-3 bg-crimson-heat hover:bg-pure-white text-pure-white hover:text-primary-container font-headline-md text-headline-md tracking-wider uppercase transition-all duration-200 shadow-lg" data-path="shop" href="#">MUA NGAY</a>
          <a className="px-space-md py-3 bg-surface-charcoal/80 hover:bg-surface-bright text-pure-white font-label-caps text-label-caps uppercase transition-colors backdrop-blur-md border border-surface-stroke" data-path="mini-gt" href="#">XEM CATALOG</a>
        </div>
      </div>
    </div>
    {/*  Right Hero Half: Collector Edition  */}
    <div className="relative flex flex-col justify-between p-space-lg lg:p-space-xl overflow-hidden group min-h-[440px] lg:min-h-full">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Custom Kaido House and Hot Wheels Red Line Club diecast collector model cars in miniature illuminated garage display" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBiFHOy8vkIJwtITnfj2VBMUjQhX6loCfhTTOwu9wg1vrDK6eHeJc4juYT8516NvxghUlLXyFgnhdhyUI5vgLCUGvQw7hI-JrVszvGzitBTUajcjsjcY853aY6_QeVVfeco4ovHbpmBH3AGv_hLt5NHyu_GqDgnpa8NK62jnUufdXJn0gBZHAGqwrW-HH8gEVryIOPapDl_tOfKubqpgTLE9btJ1MVwJPhKjUDOCiPb')"}}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/60 to-primary-container/20"></div>
      <div className="absolute inset-0 bg-primary-container/30 mix-blend-multiply"></div>
      {/*  Top Marker Right  */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-surface-charcoal/85 backdrop-blur-md text-pure-white font-label-mono text-label-mono uppercase tracking-widest border border-surface-stroke/60">
          <span className="material-symbols-outlined text-[14px] text-racing-orange">stars</span>
          
            LIMITED COLLECTOR // RLC & KAIDO HOUSE
          
        </span>
        <span className="font-label-mono text-label-mono text-pure-white font-semibold">TỒN KHO CỰC HIẾM</span>
      </div>
      {/*  Hero Bottom Action Right  */}
      <div className="relative z-10 flex flex-col items-start gap-space-sm pt-24 lg:pt-0">
        <span className="font-label-mono text-label-mono tracking-widest text-pure-white uppercase font-bold">DATSUN 510 PRO STREET & SILVERADO DUALLY</span>
        <h2 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-pure-white uppercase tracking-tight leading-none">
          
            SĂN CHASE
          <br />
          <span className="text-crimson-heat">EXCLUSIVE</span>
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Mở nắp động cơ chi tiết, lốp cao su Real Riders, sơn đổi màu Spectraflame và cơ hội khui trúng bản Chase 1:24 nguyên seal card.</p>
        <div className="pt-space-sm flex items-center gap-space-md">
          <a className="px-space-xl py-3 bg-pure-white hover:bg-crimson-heat text-primary-container hover:text-pure-white font-headline-md text-headline-md tracking-wider uppercase transition-all duration-200" data-path="chase-edition" href="#">SĂN CHASE NGAY</a>
          <span className="font-label-mono text-label-mono text-asphalt-gray uppercase">Tỉ lệ Chase 1/24 hộp</span>
        </div>
      </div>
    </div>
  </div>
  {/*  Sub-Ticker / Diecast Guarantee Ribbon  */}
  <div className="w-full bg-surface-container-lowest px-margin-lg py-2.5 flex items-center justify-between overflow-x-auto gap-space-lg text-asphalt-gray font-label-mono text-label-mono tracking-widest uppercase border-y border-surface-stroke/40">
    <span className="flex items-center gap-2 text-pure-white shrink-0">
      <span className="material-symbols-outlined text-[16px] text-crimson-heat">verified</span>
       100% XE ĐÚC NGUYÊN SEAL CHÍNH HÃNG
    </span>
    <span className="hidden md:inline shrink-0">HỖ TRỢ ĐỔI TRẢ NẾU MÓP MÉO BLISTER CARD KHI VẬN CHUYỂN</span>
    <span className="hidden lg:inline shrink-0 text-pure-white">SHOWROOM TRẢI NGHIỆM TẠI TP.HCM & HÀ NỘI</span>
    <span className="shrink-0 text-racing-orange font-bold">TẶNG HỘP BẢO VỆ MICA CAO CẤP CHO ĐƠN XE PREMIUM</span>
  </div>
</section>
  );
}
