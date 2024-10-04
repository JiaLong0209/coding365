module pattern.command.commands.adjust_contrast;

import std.stdio;
import pattern.command.commands.base_command;
import pattern.command.editor.photo;


class AdjustContrastCommand : Command{
  Photo photo;
  int previous;
  int adjustment;


  this(Photo photo, int adjustment){
    super(photo);
    this.photo = photo;
    this.adjustment = adjustment;
  }

  override void execute(){
    previous = photo.contrast;
    photo.adjustContrast(adjustment);
  }

  override void undo(){
    photo.contrast = previous;
  }

  override void undo_info(){
    writefln("Undo: Contrast '%d' -> '%d'", photo.contrast, previous);
  }

}


