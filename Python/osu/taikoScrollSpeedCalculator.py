
def printInfo():
    print(f"BPM: {bpm}")
    print(f"Notes of a stream: {notes_of_stream}")
    print(f"Notes on screen: {notes_on_screen}")
    print(f"Notes per second: {nps}")
    print(f"Scroll speed (ms): {scroll_speed_ms}")



bpm, notes_of_stream, notes_on_screen = map(int, input("Enter BPM, Notes of stream, notes on screen (ex: 215 4 10)\n:").split())
nps = bpm * notes_of_stream / 60
scroll_speed_ms = notes_on_screen / nps

printInfo()
