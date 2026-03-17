# Fix the stray " l'" above the button
path = r"c:\Users\verto\Documents\Landing page Lyzario\index.html"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()
# Remove " l'" or " l' " (space + l + any apostrophe) before <p class="hero-cta-wrap">
content = content.replace(" l\u2019<p", "          <p")  # Unicode right single quote
content = content.replace(" l'<p", "          <p")       # ASCII apostrophe
with open(path, "w", encoding="utf-8") as f:
    f.write(content)
print("Done")
