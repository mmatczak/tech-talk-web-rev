/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    'ui': {
        'port': 3001,
        'weinre': {
            'port': 8080
        }
    },
    'files': false,
    'watchOptions': {},
    'server': {
        baseDir: '.',
        directory: false
    },
    'proxy': false,
    'port': 3000,
    'middleware': false,
    'serveStatic': [],
    'online': false,
    'ghostMode': {
        'clicks': true,
        'scroll': true,
        'forms': {
            'submit': true,
            'inputs': true,
            'toggles': true
        }
    },
    'logLevel': 'info',
    'logPrefix': 'BS',
    'logConnections': false,
    'logFileChanges': true,
    'logSnippet': true,
    'rewriteRules': false,
    'open': 'local',
    'browser': 'default',
    'xip': false,
    'hostnameSuffix': false,
    'reloadOnRestart': false,
    'notify': true,
    'scrollProportionally': true,
    'scrollThrottle': 0,
    'scrollRestoreTechnique': 'window.name',
    'scrollElements': [],
    'scrollElementMapping': [],
    'reloadDelay': 0,
    'reloadDebounce': 0,
    'plugins': [],
    'injectChanges': true,
    'startPath': null,
    'minify': true,
    'host': null,
    'codeSync': true,
    'timestamps': true,
    'socket': {
        'socketIoOptions': {
            'log': false
        },
        'socketIoClientConfig': {
            'reconnectionAttempts': 50
        },
        'path': '/browser-sync/socket.io',
        'clientPath': '/browser-sync',
        'namespace': '/browser-sync',
        'clients': {
            'heartbeatTimeout': 5000
        }
    }
};
