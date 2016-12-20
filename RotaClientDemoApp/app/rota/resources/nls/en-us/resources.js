﻿define({
    //#region Rota
    rota: {
        okumamoduuyari: 'This page is readonly,You are not allowed to change the form model',
        sadeceokuma: 'Readonly',
        hepsinisec: 'Select all',
        secimlerikaldir: 'Deselect all',
        hepsiniac: 'Expand all',
        hepsinikapat: 'Collapse all',
        escsilaciklama: 'Press <b>\'esc\'</b> to clear',
        enazkaraktersayisi: 'Type in <b>\'{0}\'</b> characters at least to fill',
        yeniitemicinarti: 'Press <b>\'+\'</b> button to add new item',
        otomatikkayit: 'AutoSave confirm',
        otomatikkayityuklensinmi: 'This form was closed unexpectedly,do you want to reload ?',
        otomatikkayityukle: 'Load autosaved form data',
        otomatikkayitediliyor: 'Auto Saving...',
        degisikliklergerialindi: 'All changes have been dismissed',
        silinenitemgerialindi: 'Deleted item reverted',
        aktifsirket: 'Current company',
        indirpdf: 'As Pdf ',
        indirxls: 'As Excel',
        indirword: 'As Word',
        indirhtml: 'As HTML',
        indir: 'Download',
        goster: 'View',
        raporgoster: 'View Report',
        raporukapat: 'Close Report',
        raporonizleme: 'Report Preview',
        buguntarihienter: 'Press enter for today date',
        islemler: 'Actions',
        dosyaekleaciklama: 'Add file clicking link or dropping file on this area',
        yenidosyaekle: 'Add new file',
        tumdataexportonay: 'Exporting all rows migth take some while,continue ?',
        ilkkaydagit: 'Go to first row',
        kirptitle: 'Select cropping area of your image',
        kirp: 'Crop',
        fotodegistirildi: 'User picture successfully changed',
        fotodegistir: 'Change my picture',
        fotosec: 'Choose avatar picture...',
        yardim: 'Help',
        kisayollar: 'Shortcuts',
        diller: 'Languages',
        sirketler: 'Companies',
        hizlimenuekle: 'Add quick menu',
        hizlimenueklendi: '"{0}" quick menu added',
        hizliemenuadetkisiti: 'Quick menus stricted to {0} items',
        createduser: 'Created User',
        createddate: 'Created Date',
        modifieduser: 'Modified User',
        modifieddate: 'Modified Date',
        urlparametrebilgi: "To give default value to parameters,you can add your value next to parameter such as '{parametren}' .e.g:Example/:id{1}",
        duzeltiliyor: 'Editing',
        zorunlualanlarvar: 'Please type in mandotary missing fields !',
        evet: 'Yes',
        hayir: 'No',
        kopyalaniyor: 'Copying',
        disariyaaktar: 'Export',
        aktarallcsv: 'All data .csv',
        aktarekrandakicsv: 'Visible data .csv',
        aktarsecilicsv: 'Selected data .csv',
        aktarallpdf: 'All data .pdf',
        aktarekrandakipdf: 'Visible data .pdf',
        aktarsecilipdf: 'Selected data .pdf',
        sayfa: 'Page',
        toplam: 'Total',
        son: 'Last',
        ilk: 'First',
        yeni: 'New',
        yenikopyala: 'Copy this item',
        kayitkopyalandı: 'Item succesfully copied',
        sonrakikayit: 'Next',
        oncekikayit: 'Prev',
        yenikayit: 'New Record',
        kayitduzeltme: 'Update Record',
        ara: 'Search',
        temizle: 'Clear',
        crudonay: 'Do you want to save the changes ?',
        tt_bironcekisayfayadon: 'Go to previous page',
        tt_kaydet: 'Save all changes',
        tt_kaydetdevam: 'Save all changes and continue ',
        tt_gerial: 'Revert back all changes',
        tt_sil: 'Delete the record',
        kayitbasarisiz: 'Saving failed',
        gonder: 'Send',
        tt_dosyasecmekicintiklayiniz: 'Click to choose a file',
        bilinmeyenhataolustu: 'Unknown error occured',
        dosyaseciniz: 'Choose a file',
        yenidosya: 'New File',
        fileuploaded: 'File successfully uploaded',
        iptal: 'Cancel',
        bugun: 'Today',
        sonbirhafta: 'Last 1 week',
        sonbiray: 'Last 1 month',
        sonaltiay: 'Last 6 month',
        sonbiryil: 'Last 1 year',
        ozel: 'Custom',
        cikisonay: 'Are you sure to exit ?',
        filter: 'Filter Criters',
        ayarlar: 'Settings',
        genislet: 'Expand',
        daralt: 'Collapse',
        filtreyitemizle: 'Clear filter',
        kayitsilindi: 'Item removed',
        kayiteklendi: 'Item added',
        tumkayitlarsilindi: 'All items removed',
        tumkayitlareklendi: 'All items added',
        zatenekli: 'Item Already added !',
        onaytumkayitekle: 'All items will be added.Are you sure to continue ?',
        onaytumkayitsil: 'All items will be deleted.Are you sure to continue ?',
        tumunuekle: 'Add all items',
        tumunusil: 'Remove all items',
        secilikayitlarisil: 'Remove selected items',
        onaysecilikayitlarisil: 'Selected items will be deleted.Are you sure to continue ?',
        kayitsayisi: 'Line count',
        kayitbulunamadi: 'No record found',
        close: "Close",
        prev: 'Prev',
        next: 'Next',
        first: 'First',
        last: 'Last',
        kaydetdevam: 'Save & Continue',
        succesfullyprocessed: 'Succesfully processed !',
        titleinfo: 'Info',
        titleerror: 'Error',
        titlewarn: 'Warning',
        onay: "Confirm",
        titlesuccess: 'Success',
        titledebug: 'Debug',
        seciniz: 'Choose Item...',
        zorunlualan: 'This field is mandatory',
        maxuzunluk: 'Max {0} characters is allowed',
        minuzunluk: 'Min {0} characters must be typed',
        hatalimail: 'This is not valid email address',
        hataliurl: 'This is not valid url',
        hatalisayi: 'This is not number',
        hatalipattern: 'Input value does not match the pattern',
        hatalitariharaligimin: 'Date must be greater than {0}',
        hatalitariharaligimax: 'Date must be lesser than {0}',
        hatalidegermin: 'Min value must be greater than {0}',
        hatalidegermax: 'Max value must be lesser than {0}',
        yenile: "Refresh",
        geridon: "Go Back",
        sil: "Delete",
        detay: "Detail",
        tamam: 'OK',
        ekle: "Add",
        guncelle: "Update",
        kaydet: "Save",
        gerial: "Revert Back",
        ok: "OK",
        deleteconfirmtitle: "Delete Confirm",
        deleteconfirm: "Are you sure to delete the record ?",
        login: "Login",
        logout: 'Log out',
        signIn: "Sign In",
        cancel: "Cancel",
        username: "User Name",
        password: "Password",
        rememberme: "Remember me",
        unauthorized: "You are not authorized to view this page !",
        invalidfiletypemessage: "Only {0} file types are allowed to upload.<b><i>{1}</i></b> file has been ignored.",
        lutfenbekleyiniz: "Please wait...",
        durum: "State",
        error404description: "The page you requested could not be found, either contact your webmaster or try again. Use your browsers Back button to navigate to the page you have prevously come from",
        aktifmi: "Active ?",
        yetkihatasiaciklama: "You are not authorized to perform this action !",
        yetkihatasi: "Authorization Failed",
        validationhatasi: "Validation Failed",
        hata: 'Error',
        yenidenbaslat: 'Restart !',
        hataolustu: 'An error occured !',
        hataozur: 'Apologize for inconvenience situation.We have been informed about the exception.We will fix it soon.',
        hataaciklama: 'Error description :',
        secilikayit: 'Selected {0}',
        modelbulunamadi: 'The item you are looking for either was removed or you have insufficent permission to see.<b>\'New Record\'</b> mode active!'
    }
    //#endregion
});