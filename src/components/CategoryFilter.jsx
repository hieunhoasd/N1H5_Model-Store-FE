export default function CategoryFilter() {
  return (
<section className="sticky top-20 z-40 w-full bg-primary-container/95 backdrop-blur-xl py-space-sm px-4 lg:px-margin-lg shadow-md border-b border-surface-stroke/40">
  <div className="flex items-center justify-between gap-space-md overflow-x-auto no-scrollbar">
    <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-wider shrink-0" id="category-filter-group">
      <button className="px-5 py-2 rounded-full bg-crimson-heat text-pure-white font-bold transition-colors" type="button">TẤT CẢ MÔ HÌNH</button>
      <button className="px-5 py-2 rounded-full bg-surface-charcoal/90 text-on-surface-variant hover:text-pure-white hover:bg-surface-variant transition-colors" type="button">HOT WHEELS PREMIUM</button>
      <button className="px-5 py-2 rounded-full bg-surface-charcoal/90 text-on-surface-variant hover:text-pure-white hover:bg-surface-variant transition-colors" type="button">MINI GT 1:64</button>
      <button className="px-5 py-2 rounded-full bg-surface-charcoal/90 text-on-surface-variant hover:text-pure-white hover:bg-surface-variant transition-colors" type="button">KAIDO HOUSE HOUSE OF KOLOR</button>
      <button className="px-5 py-2 rounded-full bg-surface-charcoal/90 text-on-surface-variant hover:text-pure-white hover:bg-surface-variant transition-colors" type="button">INNO64 JDM</button>
      <button className="px-5 py-2 rounded-full bg-surface-charcoal/90 text-on-surface-variant hover:text-pure-white hover:bg-surface-variant transition-colors" type="button">TARMAC WORKS</button>
      <button className="px-5 py-2 rounded-full bg-surface-charcoal/90 text-on-surface-variant hover:text-pure-white hover:bg-surface-variant transition-colors" type="button">TOMICA LIMITED VINTAGE</button>
      <button className="px-5 py-2 rounded-full bg-surface-charcoal/90 text-on-surface-variant hover:text-pure-white hover:bg-surface-variant transition-colors" type="button">XE ĐUA F1</button>
    </div>
    <div className="hidden md:flex items-center gap-space-sm font-label-mono text-label-mono text-asphalt-gray shrink-0">
      <span>HIỂN THỊ: 10 MẪU XE HOT</span>
      <span className="w-1.5 h-1.5 rounded-full bg-crimson-heat"></span>
    </div>
  </div>
</section>
  );
}
