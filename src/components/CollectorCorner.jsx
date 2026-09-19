export default function CollectorCorner() {
  return (
<section className="relative w-full overflow-hidden bg-primary-container border-y border-surface-stroke/40">
  <div className="relative w-full min-h-[520px] lg:h-[760px] flex items-center justify-center p-space-lg lg:p-space-xl">
    <div className="absolute inset-0 bg-cover bg-center filter brightness-50" data-alt="Macro detail shot of premium diecast metal car chassis and suspension" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZWunrJUFws2rwm5nVT7xWVLA5mVSsmsF3jUQmDo6E7IM7eiabVCifSMOktX3sgrQ2Hq-w5cqV15Va5PHPRXHt78sbbHqRNDhRW5KCnUcvfPP6WYUGtN-G3JhF6DAxGzUCpcuPZygmcbhN62qTLndt1Yk-fK7XPYFb8toiFTKoFf1j0LUOVM64FK2kiBJfckvdu_xpPufddBWdDOSPlT0Nt5mScQr53cEyjYIBrAl8')"}}></div>
    <div className="absolute inset-0 bg-primary-container/60 backdrop-blur-[2px]"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-primary-container/80"></div>
    <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
      <span className="px-3 py-1 bg-surface-charcoal/90 text-crimson-heat font-label-mono text-label-mono uppercase tracking-widest mb-space-sm backdrop-blur-md border border-surface-stroke">THE COLLECTOR'S CORNER // GÓC ĐAM MÊ XE TỈ LỆ NHỎ</span>
      <div className="flex flex-col items-center font-display-hero uppercase tracking-tight leading-[1.08] text-pure-white">
        <span className="text-[28px] sm:text-[42px] lg:text-[50px] text-on-surface-variant font-medium">DIECAST METAL CHASSIS</span>
        <span className="text-[32px] sm:text-[48px] lg:text-[62px] text-pure-white font-bold">REAL RIDERS RUBBER TIRES</span>
        <span className="text-[28px] sm:text-[42px] lg:text-[50px] text-crimson-heat">TAMPO RACING LIVERIES</span>
        <span className="text-[26px] sm:text-[38px] lg:text-[48px] text-secondary-fixed">NUMBERED LIMITED EDITIONS</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-space-md">Mỗi chiếc mô hình tại N1H5 Models đều là tác phẩm cơ khí thu nhỏ chuẩn xác từ hàng thật, mang đến trải nghiệm chạm vào giấc mơ tốc độ ngay trên bàn làm việc của bạn.</p>
      <div className="mt-space-lg flex flex-wrap items-center justify-center gap-space-sm">
        <a className="px-space-xl py-3 bg-crimson-heat text-pure-white font-headline-md text-headline-md tracking-wider uppercase hover:bg-racing-orange transition-colors shadow-lg" data-path="shop" href="#">KHÁM PHÁ BỘ SƯU TẬP</a>
        <a className="px-space-md py-3 bg-surface-charcoal/90 text-pure-white font-label-caps text-label-caps tracking-wider uppercase hover:bg-surface-bright transition-colors border border-surface-stroke" data-path="chase-edition" href="#">GÓC SĂN CHASE CAR</a>
      </div>
    </div>
  </div>
</section>
  );
}
