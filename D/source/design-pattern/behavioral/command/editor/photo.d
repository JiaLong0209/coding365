module pattern.command.editor.photo;

import std.stdio;

class Photo{
  int brightness = 0;
  int contrast = 0;
  string filter = "None";

  this(int brightness = 0, int contrast = 0, string filter = "None"){
    this.brightness = brightness;
    this.contrast = contrast;
    this.filter = filter;
  }

  void adjustBrightness(int value) {
    brightness += value;
    writeln("Brightness adjusted to: ", brightness);
  }

  void adjustContrast(int value) {
    contrast += value;
    writeln("Contrast adjusted to: ", contrast);
  }

  void addFilter(string newFilter) {
    filter = newFilter;
    writeln("Filter added: ", filter);
  }

  void display(){
    writefln("Photo State: \n\tBrightness: %d\n\tContrast: %d\n\tFilter: %s", brightness, contrast, filter);
  }
}


