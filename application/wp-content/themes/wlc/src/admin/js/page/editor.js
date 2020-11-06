/**
 * ST_Editor
 * Wordrpess Page Content Editor
 **/

/**
 * "Constructor"
 **/
function ST_Editor()
{
  // jQuery dom selectors
  this.$container            = jQuery('#stEditorContent'); // main container
  this.$addBlockButtons      = jQuery('#stEditorBlocks a'); // add new block buttons
  this.$orderBlocksButton    = jQuery('#stEditorActions a[data-action="order-blocks"]'); // add new block buttons

  // dom selectors
  this.deleteBlockSelector        = 'a[data-editor-action="delete-block"]';
  this.inputColorSelector         = '.input-color input';
  this.inputUploaderSelector      = '.button-editor-uploader';
  this.inputUploaderClearSelector = '.button-editor-uploader-clear';
  this.block                      = 'div[data-st-editor-id]';

  this.cloneButtonSelector        = 'a[data-clone-id]';
  this.cloneButtonSelector2        = 'a[data-clone-id-two]';
  this.cloneButtonDelete          = 'a[data-steditor-type="delete"]';

  this.listContentBoxSelector     = 'a[data-content-box-type]';

  // urls
  this.ajaxUrl             = steditor.ajaxUrl;

  // objects
  this.pendingAjax         = null;

  // boolean
  this.sorting             = false;
  
  // page Id
  this.pageId              = document.steditor != undefined ? (document.steditor.pageId != undefined ? document.steditor.pageId : null) : null;

  // init
  this.init();

  // init Events
  this.initEvents();
}

/**
 * init functionality
 **/
ST_Editor.prototype.init = function()
{
  this.initSortable();
  this.initColorPicker();
}

/**
 * init Event Handlers
 **/
ST_Editor.prototype.initEvents = function()
{
  jQuery('body').on('click', this.inputUploaderSelector, {obj: this}, this.uploadSelectorClick); // upload selector click
  jQuery('body').on('click', this.inputUploaderClearSelector, {obj: this}, this.uploadClearSelectorClick); // upload clear selector click
  
  jQuery('body').on('click', this.cloneButtonSelector, {obj: this}, this.cloneButtonSelectorClick); // upload clear selector clicks
  jQuery('body').on('click', this.cloneButtonDelete, {obj: this}, this.cloneButtonDeleteClick); // upload clear selector clicks

  this.$addBlockButtons.on('click', {obj: this}, this.addBlockClick); // add block
  this.$container.on('click', this.deleteBlockSelector, {obj: this},  this.deleteBlockClick); // delete block
  this.$orderBlocksButton.on('click', {obj: this}, this.orderBlocksClick); // enable/disable sorting
  this.$container.on('click', this.listContentBoxSelector, {obj: this}, this.listContentBoxSelectorClick); // content-box selector click
}

/**
 * add Block Event Handler
 * @param e [event]
 **/
ST_Editor.prototype.addBlockClick = function(e)
{
  e.preventDefault();

  var obj  = e.data.obj;

  if (obj.pendingAjax != null)
    return

  var type = jQuery(this).data('block');

  obj.addBlock(type);
}

/**
 * add Block
 * @param type [string]
 **/
ST_Editor.prototype.addBlock = function(type)
{
  var obj = this;

  this.pendingAjax = jQuery.ajax({
    method: 'post',
    url: this.ajaxUrl,
    dataType: 'json',
    data: {
      action: 'add_editor_block',
      type: type
    },
    success: function(data) {
      obj.render(data);
    }
  });
}

/**
 * delete Block Event Handler
 * @param e [event]
 **/
ST_Editor.prototype.deleteBlockClick = function(e)
{
  e.preventDefault();
  var obj = e.data.obj;

  var blockId = jQuery(this).data('block-id');

  obj.deleteBlock(blockId);
}

/**
 * delete Block
 * @param id [string]
 **/
ST_Editor.prototype.deleteBlock = function(id)
{
  var block = jQuery(this.block).filter('[data-st-editor-id="' + id + '"]');
  block.slideUp(250, function() {
    this.remove();
  });
}

/**
 * Order Block Event Handler
 * @param id [string]
 **/
ST_Editor.prototype.orderBlocksClick = function(e)
{
  e.preventDefault();
  var obj = e.data.obj;

  if (obj.sorting === false)
    obj.enableSorting();
  else 
    obj.disableSorting();
}

/**
 * Media Uploader
 * @param e [event]
 **/
ST_Editor.prototype.uploadSelectorClick = function(e)
{
  e.preventDefault();
  var obj = e.data.obj;

  var $button   = jQuery(this);

  var $inputId  = jQuery('#' + $button.data('uploader-id'));
  var $inputUrl = jQuery('#' + $button.data('uploader-id') + '-url');

  var button = jQuery(this),
    custom_uploader = wp.media({
      title: 'Insert image',
      library : {
        type : 'image'
      },
      button: {
        text: 'Use this image'
      },
      multiple: false
    }).on('select', function() {

    var attachment = custom_uploader.state().get('selection').first().toJSON();
    
    $inputId.val(attachment.id);
    $inputUrl.val(attachment.url);
  })
  .open();
}

/**
 * Clear Selector
 * @param e [event]
 **/
ST_Editor.prototype.uploadClearSelectorClick = function(e)
{
  e.preventDefault();
  var obj = e.data.obj;

  var $button   = jQuery(this);

  var $inputId  = jQuery('#' + $button.data('uploader-id'));
  var $inputUrl = jQuery('#' + $button.data('uploader-id') + '-url');
  
  $inputId.val('');
  $inputUrl.val('');
}

/**
 * enable drag & drop sorting
 **/
ST_Editor.prototype.enableSorting = function()
{
  this.sorting = true;
  var obj      = this;

  jQuery(this.block).each(function(i,o) {
    obj.smallerBlock(o);
  });

  this.$orderBlocksButton.text('Back to Editing');

  this.$container.sortable('enable');
  this.$container.disableSelection();
}

/**
 * disable drag & drop sorting
 **/
ST_Editor.prototype.disableSorting = function()
{
  this.sorting = false;
  var obj      = this;

  jQuery(this.block).each(function(i,o) {
    obj.largerBlock(o);
  });

  this.$orderBlocksButton.text('Enable Order');

  this.$container.sortable('disable');
  this.$container.enableSelection();

  this.$container.find('.overflow-block').remove();

  this.reorder();
}

/**
 * make block small with preveiw
 **/
ST_Editor.prototype.smallerBlock = function(block)
{
  var id           = jQuery(block).data('st-editor-id');

  var internalName = jQuery(('[id*="'  + id + 'internalName"]').replace("-", "")).val();

  jQuery(block).addClass('order-enabled');
  jQuery(block).append('<div class="overflow-block"><span>Internal Name: ' + internalName + '</span></div>')
}

/**
 * make block large(normal) without preveiw
 **/
ST_Editor.prototype.largerBlock = function(block)
{
  jQuery(this.block).removeClass('order-enabled');
}

/**
 * reorder
 **/
ST_Editor.prototype.initSortable = function()
{
  var obj = this;
  this.$container.sortable({
    placeholder: "ui-state-highlight",
    stop: function (item, container, _super) 
    {
      obj.reorder();
    }
  });

  this.$container.sortable('disable');
  this.reorder();
}

/**
 * reorder
 **/
ST_Editor.prototype.reorder = function()
{
  var order = 0;
  jQuery(this.block).each(function(i, o) {
    var id = jQuery(this).data('st-editor-id');
    var orderInput = jQuery('[name="sections[' + id + '][order]"]').val(order++);
  });
}

/**
 * Render
 * @param data [array]
 **/
ST_Editor.prototype.render = function(data)
{
  var blockId = jQuery(data.html).data('st-editor-id');
  if (data.success) {
    this.$container.prepend(jQuery(data.html).addClass('hidden'));
    this.$container.find(this.block).filter('[data-st-editor-id="' + blockId + '"]').slideDown(800);
    
    
  }

  this.reorder();
  this.initColorPicker(blockId);

  this.pendingAjax = null;
}

/**
 * Init Color Picker
 * @param data [array]
 **/
ST_Editor.prototype.initColorPicker = function(blockId = '')
{
  if (blockId == '')
    jQuery(this.inputColorSelector).wpColorPicker();
  else
    jQuery('div[data-st-editor-id="' + blockId + '"] ' + this.inputColorSelector).wpColorPicker();
}

/**
 * Content blox selector click
 * @param e [event]
 **/
ST_Editor.prototype.listContentBoxSelectorClick = function(e)
{
  e.preventDefault();

  var obj     = e.data.obj;

  var $button = jQuery(this);
  var id      = $button.data('id');
  var type    = $button.data('content-box-type');

  jQuery('#content-box-type-' + id).val(type);
}

/**
 * Content blox selector click
 * @param e [event]
 **/
ST_Editor.prototype.cloneButtonSelectorClick = function(e)
{
  e.preventDefault();
  var obj = e.data.obj;

  var pageId    = jQuery(this).data('page-id');
  var cloneId   = jQuery(this).data('clone-id');
  var section   = jQuery(this).data('section');
  var sectionId = jQuery(this).data('section-id');

  obj.addCloneAjax(pageId, cloneId, section, sectionId);
  
}

/**
 * Content blox selector click
 * @param e [event]
 **/
ST_Editor.prototype.cloneButtonDeleteClick = function(e)
{
  e.preventDefault();
  jQuery(this).closest('.d-flex').remove();
}

/**
 * add Clone Pattern
 * @param type [string]
 **/
ST_Editor.prototype.addCloneAjax = function(pageId, cloneId, section, sectionId)
{
  var obj = this;

  this.pendingAjax = jQuery.ajax({
    method: 'post',
    url: this.ajaxUrl,
    dataType: 'json',
    data: {
      action: 'clone_pattern',
      pageId: this.pageId,
      cloneId: cloneId,
      section: section,
      sectionId: sectionId
    },
    success: function(data) {
      if (data.success) {
        jQuery('div[data-clone-id="' + cloneId + '"]').append(data.html);
      }
    }
  });
}