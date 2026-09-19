export default function Footer() {
  return (
<footer className="w-full bg-surface-container-lowest text-on-surface pt-space-xl pb-margin border-t border-surface-stroke">
  <div className="w-full px-4 lg:px-margin-lg mb-space-xl">
    <div className="bg-surface-charcoal/50 p-space-lg lg:p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg border border-surface-stroke">
      <div className="max-w-xl">
        <h3 className="font-headline-lg text-headline-lg text-pure-white uppercase tracking-wider mb-space-xs">ĐĂNG KÝ NHẬN THÔNG TIN DROP & XE HIẾM MỚI</h3>
        <p className="font-body-md text-body-md text-asphalt-gray">Nhận thông báo sớm các đợt mở bán RLC, Mini GT Chase Car và voucher giảm giá 10% cho đơn đầu tiên.</p>
      </div>
      <div className="flex w-full md:w-auto items-center max-w-md">
        <input className="bg-surface-container text-pure-white placeholder:text-asphalt-gray px-space-md py-3 font-label-mono text-label-mono outline-none w-full md:w-72 focus:bg-surface-bright transition-colors border border-surface-stroke" placeholder="NHẬP SỐ ĐIỆN THOẠI HOẶC EMAIL..." type="text" />
        <button className="bg-crimson-heat hover:bg-racing-orange text-pure-white font-headline-md text-headline-md px-space-lg py-2.5 transition-colors uppercase shrink-0" type="button">ĐĂNG KÝ</button>
      </div>
    </div>
  </div>
  <div className="w-full px-4 lg:px-margin-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl">
    <div className="flex flex-col gap-space-sm">
      <h4 className="font-headline-md text-headline-md uppercase text-pure-white tracking-wider mb-space-xs">CHÍNH SÁCH MÔ HÌNH</h4>
      <ul className="space-y-space-xs font-body-sm text-body-sm text-asphalt-gray">
        <li>
          <a className="hover:text-pure-white transition-colors" data-path="warranty-policy" href="#">Bảo hành vỏ hộp & vỉ card nguyên vẹn</a>
        </li>
        <li>
          <a className="hover:text-pure-white transition-colors" data-path="return-policy" href="#">Chính sách đổi trả lỗi nhà sản xuất 1-1</a>
        </li>
        <li>
          <a className="hover:text-pure-white transition-colors" data-path="shipping-policy" href="#">Chính sách đóng gói chèn xốp 4 lớp</a>
        </li>
        <li>
          <a className="hover:text-pure-white transition-colors" data-path="inspection-policy" href="#">Đồng kiểm hàng trước khi thanh toán</a>
        </li>
        <li>
          <a className="hover:text-pure-white transition-colors" data-path="chase-policy" href="#">Quy định công bằng khi khui xe Chase</a>
        </li>
        <li>
          <a className="hover:text-pure-white transition-colors" data-path="care-guide" href="#">Hướng dẫn bảo quản mô hình kim loại</a>
        </li>
      </ul>
    </div>
    <div className="flex flex-col gap-space-sm">
      <h4 className="font-headline-md text-headline-md uppercase text-pure-white tracking-wider mb-space-xs">HỖ TRỢ COLLECTOR</h4>
      <ul className="space-y-space-xs font-body-sm text-body-sm text-asphalt-gray">
        <li>
          <a className="hover:text-pure-white transition-colors" data-path="faq" href="#">Câu hỏi thường gặp về tỉ lệ xe (1:64 vs 1:43)</a>
        </li>
        <li>
          <a className="hover:text-pure-white transition-colors" data-path="order-tracking" href="#">Tra cứu mã vận đơn hỏa tốc</a>
        </li>
        <li>
          <a className="hover:text-pure-white transition-colors" data-path="pre-order" href="#">Hướng dẫn Pre-Order các đợt xe mới</a>
        </li>
        <li>
          <a className="hover:text-pure-white transition-colors" data-path="contact" href="#">Đặt tìm mẫu xe hiếm theo yêu cầu</a>
        </li>
        <li>
          <a className="hover:text-pure-white transition-colors" data-path="store-system" href="#">Hệ thống Showroom xem xe trực tiếp</a>
        </li>
      </ul>
    </div>
    <div className="flex flex-col gap-space-sm">
      <h4 className="font-headline-md text-headline-md uppercase text-pure-white tracking-wider mb-space-xs">LIÊN HỆ & TÀI KHOẢN</h4>
      <ul className="space-y-space-xs font-body-sm text-body-sm text-asphalt-gray">
        <li>
          <a className="hover:text-pure-white transition-colors" data-path="user-account" href="#">Tài khoản Collector</a>
        </li>
        <li>
          <a className="hover:text-pure-white transition-colors" data-path="membership-policy" href="#">Hạng VIP Apex Club tích điểm</a>
        </li>
        <li>
          <a className="hover:text-pure-white transition-colors" data-path="wishlist" href="#">Danh sách xe mơ ước (Wishlist)</a>
        </li>
      </ul>
      <div className="mt-space-md">
        <p className="font-label-mono text-label-mono text-asphalt-gray uppercase">Hotline tư vấn xe:</p>
        <p className="font-headline-md text-headline-md text-pure-white">0988 123 456 - 1900 8866</p>
        <p className="font-body-sm text-body-sm text-asphalt-gray mt-1">Email: contact@n1h5models.vn</p>
      </div>
    </div>
    <div className="flex flex-col gap-space-sm">
      <h4 className="font-headline-md text-headline-md uppercase text-pure-white tracking-wider mb-space-xs">HỆ THỐNG SHOWROOM</h4>
      <div className="space-y-space-sm font-body-sm text-body-sm text-asphalt-gray">
        <div>
          <p className="font-semibold text-pure-white">TP. HỒ CHÍ MINH</p>
          <p className="text-[12px] text-asphalt-gray">
            • Store 1: 45 Nguyễn Huệ, Quận 1
            <br />
            • Store 2: 128 Phan Đăng Lưu, Phú Nhuận
            <br />
            • Store 3: 202 Điện Biên Phủ, Bình Thạnh
          </p>
        </div>
        <div>
          <p className="font-semibold text-pure-white">HÀ NỘI</p>
          <p className="text-[12px] text-asphalt-gray">
            • Store 4: 92 Phố Huế, Hoàn Kiếm
            <br />
            • Store 5: 180 Hoàng Cầu, Đống Đa
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full px-4 lg:px-margin-lg pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-label-mono text-label-mono text-asphalt-gray border-t border-surface-stroke/30">
    <div className="flex items-center gap-space-md">
      <span className="text-pure-white font-bold">N1H5 MODELS // DIECAST GARAGE</span>
      <span>© 2024 N1H5 MODELS. ALL RIGHTS RESERVED.</span>
    </div>
    <div className="flex items-center gap-space-md">
      <a className="hover:text-crimson-heat transition-colors uppercase" href="#">Facebook Fanpage</a>
      <a className="hover:text-crimson-heat transition-colors uppercase" href="#">TikTok Diecast</a>
      <a className="hover:text-crimson-heat transition-colors uppercase" href="#">YouTube Review</a>
      <a className="hover:text-crimson-heat transition-colors uppercase" href="#">Instagram</a>
    </div>
  </div>
</footer>
  );
}
