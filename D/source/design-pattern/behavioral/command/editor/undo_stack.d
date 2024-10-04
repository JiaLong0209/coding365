module pattern.command.editor.undo_stack;

import pattern.command.commands;
import std.stdio;

class UndoStack {
  Command[] undoCommands;
  Command[] redoCommands;

  this(Command[] undoCommands = [], Command[] redoCommands = []){
    this.undoCommands = undoCommands;
    this.redoCommands = redoCommands;
  }

  void executeCommand(Command command){
    writeln("--- Execute ---");
    command.execute();
    undoCommands ~= command;
    redoCommands = [];
  }

  void undo(){
    if (undoCommands.length != 0){
      auto command = undoCommands[$ - 1];
      writeln("--- Undo ---");
      command.undo_info();
      command.undo();
      redoCommands ~= command;
      undoCommands = undoCommands[0 .. $ - 1];
    }
  }

  void redo(){
    if (redoCommands.length != 0){
      auto command = redoCommands[$ - 1];
      writeln("--- Redo ---");
      command.execute();
      undoCommands ~= command;
      redoCommands = redoCommands[0 .. $ - 1];
    }
  }
}

