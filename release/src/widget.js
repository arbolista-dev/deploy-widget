import iFrameResize from 'iframe-resizer/js/iframeResizer.min';

const BASE_URL = 'http://calculator.coolclimatenetwork.net';
// const BASE_URL = 'http://localhost:3000';


class Widget {

  constructor(options) {
    let widget = this,
        url = BASE_URL || options.url;

    widget.cc_url = `${url}?` + $.param({
      utm_source: options.source,
      utm_medium: 'iframe',
      utm_campaign: options.campaign || 'carboncalculator'
    });

    widget.max_width = options.max_width || '1200px';
    widget.height = options.height;
    widget.container = options.container_id;
    widget.cta = options.cta;
    widget.banner_url = options.banner_url || false;
    widget.user_platform = options.user_platform;
    widget.banner_style = options.banner_style || {};
    widget.iframe = 'cc-calculator';

    widget.draw()
  }

  composeParameters() {
    let widget = this,
        params = {};

    params = {
      src: widget.cc_url,
      id: widget.iframe,
      width: '1px',
      height: widget.height,
      frameborder: 0,
      scrolling: 'no'
    }

    return params;
  }

  sendMsg() {
    let widget = this,
        iframe = $('iframe#' + widget.iframe),
        contentWindow = iframe[0].contentWindow,
        message = {};

    message = {
      connect_to_api: widget.user_platform,
      cta: widget.cta,
      banner_style: widget.banner_style,
      banner_url: widget.banner_url,
    };

    $(iframe).on("load", function() {
      setTimeout(function() {
        contentWindow.postMessage(JSON.stringify(message), "*");
      },50);
    })
  }

  draw() {
    let widget = this,
    tag = '#' + widget.container;

    $('<iframe>', widget.composeParameters()).appendTo(tag).css({'width': '1px', 'min-width': '100%'});
    widget.sendMsg();

    if (!widget.height) {
      iFrameResize({
        log: false,
        checkOrigin: false
      }, 'iframe#' + widget.iframe);
    }

  }
}

export default Widget;
