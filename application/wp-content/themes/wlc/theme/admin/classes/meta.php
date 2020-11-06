<?php     
/**
 * Helper for saving Meta Data
 **/

class ST_Meta
{
  private static $metaNames = [];
  private static $metaData  = [];
  private static $postId    = false;
  private static $html      = false;

  private function __construct() {}

  /**
   * Save metabox
   * 
   * @param int
   * @return string
   **/
  public function save($metaNames, $postId, $html = false)
  {
    self::cleanup();

    self::$metaNames = $metaNames;
    self::$postId    = $postId;
    self::$html      = $html;

    self::prepareMetadata();

    if(is_numeric($postId))
      self::saveMetadata();
    else
      self::saveOption();
  }

  /**
   * Prepare Metanames
   */
  private function prepareMetadata()
  {
    foreach (self::$metaNames as $k => $metaName) {
      self::$metaData[str_replace('-','_',$metaName)] = self::sanitizeData($_POST[$metaName]);
    }
  }

  /**
   * Save Metadata custom functions
   */
  private function saveMetadata()
  {
    foreach(self::$metaData as $metaName => $metaData) {
      if(is_array($metaData))
        self::saveArray($metaName, $metaData);
      else 
        self::saveValue($metaName, $metaData);
    }
  }

  /**
   * Save Metadata custom functions
   */
  private function saveOption()
  {
    foreach(self::$metaData as $metaName => $metaData) {
      update_option('st-' . self::$postId . '-' . $metaName, $metaData, false);
    }
  }

  /**
   * Save One Meta
   */
  private function saveValue($metaKey, $metaNewValue)
  {
    $metaOldValue = get_post_meta(self::$postId, $metaKey, true);

    if (strlen($metaNewValue) > 0 && !is_array($metaOldValue) && strlen($metaOldValue) == 0) {
      add_post_meta(self::$postId, $metaKey, $metaNewValue, true);
    }
    elseif (strlen($metaNewValue) > 0 && $metaNewValue != $metaOldValue) {
      update_post_meta(self::$postId, $metaKey, $metaNewValue, $metaOldValue);
    }
    elseif (strlen($metaNewValue) == 0 && (is_array($metaOldValue) || strlen($metaOldValue) > 0)) {
      delete_post_meta(self::$postId, $metaKey, $metaOldValue);
    }
  }

  /**
   * Save Array
   */
  private function saveArray($metaKey, $metaNewArray)
  {
    $metaOldValue = get_post_meta(self::$postId, $metaKey, true);

    if (!empty($metaNewArray) && $metaOldValue == 0) {
      add_post_meta(self::$postId, $metaKey, $metaNewArray, true);
    }
    elseif (!empty($metaNewArray) && $metaNewArray != $metaOldValue) {
      update_post_meta(self::$postId, $metaKey, $metaNewArray, $metaOldValue);
    }
    elseif (empty($metaNewArray) && $metaOldValue != 0) {
      delete_post_meta(self::$postId, $metaKey, $metaOldValue);
    }
  }

  /**
   * Sanitize Data
   */
  public function sanitizeData($value)
  {
    if(self::$html) 
      return (isset($value) ? (is_array($value) ? array_map('self::sanitizeData', $value) : $value = trim(stripslashes($value))) : NULL);
    else 
      return (isset($value) ? (is_array($value) ? array_map('self::sanitizeData', $value) : $value = trim(strip_tags(stripslashes($value)))) : NULL);
  }

  /**
   * Cleanup Values
   */
  private function cleanup()
  {
    self::$metaNames = [];
    self::$metaData  = [];
    self::$postId    = false;
  }
}

?>