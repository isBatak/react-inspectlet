const logId = '[react-inspeclet]';

const ReactInspectlet = {
  initialize: (wid, options) => {
    if (!wid) {
      console.warn(logId, 'wid is required');
      return;
    }

    /* eslint-disable */
    window.__insp = window.__insp || [];

    __insp.push(['wid', wid]);

    if (options && options.debug) {
      __insp.push(['debug', true]);
    }

    (function() {
      function ldinsp() {
        if (typeof window.__inspld != "undefined") return;
        window.__inspld = 1;
        var insp = document.createElement('script');
        insp.type = 'text/javascript';
        insp.async = true;
        insp.id = "inspsync";
        insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(insp, x);
      };
      setTimeout(ldinsp, 500);
      document.readyState != "complete" ? (window.attachEvent ? window.attachEvent('onload', ldinsp) : window.addEventListener('load', ldinsp, false)) : ldinsp();
    })();
    /* eslint-enable */
  },

  /**
   * This function is only needed for legacy deployments!
   * Changes to the URL via History.pushState() are now automatically picked up
   * by Inspectlet so the below is unnecessary.
   * @return void
   */
  virtualPage: () => {
    /* eslint-disable */
    __insp.push(['virtualPage']);
    /* eslint-enable */
  },
};

export default ReactInspectlet;
