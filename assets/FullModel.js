/// <reference path="../../Scripts/_references.js" />
/*
/// <reference path="../../Scripts/_references.js" />
var templates = {};
templates.ListTemplate = function (prefix,id, baslik, tarih) {
    return "<li><a href=\"#" + prefix + id + "\" data-rel=\"popover\">"+ baslik +"  <small>" + tarih + "</small></a></li>";
};
templates.ViewTemplate = function (prefix,id, html)
{
    return "<div id=\"" + prefix + id + "\" data-role=\"popover\"><div data-role=\"view\" id=\"view1\" data-title=\"view1\" style=\"width:300px\">" + html + "</div></div>";
};
templates.Ders = function (ders,not,harf) {
    return "<li>" +ders+ "("+not+")<span class=\"value\">"+harf+"</span></li>";
};
var fetchData = function (accessToken)
{
    //var data = { accessToken: accessToken };
    $("#Resim").prop("src","/api/Auth/ProfilePicture?accessToken=" + accessToken);
    $.ajax({
        type: "POST",
        data: { '' : accessToken},
        url: "/api/Auth/Ogrenci",
        dataType: "json",
        async: false,
        success: function (result) {
            if (result != null) {
                $("#AdSoyad").html(result.Kimlik.AdSoyad);
                $("#gsm").val(result.Kimlik.GSM);
                $("#email").val(result.Kimlik.Email);
                $("#OgrenciNo").html(result.Kimlik.KullaniciAdi);
                var duyurular = $("#duyurular");
                var duyuruView = $("#duyuruview");
                if (result.Duyuru.length > 0)
                {
                    var obj;
                    for (var i = 0; i < result.Duyuru.length; i++) {
                        obj = result.Duyuru[i];
                        duyurular.append(templates.ListTemplate("duyuru", obj.ID, obj.Baslik, obj.Tarih));
                        duyuruView.append(templates.ViewTemplate("duyuru", obj.ID, obj.Html));
                    }
                }
                else {
                    duyurular.append("<li>Yeni Duyuru Yok</li>")
                }
                var mesajList = $("#mesajList");
                var mesajView = $("#mesajView");
                if (result.Mesaj.length > 0) {
                    var obj;
                    for (var i = 0; i < result.Mesaj.length; i++) {
                        obj = result.Mesaj[i];
                        mesajList.append(templates.ListTemplate("mesaj", obj.Id, obj.Konu, obj.Tarih));
                        mesajView.append(templates.ViewTemplate("mesaj", obj.Id, obj.Metin));
                    }
                }
                else {
                    mesajList.append("<li>Yeni Mesaj Yok</li>")
                }
                var dersNotlari = $("#dersNotlari");
                if (result.Not.length > 0) {
                    var obj;
                    for (var i = 0; i < result.Not.length; i++) {
                        obj = result.Not[i];
                        dersNotlari.append(templates.Ders(obj.DersAdi, obj.HarfNot, obj.OgretimYili));
                    }
                } else {
                    dersNotlari.append("<li>Kayıtlı ders notu yok!</li>");
                }
            }
            else {
                $(location).attr('href', 'login.html');
            }
        }
    });
};
*/
var fetchData = function (accessToken)
{
    //var data = { accessToken: accessToken };
    $.ajax({
        type: "POST",
        data: { '' : accessToken},
        url: "/api/Auth/BaskanView",
        dataType: "json",
        async: false,
        success: function (result) {
            if (result != null) {
                console.log(result);
                ko.applyBindings(model, $("body")[0]);
            }
            else {
                $(location).attr('href', 'login.html');
            }
        }
    });
};