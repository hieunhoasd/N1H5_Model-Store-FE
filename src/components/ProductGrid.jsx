export default function ProductGrid() {
  return (
<section className="w-full px-4 lg:px-margin-lg py-space-xl bg-primary-container">
  {/*  Section Header with Editorial Indexing  */}
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
    <div>
      <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-crimson-heat uppercase mb-1">
        <span>N1H5 CATALOGUE // 2024</span>
        <span>•</span>
        <span className="text-asphalt-gray">DIECAST SCALE GARAGE RELEASES</span>
      </div>
      <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-pure-white uppercase tracking-tight">NEW DIECAST DROPS</h2>
    </div>
    <a className="group inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase text-pure-white hover:text-crimson-heat transition-colors" data-path="shop" href="#">
      <span>XEM TẤT CẢ 250+ MẪU XE</span>
      <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
    </a>
  </div>
  {/*  Product Grid: 5 columns desktop, 2 columns mobile  */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
    {/*  Product 1  */}
    <div className="group flex flex-col bg-surface-container-low p-space-sm transition-all duration-200 hover:bg-surface-charcoal border border-surface-stroke/30 hover:border-crimson-heat/60">
      <div className="relative aspect-[3/4] w-full bg-surface-container-lowest overflow-hidden">
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-crimson-heat text-pure-white font-label-mono text-[10px] font-bold uppercase">BEST SELLER</div>
        <button aria-label="Add to Wishlist" className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-surface-charcoal/80 text-pure-white flex items-center justify-center hover:text-crimson-heat transition-colors" type="button">
          <span className="material-symbols-outlined text-[16px]">favorite</span>
        </button>
        <div className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="Mini GT LB-Silhouette WORKS GT Nissan 35GT-RR Ver.1 Matte Black diecast scale 1:64 model" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmvIUHXScM8PiE2RrT6J5MdFVN_PZvpISyxfh8MseL6UbnpgCFds_zPt2c8f6RV-rfHWn2WqI4IrhzZOfKL2aMXD_gVm2OpxKOhZERe7hDF2D35IAOzQPQlqoR5DCua-q_2VKLNARL-JypIyIh19E3bF_xtiP7uNNYDcTehC2rhVW7_Q3EEtyPxhKUvmkldP63o1CjdjqABJk9OE3GSQSkctgCA3odrFUFP9A_YmZS')"}}></div>
        <div className="absolute bottom-0 inset-x-0 bg-surface-charcoal/90 backdrop-blur-md p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex items-center justify-between font-label-mono text-[11px] text-pure-white">
          <span>TỈ LỆ 1:64</span>
          <button className="px-2 py-0.5 bg-crimson-heat text-pure-white uppercase font-bold hover:bg-racing-orange transition-colors" type="button">+ THÊM GIỎ</button>
        </div>
      </div>
      <div className="pt-space-sm flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-1 font-label-mono text-[10px] text-asphalt-gray uppercase">
            <span className="text-crimson-heat font-semibold">MINI GT #542</span>
            <span>•</span>
            <span>LIBERTY WALK</span>
          </div>
          <h3 className="font-headline-md text-[16px] text-pure-white uppercase tracking-tight line-clamp-2 group-hover:text-crimson-heat transition-colors">Mô hình Mini GT Nissan 35GT-RR Ver.1 Matte Black</h3>
        </div>
        <div className="mt-2 flex items-baseline justify-between font-label-mono">
          <span className="text-pure-white font-bold text-[16px]">320.000₫</span>
          <span className="text-asphalt-gray text-[11px]">MGT00542</span>
        </div>
      </div>
    </div>
    {/*  Product 2  */}
    <div className="group flex flex-col bg-surface-container-low p-space-sm transition-all duration-200 hover:bg-surface-charcoal border border-surface-stroke/30 hover:border-racing-orange/60">
      <div className="relative aspect-[3/4] w-full bg-surface-container-lowest overflow-hidden">
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-racing-orange text-pure-white font-label-mono text-[10px] font-bold uppercase">CHASE CHANCE</div>
        <button aria-label="Add to Wishlist" className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-surface-charcoal/80 text-pure-white flex items-center justify-center hover:text-crimson-heat transition-colors" type="button">
          <span className="material-symbols-outlined text-[16px]">favorite</span>
        </button>
        <div className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="Kaido House x Mini GT Datsun 510 Pro Street OG Orange diecast car" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfi-g9_IfNUNpuCw6Psv-eOMTCgT8iqlkY1luQ8NBiGFUxEzIsruTxPLzwt-f4HInWkLQ3RfIOC4mY5QodjkHCLNuYceBJBjvtNyomV41aPwJHATxOZzES4kdS_DinDnYQXD2NclqRuN5s2astC9kMc5k4CcZd35zBFy21yX-eCW2f3BwBH6PX-3L5jqPMv6IccqDKbqlobYG36KdyKGnTB3H-5Z56sIC1UZ17DKgF')"}}></div>
        <div className="absolute bottom-0 inset-x-0 bg-surface-charcoal/90 backdrop-blur-md p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex items-center justify-between font-label-mono text-[11px] text-pure-white">
          <span>MỞ NẮP CAPO</span>
          <button className="px-2 py-0.5 bg-racing-orange text-pure-white uppercase font-bold hover:bg-crimson-heat transition-colors" type="button">+ THÊM GIỎ</button>
        </div>
      </div>
      <div className="pt-space-sm flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-1 font-label-mono text-[10px] text-asphalt-gray uppercase">
            <span className="text-racing-orange font-semibold">KAIDO HOUSE</span>
            <span>•</span>
            <span>JUN IMAI</span>
          </div>
          <h3 className="font-headline-md text-[16px] text-pure-white uppercase tracking-tight line-clamp-2 group-hover:text-racing-orange transition-colors">Kaido House Datsun 510 Pro Street OG Orange 1:64</h3>
        </div>
        <div className="mt-2 flex items-baseline justify-between font-label-mono">
          <span className="text-pure-white font-bold text-[16px]">580.000₫</span>
          <span className="text-asphalt-gray text-[11px]">KHMG003</span>
        </div>
      </div>
    </div>
    {/*  Product 3  */}
    <div className="group flex flex-col bg-surface-container-low p-space-sm transition-all duration-200 hover:bg-surface-charcoal border border-surface-stroke/30 hover:border-crimson-heat/60">
      <div className="relative aspect-[3/4] w-full bg-surface-container-lowest overflow-hidden">
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-crimson-heat text-pure-white font-label-mono text-[10px] font-bold uppercase">RLC EXCLUSIVE</div>
        <button aria-label="Add to Wishlist" className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-surface-charcoal/80 text-pure-white flex items-center justify-center hover:text-crimson-heat transition-colors" type="button">
          <span className="material-symbols-outlined text-[16px]">favorite</span>
        </button>
        <div className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="Hot Wheels Red Line Club RLC 1993 Ford Mustang Cobra R Limited diecast model" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3zsVM-WUcge1wdxIPvCwjWb2UYYxfsKxYJb30Da-noGdLC6F6felNuNOHnc26Q9EEe35sMLD_lHJ31T7qXZARyIsLvgVttA_h0eywQ3Jjx2imCgGi_NszeJfrMwrAKKPjXBLmgzJ9M4WHgWDMz54M-fBkyE0sBRsGlrLaNACAhcUulZagIfmoTVuQelbCvNNbyD-ttoL0iqLp0m5Wwq5r7zPA0L80fAYxspK0gZ_B')"}}></div>
        <div className="absolute bottom-0 inset-x-0 bg-surface-charcoal/90 backdrop-blur-md p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex items-center justify-between font-label-mono text-[11px] text-pure-white">
          <span>SƠN SPECTRAFLAME</span>
          <button className="px-2 py-0.5 bg-crimson-heat text-pure-white uppercase font-bold hover:bg-racing-orange transition-colors" type="button">+ THÊM GIỎ</button>
        </div>
      </div>
      <div className="pt-space-sm flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-1 font-label-mono text-[10px] text-asphalt-gray uppercase">
            <span className="text-crimson-heat font-semibold">HOT WHEELS RLC</span>
            <span>•</span>
            <span>ĐÁNH SỐ NO. SERI</span>
          </div>
          <h3 className="font-headline-md text-[16px] text-pure-white uppercase tracking-tight line-clamp-2 group-hover:text-crimson-heat transition-colors">Hot Wheels RLC 1993 Ford Mustang Cobra R Limited</h3>
        </div>
        <div className="mt-2 flex items-baseline justify-between font-label-mono">
          <span className="text-pure-white font-bold text-[16px]">1.450.000₫</span>
          <span className="text-asphalt-gray text-[11px]">HW-RLC93</span>
        </div>
      </div>
    </div>
    {/*  Product 4  */}
    <div className="group flex flex-col bg-surface-container-low p-space-sm transition-all duration-200 hover:bg-surface-charcoal border border-surface-stroke/30 hover:border-pure-white/60">
      <div className="relative aspect-[3/4] w-full bg-surface-container-lowest overflow-hidden">
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-pure-white text-primary-container font-label-mono text-[10px] font-bold uppercase">PREMIUM JDM</div>
        <button aria-label="Add to Wishlist" className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-surface-charcoal/80 text-pure-white flex items-center justify-center hover:text-crimson-heat transition-colors" type="button">
          <span className="material-symbols-outlined text-[16px]">favorite</span>
        </button>
        <div className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="Inno64 Nissan Skyline GT-R R34 Nismo R-Tune Midnight Purple III in clear acrylic case" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZzX1RzTFTVkepvOjF86Et5dRD39l7LoEYeo_TuCgTfwuFttsSxmjSOlkc6RSL6Ie96Xou13yMUSba6Y-cJ6Diort_erM5Kb4t9sZNPkTVz0Svdk74wR7bV5ysmq9IvwS_01yWoa5AQw_E3W7vUMWke7NAh1yxPaINYOYcDZgvmjSfVlYrVT3aD79_RoydVfuXc1hOQoNFSJhlBsDHCMVHPHdCB4VmLHdu2-qaioHo')"}}></div>
        <div className="absolute bottom-0 inset-x-0 bg-surface-charcoal/90 backdrop-blur-md p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex items-center justify-between font-label-mono text-[11px] text-pure-white">
          <span>KÈM HỘP MICA TRƯNG BÀY</span>
          <button className="px-2 py-0.5 bg-pure-white text-primary-container uppercase font-bold hover:bg-crimson-heat hover:text-pure-white transition-colors" type="button">+ THÊM GIỎ</button>
        </div>
      </div>
      <div className="pt-space-sm flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-1 font-label-mono text-[10px] text-asphalt-gray uppercase">
            <span className="text-pure-white font-semibold">INNO64</span>
            <span>•</span>
            <span>MIDNIGHT PURPLE</span>
          </div>
          <h3 className="font-headline-md text-[16px] text-pure-white uppercase tracking-tight line-clamp-2 group-hover:text-crimson-heat transition-colors">Inno64 Skyline GT-R R34 Nismo R-Tune Purple III</h3>
        </div>
        <div className="mt-2 flex items-baseline justify-between font-label-mono">
          <span className="text-pure-white font-bold text-[16px]">620.000₫</span>
          <span className="text-asphalt-gray text-[11px]">INNO-R34MP</span>
        </div>
      </div>
    </div>
    {/*  Product 5  */}
    <div className="group flex flex-col bg-surface-container-low p-space-sm transition-all duration-200 hover:bg-surface-charcoal border border-surface-stroke/30 hover:border-racing-orange/60">
      <div className="relative aspect-[3/4] w-full bg-surface-container-lowest overflow-hidden">
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-racing-orange text-pure-white font-label-mono text-[10px] font-bold uppercase">NEW DROP</div>
        <button aria-label="Add to Wishlist" className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-surface-charcoal/80 text-pure-white flex items-center justify-center hover:text-crimson-heat transition-colors" type="button">
          <span className="material-symbols-outlined text-[16px]">favorite</span>
        </button>
        <div className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="Tarmac Works Pagani Zonda Revolucion Matte Carbon 1:64 hypercar scale model" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWU-MxxFbV_ee_M_VxcMZS6RtrAdN-VPk-AbbJvEAvhAvooO0L_zvB65MGjcGdIrG2P9ycNK2hkz_4vbihgUMqifhIfIbmdcDSN0WJ7vzvLGS20Y5qC_CCK9wotEEiFyWId2M__jOjPPr8fhnYzEKAmjSA879I99V-Q0QbApdHdoBXllaKdfeAaxlx4_FDTxAKOF_LRQyIrepL_s7Pl0vuxURHLo3RumiLriVS6kMk')"}}></div>
        <div className="absolute bottom-0 inset-x-0 bg-surface-charcoal/90 backdrop-blur-md p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex items-center justify-between font-label-mono text-[11px] text-pure-white">
          <span>CARBON FINISH</span>
          <button className="px-2 py-0.5 bg-racing-orange text-pure-white uppercase font-bold hover:bg-crimson-heat transition-colors" type="button">+ THÊM GIỎ</button>
        </div>
      </div>
      <div className="pt-space-sm flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-1 font-label-mono text-[10px] text-asphalt-gray uppercase">
            <span className="text-racing-orange font-semibold">TARMAC WORKS</span>
            <span>•</span>
            <span>HYPERCAR</span>
          </div>
          <h3 className="font-headline-md text-[16px] text-pure-white uppercase tracking-tight line-clamp-2 group-hover:text-racing-orange transition-colors">Tarmac Works Pagani Zonda Revolucion Matte Carbon</h3>
        </div>
        <div className="mt-2 flex items-baseline justify-between font-label-mono">
          <span className="text-pure-white font-bold text-[16px]">490.000₫</span>
          <span className="text-asphalt-gray text-[11px]">T64-018-CAR</span>
        </div>
      </div>
    </div>
    {/*  Product 6  */}
    <div className="group flex flex-col bg-surface-container-low p-space-sm transition-all duration-200 hover:bg-surface-charcoal border border-surface-stroke/30 hover:border-crimson-heat/60">
      <div className="relative aspect-[3/4] w-full bg-surface-container-lowest overflow-hidden">
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-crimson-heat text-pure-white font-label-mono text-[10px] font-bold uppercase">NEW DROP</div>
        <button aria-label="Add to Wishlist" className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-surface-charcoal/80 text-pure-white flex items-center justify-center hover:text-crimson-heat transition-colors" type="button">
          <span className="material-symbols-outlined text-[16px]">favorite</span>
        </button>
        <div className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="Mini GT #608 Porsche 911 992 GT3 RS Guards Red scale 1:64" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrSowfdfde4n2l_1vZ2LSuwdG8Cjfeu_fVXOcAfUkw0QxzwCMTFuFF-UIGZ0RA2OwTS3dKOo4eiOxdnTJen8fU4cr0Bn_AzY6kNx1gvju93Jo6sr8UygVB74f3RuW6c713VcV2r_nPPYL0Tf_lhFgzF_IWMj03-KkNJBhYf1sKnm-_jgCF3vgNQY9i0ufEiwPWz33dQjyS5AwvGCBpbAwO2EDcH0j4oMe7c7GF38qf')"}}></div>
        <div className="absolute bottom-0 inset-x-0 bg-surface-charcoal/90 backdrop-blur-md p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex items-center justify-between font-label-mono text-[11px] text-pure-white">
          <span>CÁNH GIÓ KHÍ ĐỘNG HỌC</span>
          <button className="px-2 py-0.5 bg-crimson-heat text-pure-white uppercase font-bold hover:bg-racing-orange transition-colors" type="button">+ THÊM GIỎ</button>
        </div>
      </div>
      <div className="pt-space-sm flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-1 font-label-mono text-[10px] text-asphalt-gray uppercase">
            <span className="text-crimson-heat font-semibold">MINI GT #608</span>
            <span>•</span>
            <span>PORSCHE OFFICIAL</span>
          </div>
          <h3 className="font-headline-md text-[16px] text-pure-white uppercase tracking-tight line-clamp-2 group-hover:text-crimson-heat transition-colors">Mini GT #608 Porsche 911 (992) GT3 RS Guards Red 1:64</h3>
        </div>
        <div className="mt-2 flex items-baseline justify-between font-label-mono">
          <span className="text-pure-white font-bold text-[16px]">340.000₫</span>
          <span className="text-asphalt-gray text-[11px]">MGT00608</span>
        </div>
      </div>
    </div>
    {/*  Product 7  */}
    <div className="group flex flex-col bg-surface-container-low p-space-sm transition-all duration-200 hover:bg-surface-charcoal border border-surface-stroke/30 hover:border-racing-orange/60">
      <div className="relative aspect-[3/4] w-full bg-surface-container-lowest overflow-hidden">
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-racing-orange text-pure-white font-label-mono text-[10px] font-bold uppercase">HOT DROP</div>
        <button aria-label="Add to Wishlist" className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-surface-charcoal/80 text-pure-white flex items-center justify-center hover:text-crimson-heat transition-colors" type="button">
          <span className="material-symbols-outlined text-[16px]">favorite</span>
        </button>
        <div className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="Kaido House Chevrolet Silverado Dually Kaido Works Black Chrome heavy custom truck" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPRPoVNE_jtA1mQMQqVmXJU28vohFsYCMZfLTJGmkHUglSBk4IHZtpGHAoBZ6yDO3aoQNObEdCvXZJsEqnMXFjUm_UxpnvA2SYv-Xobgha000K9tdvr5_-ew47Dg_y8Ii3A-w_fxNJEamuOwkQWhcxl8Nztc-jOlOc0L_tAQZzbqkGC_ZT6xgSTpLveiUh0b1Vjc9_8jzxxyTpPfrOEp08GTOlt8s0Ic4Z--2Fk3bQ')"}}></div>
        <div className="absolute bottom-0 inset-x-0 bg-surface-charcoal/90 backdrop-blur-md p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex items-center justify-between font-label-mono text-[11px] text-pure-white">
          <span>MÂM KÉP DUALLY</span>
          <button className="px-2 py-0.5 bg-racing-orange text-pure-white uppercase font-bold hover:bg-crimson-heat transition-colors" type="button">+ THÊM GIỎ</button>
        </div>
      </div>
      <div className="pt-space-sm flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-1 font-label-mono text-[10px] text-asphalt-gray uppercase">
            <span className="text-racing-orange font-semibold">KAIDO HOUSE</span>
            <span>•</span>
            <span>CHEVROLET DUALLY</span>
          </div>
          <h3 className="font-headline-md text-[16px] text-pure-white uppercase tracking-tight line-clamp-2 group-hover:text-racing-orange transition-colors">Kaido House Silverado Dually Kaido Works Black Chrome</h3>
        </div>
        <div className="mt-2 flex items-baseline justify-between font-label-mono">
          <span className="text-pure-white font-bold text-[16px]">650.000₫</span>
          <span className="text-asphalt-gray text-[11px]">KHMG044</span>
        </div>
      </div>
    </div>
    {/*  Product 8 (Sold Out)  */}
    <div className="group flex flex-col bg-surface-container-low p-space-sm transition-all duration-200 hover:bg-surface-charcoal border border-surface-stroke/30">
      <div className="relative aspect-[3/4] w-full bg-surface-container-lowest overflow-hidden">
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-surface-charcoal text-asphalt-gray font-label-mono text-[10px] font-bold uppercase border border-surface-stroke">SOLD OUT</div>
        <div className="w-full h-full bg-cover bg-center grayscale contrast-125" data-alt="Hot Wheels Boulevard 98 Subaru Impreza 22B STi Real Riders" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbDrXofiq6Rzm_IcxhGT6aF6ScjPf7YyDHzape7qMTlvxCgZWbPSevRUn53sz6AlYbReiNQn2lAEho2Btpk8NX5AtNAVuc8MOG_oKHcW8HZJe1b8uXa3s8cmUsAMVTiZaF9dBaD5tqOWo7g2bQr11IraEYHBp0ZG8jCTbsYhh1CvEZ3rNVUypUJaG6CjVEVDELstWtfRt7sBCZXzebeyQDvski3DVK7qFmPptPcdxc')"}}></div>
        <div className="absolute inset-0 bg-primary-container/60 flex items-center justify-center">
          <span className="px-3 py-1 bg-crimson-heat/90 text-pure-white font-label-caps text-label-caps tracking-widest uppercase font-bold">HẾT HÀNG</span>
        </div>
      </div>
      <div className="pt-space-sm flex flex-col flex-1 justify-between opacity-70">
        <div>
          <div className="flex items-center gap-1.5 mb-1 font-label-mono text-[10px] text-asphalt-gray uppercase">
            <span>HOT WHEELS</span>
            <span>•</span>
            <span>BOULEVARD #48</span>
          </div>
          <h3 className="font-headline-md text-[16px] text-pure-white uppercase tracking-tight line-clamp-2">Hot Wheels '98 Subaru Impreza 22B STi Real Riders</h3>
        </div>
        <div className="mt-2 flex items-baseline justify-between font-label-mono">
          <span className="text-asphalt-gray line-through">210.000₫</span>
          <span className="text-crimson-heat text-[11px] font-bold">RESTOCK SỚM</span>
        </div>
      </div>
    </div>
    {/*  Product 9  */}
    <div className="group flex flex-col bg-surface-container-low p-space-sm transition-all duration-200 hover:bg-surface-charcoal border border-surface-stroke/30 hover:border-crimson-heat/60">
      <div className="relative aspect-[3/4] w-full bg-surface-container-lowest overflow-hidden">
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-pure-white text-primary-container font-label-mono text-[10px] font-bold uppercase">CHÍNH HÃNG NHẬT</div>
        <button aria-label="Add to Wishlist" className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-surface-charcoal/80 text-pure-white flex items-center justify-center hover:text-crimson-heat transition-colors" type="button">
          <span className="material-symbols-outlined text-[16px]">favorite</span>
        </button>
        <div className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="Tomica Limited Vintage Neo Ferrari F40 Red high precision Japanese scale 1:64" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAONPn0qSG2SByt_eTJJbt8yJOgx-JyDenzYV7UBKKqsVFEwOLgj04OA8NvA-LY0rSLtg40FojZJHxG1ULBL0UPb4xBgkIM3SVidVS7mz9sGnNOiV-ON_LwinUUrG9y6CU4gjUD6iY88DrHA1T5Y4u2Nid72z3A5p-MtmgFeElvzwbqnIJF4_h1aprZCZIeZbwb-NnW1Pfet3kyGWVk1csdxXuyUG5ICUS9gEPDjnG1')"}}></div>
        <div className="absolute bottom-0 inset-x-0 bg-surface-charcoal/90 backdrop-blur-md p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex items-center justify-between font-label-mono text-[11px] text-pure-white">
          <span>MỞ NẮP ĐỘNG CƠ SAU</span>
          <button className="px-2 py-0.5 bg-crimson-heat text-pure-white uppercase font-bold hover:bg-racing-orange transition-colors" type="button">+ THÊM GIỎ</button>
        </div>
      </div>
      <div className="pt-space-sm flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-1 font-label-mono text-[10px] text-asphalt-gray uppercase">
            <span className="text-crimson-heat font-semibold">TOMICA TLVN</span>
            <span>•</span>
            <span>FERRARI OFFICIAL</span>
          </div>
          <h3 className="font-headline-md text-[16px] text-pure-white uppercase tracking-tight line-clamp-2 group-hover:text-crimson-heat transition-colors">Tomica Limited Vintage Neo Ferrari F40 Red 1:64</h3>
        </div>
        <div className="mt-2 flex items-baseline justify-between font-label-mono">
          <span className="text-pure-white font-bold text-[16px]">1.850.000₫</span>
          <span className="text-asphalt-gray text-[11px]">TLV-NEO-F40</span>
        </div>
      </div>
    </div>
    {/*  Product 10  */}
    <div className="group flex flex-col bg-surface-container-low p-space-sm transition-all duration-200 hover:bg-surface-charcoal border border-surface-stroke/30 hover:border-racing-orange/60">
      <div className="relative aspect-[3/4] w-full bg-surface-container-lowest overflow-hidden">
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-racing-orange text-pure-white font-label-mono text-[10px] font-bold uppercase">PHỤ KIỆN</div>
        <button aria-label="Add to Wishlist" className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-surface-charcoal/80 text-pure-white flex items-center justify-center hover:text-crimson-heat transition-colors" type="button">
          <span className="material-symbols-outlined text-[16px]">favorite</span>
        </button>
        <div className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" data-alt="Diorama Garage LED Illuminated display parking space for 1:64 diecast models" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBe9Lv4Mq0rb9CJcnYAHavVb2oxZ2FbFAgPRcomskwWY0Fsyui7kEKMUgN2Uti4PbjhNKr2b51yujVUDAPFfAFsJd6p89ZRsVZGZLz7UrPpWl_90NCI_MuFwvjG9o1-_hOXzc_hbOoo76RRVyUD9qyty7clT8VZaN6m5L-AD1QhspRlFL5BaB8gPSbjK8-VPRZWDPVNoV6vlKylZRYJHOMVp7ot_H22iW2X0kag205f')"}}></div>
        <div className="absolute bottom-0 inset-x-0 bg-surface-charcoal/90 backdrop-blur-md p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200 flex items-center justify-between font-label-mono text-[11px] text-pure-white">
          <span>CẮM NGUỒN USB 5V</span>
          <button className="px-2 py-0.5 bg-racing-orange text-pure-white uppercase font-bold hover:bg-crimson-heat transition-colors" type="button">+ THÊM GIỎ</button>
        </div>
      </div>
      <div className="pt-space-sm flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-1 font-label-mono text-[10px] text-asphalt-gray uppercase">
            <span className="text-racing-orange font-semibold">SA BÀN DIORAMA</span>
            <span>•</span>
            <span>CHỨA ĐƯỢC 6 XE</span>
          </div>
          <h3 className="font-headline-md text-[16px] text-pure-white uppercase tracking-tight line-clamp-2 group-hover:text-racing-orange transition-colors">Sa Bàn Garage Gara Diorama LED Chiếu Sáng Xe 1:64</h3>
        </div>
        <div className="mt-2 flex items-baseline justify-between font-label-mono">
          <span className="text-pure-white font-bold text-[16px]">750.000₫</span>
          <span className="text-asphalt-gray text-[11px]">DIO-GARAGE-LED</span>
        </div>
      </div>
    </div>
  </div>
  {/*  Load More Button  */}
  <div className="mt-space-xl flex flex-col items-center justify-center gap-space-xs">
    <button className="px-10 py-3 bg-surface-charcoal hover:bg-crimson-heat border border-surface-stroke text-pure-white font-headline-md text-headline-md uppercase tracking-wider transition-all duration-200 shadow-md" type="button">TẢI THÊM 24+ MẪU XE KHÁC</button>
    <span className="font-label-mono text-label-mono text-asphalt-gray">Hiển thị 10 trong số 250+ sản phẩm nguyên seal</span>
  </div>
</section>
  );
}
