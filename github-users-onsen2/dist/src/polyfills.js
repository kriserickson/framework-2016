"use strict";
require('core-js');
require('reflect-metadata');
require('zone.js/dist/zone');
if (process.env.NODE_ENV === 'production') {
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=polyfills.js.map