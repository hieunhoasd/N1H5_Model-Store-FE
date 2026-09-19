import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDqEgYPv-Dnn_KWF-eV39HDjYnW2yk8EjgPwwqsqa7dQqjAfEBrlW7q84KJIVKL0q5krRcZs7RnlFl8iTLOOfXoeRWJoubpdpnITrcNefAqX86vaJnKwTBDcDstV1omOWBVnsqxJPSk37HQJm6UCJeIl60WKCmI3CRSA9ZoNNyj6XCUJcgQOvwLFRGshoedmGA04MTPhOgHitQH0faMWCFZQ1YVcVTtXXJphp1ydYHv";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
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

    if (!form.identifier.trim() || !form.password) {
      setError("Vui lòng nhập email/tên đăng nhập và mật khẩu.");
      return;
    }

    // TODO: Replace this demo flow with POST /api/auth/login when the Spring Boot API is ready.
    setMessage("Đăng nhập giao diện thành công. Bước tiếp theo là nối API Spring Boot.");
  };

  return (
    <div className="min-h-screen bg-primary-container text-on-surface grid lg:grid-cols-2">
      <section className="relative hidden lg:flex min-h-screen overflow-hidden border-r border-surface-stroke/40">
        <img
          src={heroImage}
          alt="N1H5 Models diecast garage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/60 to-primary-container/20" />
        <div className="absolute inset-0 bg-primary-container/30 mix-blend-multiply" />

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
            <p className="font-label-mono text-label-mono text-racing-orange uppercase tracking-widest font-bold mb-3">COLLECTOR ACCOUNT</p>
            <h1 className="font-display-hero text-display-hero-mobile xl:text-display-hero text-pure-white uppercase leading-none tracking-tight">
              WELCOME
              <br />
              <span className="text-crimson-heat">BACK.</span>
            </h1>
            <p className="mt-5 text-on-surface-variant max-w-lg font-body-md">
              Đăng nhập để quản lý wishlist, đơn hàng, voucher và bộ sưu tập mô hình của bạn.
            </p>
          </div>

          <div className="font-label-mono text-[11px] tracking-widest uppercase text-asphalt-gray">
            N1H5 MODELS // 1:64 — 1:18
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-5 py-10 sm:px-8 bg-surface-container-lowest">
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

          <div className="mb-8">
            <p className="font-label-mono text-label-mono text-crimson-heat uppercase tracking-widest mb-2">ACCOUNT // LOGIN</p>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-pure-white uppercase tracking-tight">ĐĂNG NHẬP</h2>
            <p className="mt-2 text-asphalt-gray font-body-md">Chào mừng bạn quay lại garage.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="identifier" className="block mb-2 font-label-caps text-label-caps uppercase text-on-surface-variant">Email hoặc tên đăng nhập</label>
              <input
                id="identifier"
                name="identifier"
                type="text"
                value={form.identifier}
                onChange={update}
                autoComplete="username"
                placeholder="collector@example.com"
                className="w-full bg-surface-container border border-surface-stroke text-pure-white placeholder:text-asphalt-gray px-4 py-3 outline-none transition-all focus:border-crimson-heat focus:ring-1 focus:ring-crimson-heat/40"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="font-label-caps text-label-caps uppercase text-on-surface-variant">Mật khẩu</label>
                <button type="button" className="font-label-mono text-[11px] uppercase tracking-wider text-asphalt-gray hover:text-crimson-heat transition-colors">Quên mật khẩu?</button>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={update}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full bg-surface-container border border-surface-stroke text-pure-white placeholder:text-asphalt-gray px-4 py-3 pr-12 outline-none transition-all focus:border-crimson-heat focus:ring-1 focus:ring-crimson-heat/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-asphalt-gray hover:text-pure-white transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">{showPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </div>

            {error && <p className="p-3 border border-crimson-heat/50 bg-crimson-heat/10 text-[#ff8b8b] text-sm">{error}</p>}
            {message && <p className="p-3 border border-racing-orange/50 bg-racing-orange/10 text-tertiary-fixed text-sm">{message}</p>}

            <button type="submit" className="w-full px-6 py-3.5 bg-crimson-heat hover:bg-racing-orange text-pure-white font-headline-md text-headline-md tracking-wider uppercase transition-colors">
              ĐĂNG NHẬP
            </button>
          </form>

          <div className="my-7 flex items-center gap-4">
            <span className="h-px flex-1 bg-surface-stroke" />
            <span className="font-label-mono text-[10px] text-asphalt-gray uppercase tracking-widest">hoặc</span>
            <span className="h-px flex-1 bg-surface-stroke" />
          </div>

          <button type="button" className="w-full px-6 py-3 border border-surface-stroke text-pure-white hover:bg-surface-charcoal transition-colors font-label-caps text-label-caps uppercase flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">account_circle</span>
            Tiếp tục với Google
          </button>

          <p className="mt-8 text-center text-sm text-asphalt-gray">
            Chưa có tài khoản?{" "}
            <Link to="/register" className="text-pure-white hover:text-crimson-heat transition-colors font-semibold">Đăng ký ngay</Link>
          </p>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-4 w-full font-label-mono text-[11px] uppercase tracking-widest text-asphalt-gray hover:text-pure-white transition-colors"
          >
            ← VỀ TRANG CHỦ
          </button>
        </div>
      </section>
    </div>
  );
}
