
module pattern.command.main;

import pattern.command.editor;
import pattern.command.commands;
import std.stdio;


void command_main(){
    writeln("Command Main:");
    auto photo = new Photo(brightness: 50, contrast: 20, filter: "highlight");
    auto undoStack = new UndoStack();

    photo.display();

    writeln("\nApplying commands...");

    auto cmd = new AdjustBrightnessCommand(photo, 100);
    auto cmd2 = new AdjustContrastCommand(photo, 200);
    auto cmd3 = new AddFilterCommand(photo, "Grayscale");

    undoStack.executeCommand(cmd);
    undoStack.executeCommand(cmd2);
    undoStack.executeCommand(cmd3);

    photo.display();

    undoStack.undo();
    undoStack.undo();
    undoStack.undo();
    photo.display();

    undoStack.redo();
    photo.display();

    auto cmd4 = new AddFilterCommand(photo, "Blur");
    undoStack.executeCommand(cmd4);
    undoStack.undo();
    undoStack.redo();
    photo.display();

    undoStack.undo();
    photo.display();



}


