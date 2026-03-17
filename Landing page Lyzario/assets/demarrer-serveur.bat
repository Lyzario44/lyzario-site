@echo off
echo Demarrage du serveur local...
echo.
echo Sur ce PC : ouvrez http://localhost:8080
echo.
echo Sur portable (meme WiFi) : ouvrez http://VOTRE_IP:8080
echo   Pour connaitre votre IP : tapez "ipconfig" et cherchez "Adresse IPv4"
echo   Exemple : http://192.168.1.10:8080
echo.
echo Pour arreter : fermez cette fenetre ou Ctrl+C
echo.
cd /d "%~dp0"
python -m http.server 8080
pause
