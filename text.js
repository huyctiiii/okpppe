document.getElementById("form-mua").addEventListener("submit", function (e) {
  const ten = document.getElementById("ten").value.trim();
  const sdt = document.getElementById("sdt").value.trim();
  const diachi = document.getElementById("diachi").value.trim();
  const thongbao = document.getElementById("thongbao");

  if (!ten || !sdt || !diachi) {
    e.preventDefault();
    thongbao.style.color = "red";
    thongbao.textContent = "❌ Vui lòng điền đầy đủ TÊN, SDT và ĐỊA CHỈ!";
    return;
  }

  thongbao.style.color = "green";
  thongbao.textContent = "✅ Đã gửi thông tin mua hàng! Đang chuyển về trang chủ...";
  alert("Chúng tôi sẽ sớm thông báo về thông tin món hàng mà bạn đã đặt.");
});