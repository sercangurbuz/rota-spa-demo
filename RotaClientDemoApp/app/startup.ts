﻿import { App } from "rota/config/app";
import * as userprofile from 'optional!json!/api/kullanici/getprofile!bust';

interface IProfile {
    imageUri?: string;
    companies?: ICompany[];
}

App.setHomePage({
    url: '/vitrin',
    imageUri: '/Content/img/bg3.jpg'
});

//config phase of angular pipeline
App.configure((ConfigProvider: IMainConfigProvider, SecurityConfigProvider: ISecurityConfigProvider): void => {
    ConfigProvider.config.appTitle = "E-Dukkan SPA Demo App";

    SecurityConfigProvider.config.authorizedCompanies = (userprofile as IProfile).companies;
    SecurityConfigProvider.config.avatarUri = (userprofile as IProfile).imageUri;
});

//run phase of angular pipeline
App.run((Routing: IRouting) => {
    Routing.addMenus([
        {
            id: 0,
            isMenu: true,
            title: 'Tanımlar',
            menuIcon: 'bullhorn'
        },
        {
            id: 1,
            parentId: 0,
            name: 'shell.content.urunler',
            controller: 'urunlerController',
            controllerUrl: 'admin/urun/urunler.controller',
            templateUrl: 'admin/urun/urunler.html',
            url: 'admin/urunler',
            isMenu: true,
            title: 'Ürünler',
            menuIcon: 'diamond',
            isQuickMenu: true
        },
        {
            id: 2,
            parentId: 1,
            name: 'shell.content.urun',
            controller: 'urunController',
            controllerUrl: 'admin/urun/urun.controller',
            templateUrl: 'admin/urun/urun.html',
            url: 'admin/urunler/:id',
            title: 'Ürün Detayı',
            menuIcon: 'diamond',
        },
        {
            id: 3,
            parentId: 0,
            name: 'shell.content.kategoriler',
            controller: 'kategorilerController',
            controllerUrl: 'admin/kategori/kategoriler.controller',
            templateUrl: 'admin/kategori/kategoriler.html',
            url: 'admin/kategoriler',
            isMenu: true,
            title: 'Kategoriler',
            menuIcon: 'folder-o',
            isQuickMenu: true,
        },
        {
            id: 4,
            parentId: 3,
            name: 'shell.content.kategori',
            controller: 'kategoriController',
            controllerUrl: 'admin/kategori/kategori.controller',
            templateUrl: 'admin/kategori/kategori.html',
            url: 'admin/kategoriler/:id',
            title: 'Kategori Detayı',
            menuIcon: 'folder-open-o',
        },
        {
            id: 5,
            title: 'Ana Sayfa',
            menuIcon: 'home',
            controller: 'vitrinController',
            controllerUrl: 'edukkan/vitrin/vitrin.controller',
            templateUrl: 'edukkan/vitrin/vitrin.html',
            name: 'shell.vitrin',
            url: 'vitrin',
            isQuickMenu: true
        }
    ]);
});
