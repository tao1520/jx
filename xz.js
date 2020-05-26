$(function() {
    $('.softDown').on('click',
    function() {
      if (typeof WeixinJSBridge !== "undefined") {
        $('.weixin').show()
      } else {
        down()
      }
    })
  });
  function down() {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      window.location.href = "https://file.52wzj.com/v1.1.0.2.apk";
      $('.warp').hide();
      $('.step').show()
    } else if (/(Android)/i.test(navigator.userAgent)) {
      window.location.href = "https://file.52wzj.com/v1.1.0.2.apk"
    } else {
      window.location.href = "https://file.52wzj.com/v1.1.0.2.apk"
    }
  }