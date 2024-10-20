{"version":3,"sources":["dropdown_inline.js"],"names":["BX","namespace","Landing","UI","Field","DropdownInline","data","this","items","id","BaseField","apply","arguments","setEventNamespace","subscribeFromOptions","Component","fetchEventsFromOptions","popup","input","addEventListener","onInputClick","bind","layout","classList","add","type","isPlainObject","keys","Object","map","key","name","value","length","push","innerText","dataset","setValue","content","options","skipInitialEvent","prototype","constructor","__proto__","PopupMenuWindow","selector","bindElement","bindOptions","forceBindPosition","targetContainer","contentRoot","item","text","onclick","onItemClick","appendChild","popupWindow","popupContainer","show","rect","pos","style","top","bottom","left","closePopup","close","fireEvent","emit","getValue","preventEvent","forEach","setItems","isArray","clone"],"mappings":"CAAC,WACA,aAEAA,GAAGC,UAAU,uBASbD,GAAGE,QAAQC,GAAGC,MAAMC,eAAiB,SAASC,GAE7CC,KAAKC,MAAQ,UAAWF,GAAQA,EAAKE,MAAQF,EAAKE,MAAQ,GAC1DD,KAAKE,GAAKH,EAAKG,GAAKH,EAAKG,GAAK,GAC9BT,GAAGE,QAAQC,GAAGC,MAAMM,UAAUC,MAAMJ,KAAMK,WAC1CL,KAAKM,kBAAkB,sCACvBN,KAAKO,qBAAqBd,GAAGE,QAAQC,GAAGY,UAAUC,uBAAuBV,IACzEC,KAAKU,MAAQ,KACbV,KAAKW,MAAMC,iBAAiB,QAASZ,KAAKa,aAAaC,KAAKd,OAE5DA,KAAKe,OAAOC,UAAUC,IAAI,oCAE1B,GAAIxB,GAAGyB,KAAKC,cAAcnB,KAAKC,OAC/B,CACC,IAAImB,EAAOC,OAAOD,KAAKpB,KAAKC,OAC5BD,KAAKC,MAAQmB,EAAKE,KAAI,SAASC,GAC9B,MAAO,CAACC,KAAMxB,KAAKC,MAAMsB,GAAME,MAAOF,KACpCvB,MAIJ,GAAIA,KAAKC,MAAMyB,SAAW,EAC1B,CACC1B,KAAKC,MAAM0B,KAAK,IAChB3B,KAAKC,MAAM,GAAGuB,KAAO,GACrBxB,KAAKC,MAAM,GAAGwB,MAAQ,GAGvBzB,KAAKW,MAAMiB,UAAY5B,KAAKC,MAAM,GAAGuB,KACrCxB,KAAKW,MAAMkB,QAAQJ,MAAQzB,KAAKC,MAAM,GAAGwB,MACzCzB,KAAK8B,SAAS9B,KAAK+B,QAAS/B,KAAKgC,QAAQC,mBAG1CxC,GAAGE,QAAQC,GAAGC,MAAMC,eAAeoC,UAAY,CAC9CC,YAAa1C,GAAGE,QAAQC,GAAGC,MAAMC,eACjCsC,UAAW3C,GAAGE,QAAQC,GAAGC,MAAMM,UAAU+B,UAEzCrB,aAAc,WAEb,IAAKb,KAAKU,MACV,CACCV,KAAKU,MAAQ,IAAIjB,GAAG4C,gBAAgB,CACnCnC,GAAIF,KAAKsC,SAAW,mBAAqBtC,KAAKE,GAC9CqC,YAAavC,KAAKW,MAClB6B,YAAa,CACZC,kBAAmB,MAEpBC,gBAAiB1C,KAAK2C,YACtB1C,MAAOD,KAAKC,MAAMqB,KAAI,SAASsB,GAC9B,MAAO,CACNC,KAAMD,EAAKpB,KACXsB,QAAS,WACR9C,KAAK+C,YAAYH,IAChB9B,KAAKd,SAENA,QAGJ,IAAKA,KAAK2C,YACV,CACC3C,KAAKe,OAAOiC,YAAYhD,KAAKU,MAAMuC,YAAYC,iBAIjDlD,KAAKU,MAAMyC,OAEX,IAAKnD,KAAK2C,YACV,CACC,IAAIS,EAAO3D,GAAG4D,IAAIrD,KAAKW,MAAOX,KAAKe,QACnCf,KAAKU,MAAMuC,YAAYC,eAAeI,MAAMC,IAAMH,EAAKI,OAAS,KAChExD,KAAKU,MAAMuC,YAAYC,eAAeI,MAAMG,KAAOL,EAAKK,KAAO,OAIjEC,WAAY,WAEX,GAAI1D,KAAKU,MACT,CACCV,KAAKU,MAAMiD,UAIbZ,YAAa,SAASH,GAErB5C,KAAKW,MAAMiB,UAAYgB,EAAKpB,KAC5BxB,KAAKW,MAAMkB,QAAQJ,MAAQmB,EAAKnB,MAChCzB,KAAKU,MAAMiD,QACXlE,GAAGmE,UAAU5D,KAAKW,MAAO,SACzBX,KAAK6D,KAAK,YACV7D,KAAK6D,KAAK,gBAMXC,SAAU,WAET,cAAc9D,KAAKW,MAAMkB,QAAQJ,QAAU,YAAczB,KAAKW,MAAMkB,QAAQJ,MAAQzB,KAAKC,MAAM,GAAGwB,OAGnGK,SAAU,SAASL,EAAOsC,GAEzB/D,KAAKC,MAAM+D,SAAQ,SAASpB,GAC3B,GAAInB,IAAUmB,EAAKnB,MACnB,CACCzB,KAAKW,MAAMiB,UAAYgB,EAAKpB,KAC5BxB,KAAKW,MAAMkB,QAAQJ,MAAQmB,EAAKnB,MAChC,IAAKsC,EACL,CACC/D,KAAK6D,KAAK,gBAGV7D,OAGJiE,SAAU,SAAShE,GAElB,GAAIR,GAAGyB,KAAKgD,QAAQjE,GACpB,CACCD,KAAKC,MAAQR,GAAG0E,MAAMlE,GACtBD,KAAKU,MAAQ,KAEbV,KAAKW,MAAMiB,UAAY5B,KAAKC,MAAM,GAAGuB,KACrCxB,KAAKW,MAAMkB,QAAQJ,MAAQzB,KAAKC,MAAM,GAAGwB,UAvI5C","file":"dropdown_inline.map.js"}