document.addEventListener('deviceready', function() {
    // Find all links with download attribute
    document.querySelectorAll('a[download]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var url = this.href;
            var fileName = url.split('/').pop();
            var filePath = cordova.file.externalDataDirectory + fileName;

            cordova.plugin.http.downloadFile(url, {}, {}, filePath,
                function(entry) {
                    alert("Downloaded: " + entry.toURL());
                },
                function(err) {
                    alert("Download failed: " + err.error);
                }
            );
        });
    });
});
