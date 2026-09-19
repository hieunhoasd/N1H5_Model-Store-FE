import { Link } from "react-router-dom";
import { useState } from "react";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBiFHOy8vkIJwtITnfj2VBMUjQhX6loCfhTTOwu9wg1vrDK6eHeJc4juYT8516NvxghUlLXyFgnhdhyUI5vgLCUGvQw7hI-JrVszvGzitBTUajcjsjcY853aY6_QeVVfeco4ovHbpmBH3AGv_hLt5NHyu_GqDgnpa8NK62jnUufdXJn0gBZHAGqwrW-HH8gEVryIOPapDl_tOfKubqpgTLE9btJ1MVwJPhKjUDOCiPb";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.fullName.trim() || !form.email.trim() || !form.password || !form.confirmPassword) {
      setError("Vui lòng điền đầy đủ các trường bắt buộc.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Email không đúng định dạng.");
      return;
    }

    if (form.password.length < 8) {
      setError("Mật khẩu phải có ít nhất 8 ký tự.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }

    if (!accepted) {
      setError("Bạn cần đồng ý với điều khoản sử dụng.");
      return;
    }

    // TODO: Replace this demo flow with POST /api/auth/register when the Spring Boot API is ready.
    setMessage("Tạo tài khoản giao diện thành công. Bước tiếp theo là nối API Spring Boot.");
    setForm(initialForm);
    setAccepted(false);
  };

  return (
    <div className="min-h-screen bg-primary-container text-on-surface grid lg:grid-cols-2">
      <section className="relative hidden lg:flex min-h-screen overflow-hidden border-r border-surface-stroke/40 order-2">
        <img src={heroImage} alt="N1H5 Models collector garage" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/60 to-primary-container/20" />
        <div className="absolute inset-0 bg-primary-container/35 mix-blend-multiply" />

        <div className="relative z-10 flex flex-col justify-between w-full p-10 xl:p-16">
          <Link to="/" className="flex items-center gap-3 w-fit group">
            <div className="w-11 h-11 flex items-center justify-center bg-surface-charcoal/90 border border-surface-stroke/60">
              <span className="font-headline-md font-black text-pure-white">N1</span>
            </div>
            <div>
              <div className="font-headline-lg text-2xl tracking-wider text-pure-white uppercase font-black leading-none group-hover:text-crimson-heat transition-colors">
                N1H5<span className="text-crimson-heat">MODELS</span>
              </div>
              <div className="font-label-mono text-[9px] tracking-widest text-asphalt-gray uppercase">DIECAST GARAGE</div>
            </div>
          </Link>

          <div className="max-w-xl">
            <p className="font-label-mono text-label-mono text-racing-orange uppercase tracking-widest font-bold mb-3">BECOME A COLLECTOR</p>
            <h1 className="font-display-hero text-display-hero-mobile xl:text-display-hero text-pure-white uppercase leading-none tracking-tight">
              JOIN THE
              <br />
              <span className="text-crimson-heat">GARAGE.</span>
            </h1>
            <p className="mt-5 text-on-surface-variant max-w-lg font-body-md">
              Tạo tài khoản để lưu wishlist, theo dõi đơn hàng và nhận thông tin sớm về những đợt Chase và Limited mới.
            </p>
          </div>

          <div className="font-label-mono text-[11px] tracking-widest uppercase text-asphalt-gray">
            APEX CLUB // COLLECTOR MEMBERSHIP
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-5 py-10 sm:px-8 bg-surface-container-lowest order-1">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-10">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-surface-charcoal border border-surface-stroke">
                <span className="font-headline-md font-black text-pure-white">N1</span>
              </div>
              <span className="font-headline-lg text-2xl text-pure-white font-black uppercase tracking-wider">
                N1H5<span className="text-crimson-heat">MODELS</span>
              </span>
            </Link>
          </div>

          <div className="mb-7">
            <p className="font-label-mono text-label-mono text-crimson-heat uppercase tracking-widest mb-2">ACCOUNT // REGISTER</p>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-pure-white uppercase tracking-tight">TẠO TÀI KHOẢN</h2>
            <p className="mt-2 text-asphalt-gray font-body-md">Tham gia cộng đồng collector của N1H5 Models.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block mb-2 font-label-caps text-label-caps uppercase text-on-surface-variant">Họ và tên *</label>
              <input id="fullName" name="fullName" value={form.fullName} onChange={update} autoComplete="name" placeholder="Nguyễn Văn A" className="w-full bg-surface-container border border-surface-stroke text-pure-white placeholder:text-asphalt-gray px-4 py-3 outline-none focus:border-crimson-heat focus:ring-1 focus:ring-crimson-heat/40 transition-all" />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-label-caps text-label-caps uppercase text-on-surface-variant">Email *</label>
              <input id="email" name="email" type="email" value={form.email} onChange={update} autoComplete="email" placeholder="collector@example.com" className="w-full bg-surface-container border border-surface-stroke text-pure-white placeholder:text-asphalt-gray px-4 py-3 outline-none focus:border-crimson-heat focus:ring-1 focus:ring-crimson-heat/40 transition-all" />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 font-label-caps text-label-caps uppercase text-on-surface-variant">Số điện thoại</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" placeholder="09xx xxx xxx" className="w-full bg-surface-container border border-surface-stroke text-pure-white placeholder:text-asphalt-gray px-4 py-3 outline-none focus:border-crimson-heat focus:ring-1 focus:ring-crimson-heat/40 transition-all" />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 font-label-caps text-label-caps uppercase text-on-surface-variant">Mật khẩu *</label>
              <div className="relative">
                <input id="password" name="password" type={showPassword ? "text" : "password"} value={form.password} onChange={update} autoComplete="new-password" placeholder="Tối thiểu 8 ký tự" className="w-full bg-surface-container border border-surface-stroke text-pure-white placeholder:text-asphalt-gray px-4 py-3 pr-12 outline-none focus:border-crimson-heat focus:ring-1 focus:ring-crimson-heat/40 transition-all" />
                <button type="button" onClick={() => setShowPassword((visible) => !visible)} className="absolute right-3 top-1/2 -translate-y-1/2 text-asphalt-gray hover:text-pure-white transition-colors" aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}>
                  <span className="material-symbols-outlined text-[20px]">{showPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block mb-2 font-label-caps text-label-caps uppercase text-on-surface-variant">Nhập lại mật khẩu *</label>
              <div className="relative">
                <input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} value={form.confirmPassword} onChange={update} autoComplete="new-password" placeholder="Nhập lại mật khẩu" className="w-full bg-surface-container border border-surface-stroke text-pure-white placeholder:text-asphalt-gray px-4 py-3 pr-12 outline-none focus:border-crimson-heat focus:ring-1 focus:ring-crimson-heat/40 transition-all" />
                <button type="button" onClick={() => setShowConfirmPassword((visible) => !visible)} className="absolute right-3 top-1/2 -translate-y-1/2 text-asphalt-gray hover:text-pure-white transition-colors" aria-label={showConfirmPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}>
                  <span className="material-symbols-outlined text-[20px]">{showConfirmPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm text-asphalt-gray cursor-pointer">
              <input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} className="mt-1 accent-[#FF2A2A]" />
              <span>Tôi đồng ý với <button type="button" className="text-pure-white hover:text-crimson-heat transition-colors">Điều khoản sử dụng</button> và <button type="button" className="text-pure-white hover:text-crimson-heat transition-colors">Chính sách bảo mật</button>.</span>
            </label>

            {error && <p className="p-3 border border-crimson-heat/50 bg-crimson-heat/10 text-[#ff8b8b] text-sm">{error}</p>}
            {message && <p className="p-3 border border-racing-orange/50 bg-racing-orange/10 text-tertiary-fixed text-sm">{message}</p>}

            <button type="submit" className="w-full px-6 py-3.5 bg-crimson-heat hover:bg-racing-orange text-pure-white font-headline-md text-headline-md tracking-wider uppercase transition-colors">
              TẠO TÀI KHOẢN
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-asphalt-gray">
            Đã có tài khoản?{" "}
            <Link to="/login" className="text-pure-white hover:text-crimson-heat transition-colors font-semibold">Đăng nhập</Link>
          </p>

          <Link to="/" className="mt-4 block text-center font-label-mono text-[11px] uppercase tracking-widest text-asphalt-gray hover:text-pure-white transition-colors">
            ← VỀ TRANG CHỦ
          </Link>
        </div>
      </section>
    </div>
  );
}
