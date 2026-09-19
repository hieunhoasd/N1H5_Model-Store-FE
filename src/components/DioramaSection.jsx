export default function DioramaSection() {
  return (
<section className="w-full px-4 lg:px-margin-lg py-space-xl bg-primary-container">
  <div className="relative w-full bg-surface-container-low overflow-hidden shadow-2xl border border-surface-stroke/50">
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
      {/*  Left Banner Visual Info  */}
      <div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-between z-10 bg-gradient-to-r from-surface-charcoal via-surface-charcoal/95 to-surface-charcoal/70">
        <div>
          <div className="flex items-center gap-space-sm mb-space-sm">
            <span className="px-2.5 py-1 bg-crimson-heat text-pure-white font-label-mono text-[11px] font-bold uppercase">DIORAMA 1:64 ZONE</span>
            <span className="font-label-mono text-label-mono text-racing-orange uppercase font-semibold">LED ILLUMINATED GARAGE</span>
          </div>
          <h2 className="font-display-hero text-display-hero-mobile lg:text-[60px] text-pure-white uppercase leading-none tracking-tight">
            
              SA BÀN GARAGE
            <br />
            <span className="text-crimson-heat">& PHỤ KIỆN CUSTOM</span>
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mt-space-sm">Biến góc phòng thành bãi đỗ siêu xe thu nhỏ với sa bàn xưởng độ LBWK, cây xăng Vintage Shell, trạm dừng cao tốc Wangan Nhật Bản có hệ thống đèn LED 5V sắc nét.</p>
        </div>
        {/*  Mini thumbnails  */}
        <div className="my-space-md grid grid-cols-4 gap-space-sm max-w-md">
          <div className="bg-surface-container p-2 flex flex-col items-center border border-surface-stroke/40">
            <span className="material-symbols-outlined text-crimson-heat text-[24px]">garage</span>
            <span className="font-label-mono text-[10px] text-pure-white mt-1 text-center">GARA LED</span>
          </div>
          <div className="bg-surface-container p-2 flex flex-col items-center border border-surface-stroke/40">
            <span className="material-symbols-outlined text-racing-orange text-[24px]">local_gas_station</span>
            <span className="font-label-mono text-[10px] text-pure-white mt-1 text-center">CÂY XĂNG</span>
          </div>
          <div className="bg-surface-container p-2 flex flex-col items-center border border-surface-stroke/40">
            <span className="material-symbols-outlined text-pure-white text-[24px]">build</span>
            <span className="font-label-mono text-[10px] text-pure-white mt-1 text-center">FIGURE THỢ</span>
          </div>
          <div className="bg-surface-container p-2 flex flex-col items-center border border-surface-stroke/40">
            <span className="material-symbols-outlined text-asphalt-gray text-[24px]">view_in_ar</span>
            <span className="font-label-mono text-[10px] text-pure-white mt-1 text-center">HỘP MICA</span>
          </div>
        </div>
        <div className="flex items-center gap-space-md">
          <a className="px-8 py-3 bg-crimson-heat hover:bg-racing-orange text-pure-white font-headline-md text-headline-md tracking-wider uppercase transition-colors" data-path="diorama" href="#">SẮM SA BÀN NGAY</a>
          <span className="font-label-mono text-label-mono text-asphalt-gray">*Tặng kèm bộ cọc tiêu cảnh báo tỉ lệ 1:64</span>
        </div>
      </div>
      {/*  Right Lifestyle Diorama Photo  */}
      <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
        <div className="w-full h-full bg-cover bg-center" data-alt="Miniature scale diorama model garage showroom with glowing LED lights and custom diecast sports cars" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9mYGPCvtq0P6Lwx1l-ibDZeP7kftx-JQMzmZBOFH7cunYKCO8SAioEsAooocs_1eTFJkh4CGpuPhV7M9SU-46u0jv_Bc5H5ZoHqKCcEfC83k361C2Y39Cy3qMJnEqlwuTJinVU_nWrsYYJq7TMULICMBbhye59_1nGDdIN5Fk_a6bylJEDvALCILmtGSxOI9CzLzvCBG5jJYGVmkg9Xl_gtv0T0FIqEcwybaBv7zt')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-transparent to-surface-charcoal"></div>
      </div>
    </div>
  </div>
</section>
  );
}
