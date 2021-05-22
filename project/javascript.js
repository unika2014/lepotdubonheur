var quotes = [
"Je t'aime beaucoup",
"Prend du temps pour toi aujourd'hui",
"Tu as les plus beaux yeux du mondeee",
"Tu es parfaite, ne le doute jamais!",
"Reste forte, Maman!",
"Tu es super intelligente!",
"Arrête de prendre soin de tout le monde, pour une fois, occupe-toi de toi",
"You are the kindest person on this planet",
"Tu m’impressionnes",
"Sans toi, notre vie de famille ne serait pas aussi merveilleuse",
"T’es belle!",
"Tu es une bonne mère",
"Tu es une maman extraordinaire.",
"J’aimerais être aussi patient que toi, avec moi !",
"Le monde serait sûrement un meilleur endroit s’il n’y avait que des mamans comme toi.",
"Tu es mon héroïne.",
"Tu es la personne la plus généreuse que je connaisse.",
"Je sais que ce n’est pas toujours facile, mais je sais que tu fais toujours de ton mieux.",
"J’ai tellement de chance que tu sois ma maman",
"Comment fais-tu pour être aussi forte ?",
"J’espère que j’arriverais à être une aussi bonne mère que toi !",
"Ta gentillesse est sans limite.",
"Merci de m'avoir donné un aussi bon exemple pour le futur.",
"Tu as une beauté préraphaélite.",
"Tu es irremplaçable.",
"Tu es le sucre de mes Kellogg’s Corn Flakes.",
"A MOTHER IS THE PERSON YOU CAN ALWAYS CALL TO SEE HOW LONG CHICKEN LASTS IN THE FRIDGE.",
"SILENCE IS GOLDEN. UNLESS YOU HAVE KIDS. THEN SILENCE IS JUST SUSPICIOUS.",
"MOM: I LOVE YOU AND YOUR SUPER LONG VOICEMAILS.",
"IT’S NOT EASY BEING A MOM. IF IT WERE EASY, FATHERS WOULD DO IT.",
"I’m a survivor / I’m not gonna give up / I’m not gonna stop / I’m gonna work harder",
"I’m a survivor / I’m gonna make it / I will survive / keep on surviving”",
"Self-esteem means knowing you are the dream.” — Oprah Winfrey",
"I was built this way for a reason, so I’m going to use it.” — Simone Biles",
"You are your best thing.” —Toni Morrison",
"You’ve got to learn to leave the table when love’s no longer being served.” — Nina Simone",
"What I know for sure is that speaking your truth is the most powerful tool we all have.” — Oprah Winfrey",
"Even if it makes others uncomfortable, I will love who I am.” — Janelle Monae",
"I thrive on obstacles. If I’m told that it can’t be told, then I push harder.” —Issa Rae",
"I have standards I don’t plan on lowering for anybody, including myself.” — Zendaya",
"Service is the rent that you pay for room on this earth.” — Shirley Chisholm",
"Yesterday's the past, tomorrow's the future, but today is a gift. That's why it's called the present. — Bil Keane",
"You must be the change you wish to see in the world. — Mahatma Gandhi",

"If you want to sing out, sing out, and if you want to be free, be free, cause there's a million ways to be, you know that there are. Cat Stevens",
"And when the broken-hearted people / Living in the world agree / There will be an answer / Let it be”",
"Oh, we got our feet on the ground / And we’re burning it down / Oh, got our head in the clouds / And we’re not coming down”",
"What doesn’t kill you makes you stronger / Stand a little taller",
"Doesn’t mean I’m lonely when I’m alone",
"What doesn’t kill you makes a fighter”",
"You only get one shot, do not miss your chance to blow / This opportunity comes once in a lifetime”",
"I will survive / Oh, as long as I know how to love I know I’ll stay alive / I’ve got all my life to live / I’ve got all my love to give / I will survive”",
"It’s my life / It’s now or never / I ain’t gonna live forever / I just want to live while I’m alive”",

"Woman I can hardly express My mixed emotions and my thoughtlessness After all I’m forever in your debt And woman I will try to express My inner feelings and thankfulness For showing me the meaning of success…",
"I went out in my goddamn underwear too!-Julia Roberts",
"You know when people are stupid, it frustrates me.-Julia Roberts",
"I'm too tall to be a girl. I'm between a chick and a broad.",
"I wouldn't do nudity in films. For me, personally... To act with my clothes on is a performance; to act with my clothes off is a documentary.-Julia Roberts",
"As long as I have one ass instead of two, I'll wear what I like.- Julia"







]
function newQuote (){
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById("quotesDisplay").innerHTML = quotes[randomNumber];
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

