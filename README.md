## Stephen King Reading Graph

A small, static website that gives a **graphical overview of selected Stephen King novels**, showing:

- **Spoiler level** for each book (good starting point vs. heavily connected)
- **Reading-order edges** where one book strongly spoils or builds on another

### How to run it

You have two simple options:

- **Open directly**: double‑click `index.html` (or open it in your browser).  
  - This works in most browsers, though some older ones can be picky about local files.
- **Run a tiny local server** (recommended if you have Node installed):
  1. Open a terminal in this folder.
  2. Run:
     ```bash
     npm install serve -g
     serve .
     ```
  3. Open the URL it prints (usually `http://localhost:3000` or similar).

### How to use the graph

- **Nodes**: individual novels or series entries (e.g. Dark Tower books).
- **Colors**:
  - Green – relatively **spoiler‑safe / standalone**.
  - Yellow – **connected** with light to moderate spoilers.
  - Red – **strong spoilers or deep series entries**; better after other books.
- **Edges (lines)**: “read **from → to** first” because `to` can spoil or heavily reference `from`.
- **Sidebar**:
  - Click any node to see:
    - Year, series / standalone status.
    - A short note about how it fits into the universe.
    - Lists of books it can spoil or that should ideally be read first.

This is a **fan‑made** and **opinionated** guide – not exhaustive and not an official source.

