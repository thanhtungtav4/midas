export default function ProductModule() {
  if ($('.cate-block').length) {
    $('.js-toggle_box').hide();
    $('.js-toggle_box').first().show();
    $('.cate-title').first().addClass('is-active');
    $('.cate-title').click(function () {
      $(this).toggleClass('is-active');
      $(this).next().stop().slideToggle()
    })
  }


  if ($('.js-has_viewmore .mona-content').length) {
    $('.js-has_viewmore .mona-content').each(function () {
      var contentBlock = $(this);
      var maxHeight = 800;

      if (contentBlock.prop('scrollHeight') > maxHeight) {
        contentBlock.css('max-height', maxHeight + 'px');
        contentBlock.addClass('is-full');
        contentBlock.after('<div class="block-blur"><button class="view-more_content"><p>Xem thêm</p><img src="/template/assets/images/common/arrow-down.svg"/></button></div>');

        var seeMoreBtn = contentBlock.next('.block-blur').find('.view-more_content');

        seeMoreBtn.on('click', function () {
          if (contentBlock.css('max-height') === maxHeight + 'px') {
            contentBlock.css('max-height', contentBlock.prop('scrollHeight') + 'px');
            contentBlock.removeClass('is-full');
            seeMoreBtn.addClass('is-active');
            seeMoreBtn.find('p').text('Thu gọn');
          } else {
            contentBlock.css('max-height', maxHeight + 'px');
            contentBlock.addClass('is-full');
            seeMoreBtn.removeClass('is-active');
            seeMoreBtn.find('p').text('Xem thêm');
          }
        });
      }
    });
  }

  //home
  if ($('.js-mini-desc').length) {
    $('.js-mini-desc .mona-content').each(function () {
      var contentBlock = $(this);
      var maxHeight = 200;

      if (contentBlock.prop('scrollHeight') > maxHeight) {
        contentBlock.css('max-height', maxHeight + 'px');
        contentBlock.addClass('is-full');
        contentBlock.after('<div class="block-blur"><button class="view-more_content"><p>Xem thêm</p><img src="/template/assets/images/common/arrow-down.svg"/></button></div>');

        var seeMoreBtn = contentBlock.next('.block-blur').find('.view-more_content');

        seeMoreBtn.on('click', function () {
          if (contentBlock.css('max-height') === maxHeight + 'px') {
            contentBlock.css('max-height', contentBlock.prop('scrollHeight') + 'px');
            contentBlock.removeClass('is-full');
            seeMoreBtn.addClass('is-active');
            seeMoreBtn.find('p').text('Thu gọn');
          } else {
            contentBlock.css('max-height', maxHeight + 'px');
            contentBlock.addClass('is-full');
            seeMoreBtn.removeClass('is-active');
            seeMoreBtn.find('p').text('Xem thêm');
          }
        });
      }
    });
  }

  // end home//

  if ($('.js-filter_mb').length) {
    $('.js-filter_mb').on('click', function () {
      event.stopPropagation();
      $(this).parent().find('.main-box_mb').addClass('is-active');
      $('html').addClass('scroll-remove');
    })

    $('.js-close_filter').on('click', function () {
      event.stopPropagation();
      $('.main-box_mb').removeClass('is-active')
      $('html').removeClass('scroll-remove');
    })


    $(document).on('click', function (event) {
      if (!$(event.target).closest('.main-box_mb').length && $('.main-box_mb').hasClass('is-active')) {
        $('.main-box_mb').removeClass('is-active');
        $('html').removeClass('scroll-remove');
      }
    });
  }

  if ($('.js-toc_open').length) {
    $('.js-toc_open').on('click', function () {
      $(this).parent('.toc-mb').addClass('is-active');
    })

    $('.js-toc_close').on('click', function () {
      $(this).parent('.toc-mb').removeClass('is-active');
    })
  }

}