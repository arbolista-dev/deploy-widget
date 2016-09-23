import Widget from './widget';

describe('CC Calc Widget', () => {

  var container = document.createElement('div');
  container.setAttribute('id', 'container');

  document.body.appendChild(container);

  it('should be created', () => {
    let widget = new Widget({
        width: '100%',
        container_id: 'container',
        carbon_price_per_ton: 23,
        offset_url: 'http://natureconservancy.com/offset',
        user_platform: false,
        description: 'Your support will fund forest conservation and help reduce or slow the worst consequences of climate change.',
        banner_url: "https://clipartion.com/wp-content/uploads/2016/03/green-banner-transparent-png-image.png",
        banner_style: {'maxHeight': '60px'}
      });

    expect(widget).not.toBeNull();
  });
});
