
// config
/*/
SERVER.PATH_ROOT = '.web/';
ConfigServerHttps.ABSOLUTE_PATH_APPLICATION_WEB = '.web/';
global.createWatchServer(ConfigServerHttps.ABSOLUTE_PATH_APPLICATION_WEB);
//*/

//----------------------------------------------------------------------------------------------------;

//*/
SERVER.PATH_ROOT = 'D:/GitHub_Ttw--TS/Ttw-JS--CustomElement/';
ConfigServerHttps.ABSOLUTE_PATH_APPLICATION_WEB = 'D:/GitHub_Ttw--TS/Ttw-JS--CustomElement/';
global.createWatchServer('D:/GitHub_Ttw--TS/Ttw-JS--CustomElement/');
//*/

//----------------------------------------------------------------------------------------------------;

/*/
global.RJSA
global.RJSR
//*/

//----------------------------------------------------------------------------------------------------;

// Adding a Router and Transferring Files Sample
SERVER.addRouter('/', function (req, res, owner) {
	UtilHttpResponse.response_200_FileStream(req, res, ConfigServerHttps.ABSOLUTE_PATH_APPLICATION_WEB + 'index.html', 'html', owner);
});

(function () {
	// Sample mapping the same router to multiple URIs

	// index.html
	const ROUTER = function (req, res, owner) { UtilHttpResponse.response_200_FileStream(req, res, ConfigServerHttps.ABSOLUTE_PATH_APPLICATION_WEB + 'index.html', 'html', owner); };
	SERVER.addRouter('/', ROUTER);
	SERVER.addRouter('/index', ROUTER);
	SERVER.addRouter('/index.asp', ROUTER);
	SERVER.addRouter('/index.html', ROUTER);
	SERVER.addRouter('/index.jsp', ROUTER);
	SERVER.addRouter('/index.php', ROUTER);
	SERVER.addRouter('/main.asp', ROUTER);
	SERVER.addRouter('/main.html', ROUTER);
	SERVER.addRouter('/main.jsp', ROUTER);
	SERVER.addRouter('/main.php', ROUTER);
	SERVER.addRouter('/root.asp', ROUTER);
	SERVER.addRouter('/root.html', ROUTER);
	SERVER.addRouter('/root.jsp', ROUTER);
	SERVER.addRouter('/root.php', ROUTER);
})();

//----------------------------------------------------------------------------------------------------;

// for development
// 해당 폴더의 소스가 수정되면 서버 재기동 없이 소스 다시 실행
// If the source of the folder is modified, re-run the source without restarting the server.
(function () {
	var path0 = 'js-router/'; global.RJSR(path0 + '.main.js'); UtilFSWatch.watch(path0, { recursive: true }, function (e, fnm) { if (fnm) { global.RJSR(path0 + '.main.js'); } });
	var path1 = 'js-source/'; global.RJSR(path1 + '.main.js'); UtilFSWatch.watch(path1, { recursive: true }, function (e, fnm) { if (fnm) { global.RJSR(path1 + '.main.js'); } });
})();

//----------------------------------------------------------------------------------------------------;

// Adding a Router and Transferring Files Sample


/*/
try {
	(function () {
		var PATH0 = 'D:/GitHub_Ttw--TS/Ttw-JS--CustomElement';
		var PATH1 = '/app_tradingview/html_page.local/AdvancedChart/view/bundles/';
		var A = UtilFS.getList_FileExtension(PATH0 + PATH1, '.gz');

		var skip = ``
		var io;
		var i = 0, iLen = A.length;
		for (; i < iLen; ++i) {
			io = A[i];

			var URI = PATH1 + io.replace('.js.gz', '.js').replace('.css.gz', '.css');
			var PATH_FILE = PATH0 + PATH1 + io;
			var FILE_EXT;

			if(-1 != skip.indexOf(io)){
				console.log('asdasdasdasdasdasasd');
				continue;
			}

			if (-1 != io.indexOf('.js.gz')) { FILE_EXT = 'js'; }
			if (-1 != io.indexOf('.css.gz')) { FILE_EXT = 'css'; }

			SERVER.addRouter(URI, function (req, res, owner) {
				console.log(PATH_FILE, FILE_EXT);
				UtilHttpResponse.response_200_FileStream(req, res, PATH_FILE, FILE_EXT, owner);
			});
		}
	})();
}
catch (err) { }
//*/