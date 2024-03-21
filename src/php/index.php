 <!DOCTYPE html>
 <html lang="pl">

 <head>
     <meta charset="UTF-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link rel="preconnect" href="https://fonts.googleapis.com" />
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
     <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap" rel="stylesheet" />
     <title>CV</title>
     <script src="https://kit.fontawesome.com/2579630608.js" crossorigin="anonymous"></script>
     <link rel="stylesheet" href="/dist/css/style.min.css" />
     <link rel="stylesheet" href="/dist/css/loginForm.min.css" />
 </head>


 <body class="body">
     <div id="loginForm">
         <form onsubmit="return login(this)">
             <label for="username">Login:</label><br />
             <input type="text" id="username" name="username" style="font-size: 2rem; margin: 2rem" /><br />
             <label for="password" style="color: white; font-size: 2rem; margin: 1rem; padding: 1rem">Hasło:</label><br />
             <input type="password" id="password" name="password" style="font-size: 2rem; margin: 2rem" /><br />
             <div style="display: flex">
                 <div class="checkbox">
                     <input type="checkbox" name="pl" id="pl" checked />
                     <p>pl</p>
                 </div>
                 <div class="checkbox">
                     <input type="checkbox" name="eng" id="eng" />
                     <p>eng</p>
                 </div>
             </div>
             <div id="errorDiv" style="font-size: 2rem; ">
                 Niepoprawny login. Proszę skontaktować się z właścicielem strony pod
                 adresem <br />
                 <span style="font-size: 2.5rem; margin: 2rem; padding: 2rem">tyc.pawel@gmail.com</span>
             </div>
             <br />

             <button type="submit" id="loginButton">Zaloguj się</button>
         </form>
     </div>

     <footer class="footer">
         <p>uroboros.online <span id="year"></span></p>
     </footer>
     <script src="/dist/js/script.min.js"></script>
     <script src="/dist/js/footer.min.js"></script>
 </body>

 </html>