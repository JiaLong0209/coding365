module pattern.command.commands.base_command;

import pattern.command.editor.photo;

abstract class Command {
  Photo photo;

  this(Photo photo){
    this.photo = photo;
  }

  abstract void execute();
  abstract void undo();
  abstract void undo_info();
}
