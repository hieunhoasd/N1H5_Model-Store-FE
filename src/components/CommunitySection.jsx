export default function CommunitySection() {
  return (
<section className="w-full px-4 lg:px-margin-lg py-space-xl bg-surface-container-lowest border-t border-surface-stroke/40">
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
    <div>
      <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-crimson-heat uppercase font-bold">
        <span>DIECAST COLLECTORS COMMUNITY</span>
        <span>•</span>
        <span>TAG @N1H5MODELS.VN</span>
      </div>
      <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-pure-white uppercase tracking-tight">JOIN THE APEX COMMUNITY // #N1H5MODELS</h2>
    </div>
    <div className="flex items-center gap-space-md">
      <span className="font-label-mono text-label-mono text-asphalt-gray">#N1H5MODELS</span>
      <a className="px-4 py-2 bg-surface-charcoal hover:bg-crimson-heat text-pure-white font-label-caps text-label-caps uppercase transition-colors border border-surface-stroke" href="#">THEO DÕI FANPAGE</a>
    </div>
  </div>
  {/*  Community Showcase Bento  */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
    <div className="relative aspect-square overflow-hidden group border border-surface-stroke/30">
      <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Collector shelf showing hundreds of Hot Wheels and Mini GT models in acrylic cases" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDipxjzCwx77yHA-5hDWCOk-0yZEg13HLNmKJz9PSAxU63omx-mt6kPNs5X-aoeluL1EdWLKeoVbzM0zcSaSq7TGjLgdw_Ie-nRh1zpYzOSiBWSSgLPoice-jCfZRYgsn-ALsYbVmxqcZDObhk6HMn1Nm0B4gacpQxZ4RrQyZ-BOhUzX-uSS5EClZhrO9__wG1jL34Xh6heSuD8MBmaGLoka8jZ1dz5vGpXayZEgOzT')"}}></div>
      <div className="absolute inset-0 bg-primary-container/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="font-label-mono text-label-mono text-pure-white uppercase">@saigon_diecast_hub</span>
      </div>
    </div>
    <div className="relative aspect-square overflow-hidden group border border-surface-stroke/30">
      <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Close up photography of Kaido House Datsun model car on miniature street diorama" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNUZJYTvqh5QgaXNYItdgdm2J1clODwUsd9CRXzgkYJ6UNyEfnK8whlgolZNnWkKITXGTnzwjGvmIALaH6J1UHJO1m0yKMAwdci23moW67sqhkvTYjKA3svKd4R7y2-nqKCruV4oYYGyNmCQZubPdr_owmDkR4Wh8t-XmB0d3MaBVCwT08uhYRmmf__dLkIeZ4dUr6x0zbDES9nrOP94xvCMyIj2_yel4ITRuGY-sR')"}}></div>
      <div className="absolute inset-0 bg-primary-container/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="font-label-mono text-label-mono text-pure-white uppercase">@kaido_vietnam_collector</span>
      </div>
    </div>
    <div className="relative aspect-square overflow-hidden group border border-surface-stroke/30">
      <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Custom glass LED cabinet displaying 1:64 and 1:43 sports cars" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwIezh-c7zbJHyBcwd5grgu2fcxRGYLIFyM8F1GtnLVWU04XAx9eBd0JqOhFyKDbyVYw_aPqkRxQdiRaEJpmDlK6g1P-VbikM42zMh0hPyVbdn4DwClqY_h0oCTacqScPCaIkmqOqo0PcOjCGQOtgC5ox1mddrW8OAeGFbKW49HdK2JCHrI6POmeyzpcCMVBpWWOazZZvG0h6f4M3LMS_zwAyX6p8YY3KX3MJtYAYh')"}}></div>
      <div className="absolute inset-0 bg-primary-container/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="font-label-mono text-label-mono text-pure-white uppercase">@hanoi.diecast.garage</span>
      </div>
    </div>
    <div className="relative aspect-square overflow-hidden group border border-surface-stroke/30">
      <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Outdoor street photography of 1:64 scale GT-R model placed on real pavement" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVKhLVoB2G_QBMK62ahyxgdrvrVUkvUP8MVdC9xwSc5USQ7MIY7FMrro8rlpBunSfF0N37Jbt2uz5g3nhrhNwlRdyYpthq9vNi2Ch9HfRS8pufqnQtO-xVGoIW418qwDm5AaGQ0YGvzSqZPkD7bAo-Gdn8qLhFzH51cMGcAU-0mX2ITVvJdJBcWKtTRIQMAPy8tVnhNPM3BxtzQG8kQUkqkZljEy_I3d4m7aWtShLW')"}}></div>
      <div className="absolute inset-0 bg-primary-container/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="font-label-mono text-label-mono text-pure-white uppercase">@speed_hunter_mini</span>
      </div>
    </div>
  </div>
</section>
  );
}
