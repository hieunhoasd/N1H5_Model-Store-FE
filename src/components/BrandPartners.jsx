export default function BrandPartners() {
  return (
<section className="w-full px-4 lg:px-margin-lg py-space-xl bg-surface-container-lowest border-t border-surface-stroke/40">
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
    <div>
      <span className="font-label-mono text-label-mono text-crimson-heat uppercase tracking-widest font-bold">OFFICIAL LICENSED PARTNERS</span>
      <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-pure-white uppercase mt-1">THƯƠNG HIỆU HÀNG ĐẦU</h2>
    </div>
    <p className="font-body-md text-body-md text-asphalt-gray max-w-md">N1H5 Models phân phối chính ngạch các thương hiệu diecast đẳng cấp thế giới với cam kết 100% nguyên seal hộp.</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
    {/*  Brand 1: Mini GT  */}
    <div className="group relative flex flex-col bg-surface-charcoal/60 overflow-hidden border border-surface-stroke/40 hover:border-crimson-heat/60 transition-colors">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Mini GT scale model lineup showcase" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB85G_0vhsQS6CX4m7VPXOjzdBfCDsJNfkWJoRVXYy4-lALIynWvAHTo7xDMB5FJsxk40qpptdZD3m5v76Lt6IWEINisxh5QJ65DNrya1CYrEHZeBuF2doF1zVgA5_ykM7D1wG3tt2CMRj_cc8HApHA-iA3aUDqOYJur0QTQyn5l3lMipGJds7ylC5RdgmpzIDIPOW9II5abpuAt68Ahl8sWZjws0brsUycE5sA4bwz')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 px-3 py-1 bg-crimson-heat text-pure-white font-label-mono text-[11px] font-bold uppercase tracking-wider">TSM-MODEL</div>
      </div>
      <div className="p-space-lg flex flex-col justify-between flex-1 bg-surface-container-low">
        <div>
          <span className="font-label-mono text-label-mono text-crimson-heat uppercase">Tỉ lệ 1:64 chuẩn bảo tàng</span>
          <h3 className="font-headline-lg text-headline-lg text-pure-white uppercase mt-1 group-hover:text-crimson-heat transition-colors">MINI GT (TSM-MODEL)</h3>
          <p className="font-body-sm text-body-sm text-asphalt-gray mt-2">Dòng mô hình 1:64 tỷ lệ chuẩn xác nhất thế giới bản quyền Liberty Walk, Bugatti, Porsche, Red Bull Racing F1.</p>
        </div>
        <a className="mt-space-md inline-flex items-center gap-2 font-label-caps text-label-caps uppercase text-pure-white hover:text-crimson-heat transition-colors" data-path="mini-gt" href="#">
          <span>XEM BỘ SƯU TẬP MINI GT</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </div>
    </div>
    {/*  Brand 2: Kaido House  */}
    <div className="group relative flex flex-col bg-surface-charcoal/60 overflow-hidden border border-surface-stroke/40 hover:border-racing-orange/60 transition-colors">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Kaido House custom diecast cars by Jun Imai" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQshn7ql_W4XV3kUGasdAbXTFUefQydBHMEDBZtUzAgDXzqpZySioX62xPYaadXzAfNjqvo3oh7dqOBJ71ejYhT4dl8TYbTd3yK3gv-DbxeLXuVEOuH5jsAqAzDz8Ngl1sGgqCud_jUAm6_dKdTakC-Bg1SS7MUYdzrkI5KsnnOUzzrf9MJOuN6NVbYiKB_fHVIwnjU-kBCq2C5tWmNjdjD5Yhmpsx43zCRyChUtT-')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 px-3 py-1 bg-racing-orange text-pure-white font-label-mono text-[11px] font-bold uppercase tracking-wider">JUN IMAI DESIGN</div>
      </div>
      <div className="p-space-lg flex flex-col justify-between flex-1 bg-surface-container-low">
        <div>
          <span className="font-label-mono text-label-mono text-racing-orange uppercase">House of Kolor Paint</span>
          <h3 className="font-headline-lg text-headline-lg text-pure-white uppercase mt-1 group-hover:text-racing-orange transition-colors">KAIDO HOUSE</h3>
          <p className="font-body-sm text-body-sm text-asphalt-gray mt-2">Thiết kế bởi Jun Imai (cựu Giám đốc Thiết kế Hot Wheels), độ chi tiết vượt trội, mở nắp động cơ và cơ chế Chase Car hiếm.</p>
        </div>
        <a className="mt-space-md inline-flex items-center gap-2 font-label-caps text-label-caps uppercase text-pure-white hover:text-racing-orange transition-colors" data-path="kaido-house" href="#">
          <span>XEM BỘ SƯU TẬP KAIDO</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </div>
    </div>
    {/*  Brand 3: Hot Wheels Collectors  */}
    <div className="group relative flex flex-col bg-surface-charcoal/60 overflow-hidden border border-surface-stroke/40 hover:border-pure-white/60 transition-colors">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Hot Wheels Red Line Club and Boulevard collection" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBoYVOppqZtm1vEC1AnwYH3dByC91jeTWgwqr8KDz1vu-NCXLNNS2XNeLScyYp5Nus_8twY_MdZdT32ORjAB7AJDAxk8D2L5REamjnXMOImzHlqX-3EZ808aZm0pFIGdDGUZM0Z5Gd_P9RtVwaucSnJqG77BMG6xSw9vTgaKf6ybudhRMIMnB6-ONtFKv7U1DmNUWsOivtyMoBNyhzVlwqBkaDMedmP_8fpUq3bPQT')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 px-3 py-1 bg-pure-white text-primary-container font-label-mono text-[11px] font-bold uppercase tracking-wider">RLC & BOULEVARD</div>
      </div>
      <div className="p-space-lg flex flex-col justify-between flex-1 bg-surface-container-low">
        <div>
          <span className="font-label-mono text-label-mono text-pure-white uppercase">Sưu tầm có giá trị đầu tư</span>
          <h3 className="font-headline-lg text-headline-lg text-pure-white uppercase mt-1 group-hover:text-crimson-heat transition-colors">HOT WHEELS COLLECTORS & RLC</h3>
          <p className="font-body-sm text-body-sm text-asphalt-gray mt-2">Những mẫu xe hiếm có giá trị sưu tầm tăng giá theo thời gian dành cho các tay chơi kỳ cựu với card bảo vệ Kar Keepers.</p>
        </div>
        <a className="mt-space-md inline-flex items-center gap-2 font-label-caps text-label-caps uppercase text-pure-white hover:text-crimson-heat transition-colors" data-path="hot-wheels" href="#">
          <span>XEM BỘ SƯU TẬP RLC</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </div>
    </div>
  </div>
</section>
  );
}
