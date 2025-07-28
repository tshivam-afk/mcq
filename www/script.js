document.addEventListener('deviceready', function () {
    var permissions = cordova.plugins.permissions;
    permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE, function () {
        console.log("Storage permission granted");
    }, function () {
        alert("Permission denied");
    });

    document.querySelectorAll('a[download]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var url = this.href;
            var fileName = url.split('/').pop();
            var filePath = cordova.file.externalRootDirectory + "Download/" + fileName;

            cordova.plugin.http.downloadFile(url, {}, {}, filePath, function(entry) {
                alert("Downloaded to: " + entry.toURL());
            }, function(err) {
                alert("Download failed: " + JSON.stringify(err));
            });
        });
    });
});
