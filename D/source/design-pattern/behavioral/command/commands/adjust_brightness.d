module pattern.command.commands.adjust_brightness;

import std.stdio;
import pattern.command.commands.base_command;
import pattern.command.editor.photo;

class AdjustBrightnessCommand : Command{
  Photo photo;
  int previous;
  int adjustment;


  this(Photo photo, int adjustment){
    super(photo);
    this.photo = photo;
    this.adjustment = adjustment;
  }

  override void execute(){
    previous = photo.brightness;
    photo.adjustBrightness(adjustment);
  }

  override void undo(){
    photo.brightness = previous;
  }

  override void undo_info(){
    writefln("Undo: Brightness '%d' -> '%d'", photo.brightness, previous);
  }


}


