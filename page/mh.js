document.getElementById("form-mua").addEventListener("submit", function (e) {
  const ten = document.getElementById("ten").value.trim();
  const sdt = document.getElementById("sdt").value.trim();
  const diachi = document.getElementById("diachi").value.trim();
  const sl = document.getElementById("sl").value.trim();
  const thongbao = document.getElementById("thongbao");

  // Kiểm tra nếu thiếu dữ liệu
  if (!ten || !sdt || !diachi || !sl) {
    e.preventDefault(); // Ngăn gửi form
    thongbao.style.color = "red";
    thongbao.textContent = "❌ Vui lòng điền đầy đủ TÊN, SDT và ĐỊA CHỈ!";
    return;
  }

  // Cho phép gửi, hiển thị thông báo và chuyển trang sau 1 giây
  thongbao.style.color = "green";
  thongbao.textContent = "✅ Đã gửi thông tin mua hàng! Đang chuyển về trang chủ...";
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
});

