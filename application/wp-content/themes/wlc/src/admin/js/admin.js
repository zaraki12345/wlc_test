jQuery(document).ready(function($) {

  $("#the-list.ui-sortable tr").mouseup(function() {
    
    setTimeout(function() {
      var ids = new Array();
      $.each($("#the-list.ui-sortable tr"), function(i, o) {
        ids.push($(o).attr('id').replace('post-', ''));
      });
    
      $.ajax({
        url: ajaxurl,
        type: 'post',
        data: {
          action : 'get_post_orders',
          ids : ids
        },
        success: function(data) {
          data = $.parseJSON(data);
          $.each(data, function(i, o) {
            $('#post-' + i + ' .column-order').text(o);
          });
        }
      });
    
    }, 1000);
    
  });
  
  new Clipboard('#emailHtmlSourceCopy');
  
  /* ----- Events ----- */
  
  $('#event-date').datepicker({
    dateFormat : 'yy-mm-dd'
  });
  
  // custom Gallery Uploader
  $('.st-custom-admin').on('click', '.custom-image-upload-input + a', function(e) {
    
    var inputUrl = $(this).parent().find('input.custom-image-upload-input');
    var inputId  = $(this).parent().find('input.custom-image-upload-id');
    
    e.preventDefault();
    var taUploader = wp.media({
      title: 'Custom Image',
      button: {
        text: 'Upload Image'
      },
      multiple: false
    })
    .on('select', function() {
      var attachment = taUploader.state().get('selection').first().toJSON();
      inputUrl.val(attachment.url);
      inputId.val(attachment.id);
    })
    .open();
  });
  
  $('.st-custom-admin').on('click', 'a[href="#clear"]', function(e) {
    
    var inputUrl = $(this).parent().parent().find('input.custom-image-upload-input').val('');
    var inputId  = $(this).parent().parent().find('input.custom-image-upload-id').val('');
    
    e.preventDefault();
  });
});