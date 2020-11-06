jQuery(document).ready(function($) {
  // tooltips
  $('.st-custom-admin').tooltip({
    items: '.st-tooltip-gallery, .st-tooltip',
    content: function() {
      // image tooltip for input image item
      if($(this).hasClass('st-tooltip-gallery')) {
        var url = $(this).closest('p').find('.custom-image-upload-input').val();
        if(url != '') {
          return '<img style="max-width:300px; max-height:200px; width:auto; height:auto" src="' + url + '" />';
        }
        else {
          return 'Nothing found';
        }
      }
      // default tooltip
      return $(this).attr('tooltip-content');
    }
  });

  // start colorpicker
  $('.color-picker').wpColorPicker();

  // create pattern clicks
  $('a[data-action="clone"]').on('click', function(e) {
    e.preventDefault();

    // get the element ID
    var elId        = $(this).attr('data-el-id');
    var elContainer = $(elId + '-container');
    var htmlPattern = $(elId).html();
    elContainer.append(htmlPattern);
    elContainer.find('[disabled]').removeProp('disabled');
    elContainer.find('.disabled').prop('disabled', true);
  });

  // on remove
  $('.pattern-container').on('click', '.remove-line', function(e) {
    e.preventDefault();
    $(this).closest('.pattern-line').remove();
  });
});
