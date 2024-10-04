module pattern.command.commands.add_filter;

import std.stdio;
import pattern.command.commands.base_command;
import pattern.command.editor.photo;


class AddFilterCommand : Command{
  Photo photo;
  string previous;
  string filter;


  this(Photo photo, string newFilter){
    super(photo);
    this.photo = photo;
    this.filter = newFilter;
  }

  override void execute(){
    previous = photo.filter;
    photo.addFilter(filter);
  }

  override void undo(){
    photo.filter = previous;
  }

  override void undo_info(){
    writefln("Undo: Filter '%s' -> '%s'", photo.filter, previous);
  }

}


