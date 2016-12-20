var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "rota/config/app", "rota/base/basecrudcontroller", "./urun.api", "../kategori/kategori.api"], function (require, exports, app_1, basecrudcontroller_1) {
    "use strict";
    //#endregion
    var DEFAULT_IMAGE_URI = "content/img/default.jpg";
    /**
     * Your base crud controller.Replace IBaseCrudModel with your own model
     */
    var UrunController = (function (_super) {
        __extends(UrunController, _super);
        //#endregion
        //#region Init
        function UrunController(bundle) {
            //configure options for your need
            _super.call(this, bundle, {});
            //Sabitler
            this.defaultImgUri = DEFAULT_IMAGE_URI;
            //Yeni kategori modal ayarlari
            this.yeniKategoriModalAyarlari = {
                templateUrl: 'admin/kategori/kategori.modal.html',
                instanceOptions: { services: ['kategoriApi'] }
            };
            //custom validators
            this.validators.addValidation({ func: this.stokMiktariKontrol, triggerOn: 4 /* Action */ })
                .addValidation({ func: this.urunKoduKontrolu, triggerOn: 1 /* Blur */, name: 'urunKoduKontrolu' });
            //Neler orneklendi
            var whatIncluded = [
                "Form <b>input</b> kullanımları (text,number,currency,editor)",
                "<b>rtSelect</b> combobox olarak kullanımı,fire-onchange ve newItemOptions modal örneği",
                "<b>Cascading rtSelect</b> örneği - Seçilen kategori'ye göre altKategori'leri dolduryoruz",
                "<b>rtMultiSelect</b> kullanımı",
                "<b>Custom panel header</b>",
                "<b>BaseCrudController event'leri</b> (getModel,loadedModel,saveModel,beforeSaveModel)",
                "<b>Custom Validations</b> (BeforeSaveModel event ve Validators servisi)",
                "<b>rtCallout ve rtValidator</b> kullanımı",
                "<b>Tooltip ve popover</b> kullanımları - <a href='http://angular-ui.github.io/bootstrap/' target='_blank'>Angular Bootstrap</a>",
                "<b>uib-tabset kullanımı</b> - <a href='http://angular-ui.github.io/bootstrap/' target='_blank'>Angular Bootstrap</a>",
                "<b>File upload ve Image croping</b>",
                "<b>ShowConfirm,ShowPrompt,ShowModal</b> kullanımı - Dialogs servisi"
            ];
            this.logger.notification.info({
                message: whatIncluded.join('<br/>'),
                title: 'Bu sayfadaki örnekler'
            });
        }
        //#endregion
        //#region Validasyon Methodlari
        /**
         * Aynı urun kod varmi validasyonu
         * @param args {IValidationArgs}
         */
        UrunController.prototype.urunKoduKontrolu = function (args) {
            var _this = this;
            if (!args.modelValue || args.modelValue.length === 0)
                return this.common.promise();
            return this.urunApi.getList({ kodu: args.modelValue })
                .then(function (urunler) {
                if (urunler.length > 0)
                    return _this.common.rejectedPromise({
                        message: "Aynı kod'a sahip başka urun bulunmaktadir"
                    });
                return _this.common.promise();
            });
        };
        /**
         * Stok miktari validasyon methodu
         * @description Modal da verilen cevaba gore modal promise resolve veya reject olur.Buna gore save işlemi devam eder veya kesilir.
         */
        UrunController.prototype.stokMiktariKontrol = function (args) {
            if (this.model.stokMiktari <= this.urunApi.minStokMiktari) {
                return this.dialogs.showConfirm({
                    message: 'Minumum stok miktarının altinda miktar girdiniz.Devam etmek istiyormusunuz ?',
                    title: 'Min stok uyarısı'
                });
            }
        };
        //#endregion
        //#region BaseCrudController
        /**
         * Model datayi dolduran abstract event
         * @description Sadece edit modda çalişir
         * @param modelFilter
         */
        UrunController.prototype.getModel = function (modelFilter) {
            //return your model
            return this.urunApi.getById(modelFilter.id);
        };
        /**
         * Kaydet butonuna basinca çalişan event,
         * @description this.initSaveModel() ile manuel tetiklenebilir
         * @param options Save options
         */
        UrunController.prototype.saveModel = function (options) {
            //save your model
            return this.urunApi.save(options.jsonModel);
        };
        /**
         * Delete butonuna baislinca çalişan event
         * @param options Delete Options
         */
        UrunController.prototype.deleteModel = function (options) {
            //delete your model
            return this.urunApi.save(options.jsonModel);
        };
        /**
        * Save işleminden once çalişan event
        * @description Bu methodda modele custom assignmentlar yapılabilir,veya validasyon eklenebilir.
        * @param options Save options
        */
        UrunController.prototype.beforeSaveModel = function (options) {
            //Set user id 
            this.model.kayitEdenKullaniciId = this.currentUser.id;
        };
        /**
         * Model new modda ise bu event tetiklenir.
         * @description Yeni kayit inital degerlerin atilmasinda kullanilabilir.
         * @param clonedModel Eger kopyalama yapılıyorsa clonedModel true gelir
         */
        UrunController.prototype.newModel = function (clonedModel) {
            var model = _super.prototype.newModel.call(this, clonedModel);
            model.birimFiyat = 0;
            model.stokMiktari = 1;
            model.iliskiliUrunler = [];
            this.minYayinlanmaTarihi = new Date();
            return model;
        };
        /**
         * Model yuklendikten sonra çalişan event (New veya Edit modda çalişir)
         * @param model Model
         */
        UrunController.prototype.loadedModel = function (model) {
            //Varsayilan default image path
            this.model.urunResmi = model.urunResmi || DEFAULT_IMAGE_URI;
            //Stok durumuna gore panel rengi değiştir
            this.stokDurumuPanelBg = "default";
            if (!this.isNew)
                this.stokDurumuPanelBg = this.urunApi.minStokMiktari >= model.stokMiktari ? "danger" : "info";
            //base methodu cagirmayi unutmayin !!!
            _super.prototype.loadedModel.call(this, model);
        };
        //#endregion
        //#region Methodlar
        UrunController.prototype.urunKategoriUyumKontrol = function (args) {
            //Eger hepsini ekle secildiyse işlem yapmıyoruz,
            //NOT : Batch ekleme butonlarini "hideButtons" attr ekleyerek kaldirabilirz
            if (args.isBatchProcess)
                return;
            if (args.$selectItem.kategoriId !== this.model.kategoriId) {
                return this.dialogs.showConfirm({
                    message: 'Eklediginiz ilişkili ürün farkli bir kategoriden.' +
                        'Yinede eklemek istiyormusunuz ?'
                });
            }
        };
        /**
         * Ürun resmini siler ve manuel kayit işlemini tetikler
         */
        UrunController.prototype.urunResmiSil = function () {
            var _this = this;
            this.dialogs.showConfirm({ message: 'Resmi silmek istediğinize eminmisiniz ?' })
                .then(function () {
                _this.model.urunResmi = "content/img/default.jpg";
                _this.initSaveModel();
            });
        };
        /**
         * Ürün resmi yukler
         */
        UrunController.prototype.urunResmiYukle = function () {
            var _this = this;
            this.dialogs.showFileUpload({
                allowedExtensions: '.png,.jpg',
                showImageCroppingArea: true,
                title: 'Ürün resmi seçiniz...',
                sendText: 'Kırp ve kaydet'
            }).then(function (file) {
                _this.model.urunResmi = file.croppedDataUrl;
            });
        };
        /**
         * rtSelect Cascading ornegi icin altKategorileri yukler
         * @param args
         */
        UrunController.prototype.altKatgorileriYukle = function (args) {
            var _this = this;
            this.model.altKategoriId = null;
            this.altKategoriler = [];
            if (!args.modelValue)
                return;
            this.kategoriApi.listeyiAl({ ustKategoriId: args.modelValue })
                .then(function (kategoriler) {
                _this.altKategoriler = kategoriler;
            });
        };
        /**
         * Stok miktarini değiştirir ve cache'e atar
         */
        UrunController.prototype.minStokMiktariniDegistir = function () {
            var _this = this;
            this.dialogs.showPrompt({
                title: 'Stok Ayarları', subTitle: 'Min stok miktarını giriniz',
                okText: 'Güncelle', cancelText: 'İptal', initValue: this.urunApi.minStokMiktari.toString()
            })
                .then(function (value) {
                _this.urunApi.minStokMiktari = parseInt(value);
                _this.logger.toastr.info({ message: 'Stok miktarı değiştirildi' });
            });
        };
        UrunController.prototype.buyukResim = function () {
            this.dialogs.showModal({
                templateUrl: 'admin/urun/urun.modal.html',
                size: 'lg',
                instanceOptions: { params: { urunResmi: this.model.urunResmi } }
            });
        };
        return UrunController;
    }(basecrudcontroller_1.BaseCrudController));
    //#region Register
    app_1.App.addController("urunController", UrunController, "urunApi", "kategoriApi", "CurrentUser");
});
//#endregion 
