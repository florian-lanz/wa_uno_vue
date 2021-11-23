<template>
  <v-container fluid>
    <v-card :elevation="0">
      <v-card-text>
        <h1 class="text-center">Uno</h1>
        <hr/>
        <p class="text-center text-justify pb-sm-10 pb-md-2">
          Uno ist ein US-amerikanisches Kartenspiel, dessen primäres Ziel es ist,
          seine Karten vergleichbar mit Mau-Mau möglichst schnell abzulegen, wobei mit einem speziellen Blatt gespielt
          wird. Das Spiel wurde auf der Grundlage einer traditionellen Spielidee bereits 1969 von Merle Robbins –
          einem Inhaber eines Friseursalons in Milford – mit Hilfe seiner Frau Marie, seinem Sohn
          Ray und dessen Frau Kathy entwickelt. Anfangs wurde es nur in der eigenen Familie gespielt. Seit 1972
          wird
          das
          Spiel von der Firma International Games international vermarktet.
          <br/>
          <br/>
          Das Spiel besteht aus 108 Karten. Dabei gibt es Zahlen- sowie Aktionskarten in 4 verschiedenen Farben &
          außerdem schwarze Sonderkarten. Die Zahlen- & Aktionskarten gibt es in den Farben Blau, Grün, Gelb &
          Rot.
          Die Zahlenkarten gehen von 0-9, wobei es die 0 in jeder Farbe nur einmal gibt und die Karten 1-9 in
          jeder Farbe
          2 mal. Die Aktionskarten bestehen aus einer Aussetzen-Karte, einer Richtungswechsel-Karte und einer
          +2-Karte. Diese gibt es jeweils auch 2 mal in jeder Farbe. Die schwarzen Sonderkarten bestehen aus einer
          Farbwechsel-Karte & einer +4-Karte, beide Sonderkarten gibt es jeweils 4 mal. Die Funktionsweise der
          Aktions- & Sonderkarten wird unten genauer erklärt.
          <br/>
        </p>

        <h1 class="text-center">Spielregeln</h1>
        <hr/>

        <h3 class="text-center">Ziel des Spiels</h3>

        <p class="text-center text-justify pb-sm-10 pb-md-2">
          Das Ziel des Spiels ist es, die eigenen Handkarten vollständig abzulegen, bevor ein anderer Spieler seine
          Karten vollständig ablegen konnte. Das Spiel kann gegen 1, 2 oder 3 Gegner gespielt werden.
        </p>

        <h3 class="text-center">Zu Beginn des Spiels</h3>

        <p class="text-center text-justify pb-sm-10 pb-md-2">
          Bei jedem neuen Spiel erhält jeder Spieler 7 zufällige Handkarten. Die verbleibenden Karten werden verdeckt
          in die Mitte gelegt und bilden den Kartenstapel. Vom Kartenstapel wird die oberste Karte
          aufgedeckt und daneben gelegt. Dieser Stapel bildet den Ablegestapel. Du beginnst jede Spielrunde.
        </p>

        <h3 class="text-center">Spielverlauf</h3>

        <p class="text-center text-justify pb-sm-10 pb-md-2">
          Der erste Spieler legt eine Karte von seiner Hand auf den Ablagestapel. Dabei gilt: Eine Karte kann nur auf
          eine Karte der gleichen Farbe oder der gleichen Zahl gelegt werden. Kann ein Spieler keine passende Karte
          legen, so muss er eine Strafkarte vom verdeckten Stapel ziehen. Diese Karte kann er sofort wieder
          ausspielen, sofern diese passt. Hat er keine passende Karte ist der nächste Spieler an der Reihe. Die Runde
          gewinnt derjenige, welcher die letzte Karte abgelegt hat.
        </p>

        <br><br>

        <h1 class="text-center">Aktions- & Spezialkarten</h1>
        <hr/>

        <h3 class="text-center">Aktionskarten</h3>

      </v-card-text>
    </v-card>

    <v-row>
      <v-col md="2" sm="12">
        <v-card :elevation="0">
          <v-carousel cycle hide-delimiter-background hide-delimiters show-arrows-on-hover height="auto">
            <v-carousel-item>
              <img src="../assets/R+2.png" width="100">
            </v-carousel-item>
            <v-carousel-item>
              <img src="../assets/B+2.png" width="100">
            </v-carousel-item>
            <v-carousel-item>
              <img src="../assets/G+2.png" width="100">
            </v-carousel-item>
            <v-carousel-item>
              <img src="../assets/Y+2.png" width="100">
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col md="10" sm="12">
        <v-card :elevation="0">
          <v-card-text>
            <h4 class="text-sm-center text-md-left">Zieh Zwei Karten</h4>
            <p class="text-justify pb-sm-10 pb-md-2">
              Wenn diese Karte gelegt wird, muss der nächste Spieler 2 Karten ziehen und darf
              in dieser Runde keine Karten ablegen. Diese Karte kann nur auf eine Karte mit entsprechender
              Farbe oder andere Zieh Zwei Karten gelegt werden.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="2" sm="12">
        <v-card :elevation="0">
          <v-carousel cycle hide-delimiter-background hide-delimiters show-arrows-on-hover height="auto">
            <v-carousel-item>
              <img src="../assets/R_D.png" width="100">
            </v-carousel-item>
            <v-carousel-item>
              <img src="../assets/B_D.png" width="100">
            </v-carousel-item>
            <v-carousel-item>
              <img src="../assets/G_D.png" width="100">
            </v-carousel-item>
            <v-carousel-item>
              <img src="../assets/Y_D.png" width="100">
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col md="10" sm="12">
        <v-card :elevation="0">
          <v-card-text>
            <h4 class="text-sm-center text-md-left">Richtungswechsel Karte</h4>
            <p class="text-justify pb-sm-10 pb-md-2">
              Bei dieser Karte ändert sich die Spielrichtung. Wenn bisher nach links gespielt wurde, wird nun nach
              rechts gespielt und umgekehrt. Die Karte kann nur auf eine entsprechende Farbe oder eine andere
              Retour Karte gelegt werden.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>



    <v-row>
      <v-col md="2" sm="12">
        <v-card :elevation="0">
          <v-carousel cycle hide-delimiter-background hide-delimiters show-arrows-on-hover height="auto">
            <v-carousel-item>
              <img src="../assets/R_S.png" width="100">
            </v-carousel-item>
            <v-carousel-item>
              <img src="../assets/B_S.png" width="100">
            </v-carousel-item>
            <v-carousel-item>
              <img src="../assets/G_S.png" width="100">
            </v-carousel-item>
            <v-carousel-item>
              <img src="../assets/Y_S.png" width="100">
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col md="10" sm="12">
        <v-card :elevation="0">
          <v-card-text>
            <h4 class="text-sm-center text-md-left">Aussetzen Karte</h4>
            <p class="text-justify pb-sm-10 pb-md-2">
              Nachdem diese Karte gelegt wurde, wird der nächste Spieler „übersprungen“. Die Karte kann nur
              auf eine andere mit entsprechender Farbe oder eine andere Aussetzen Karte gelegt werden.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


    <v-card :elevation="0">
      <v-card-text>
        <h3 class="text-center">Spezialkarten</h3>
      </v-card-text>
    </v-card>

    <v-row>
      <v-col md="2" sm="12">
        <v-card :elevation="0">
          <v-card-text>
            <img src="../assets/S_C.png" width="100">
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="10" sm="12">
        <v-card :elevation="0">
          <v-card-text>
            <h4 class="text-sm-center text-md-left">Farbauswahlkarte</h4>
            <p class="text-justify pb-sm-10 pb-md-2">
              Der Spieler, der diese Karte legt, entscheidet welche Farbe als nächstes gelegt werden soll. Auch
              die schon liegende Farbe darf gewählt werden. Ein Farbenwahl Karte darf auch dann gelegt werden,
              wenn der Spieler eine andere Karte legen könnte. Wenn eine Farbenwahl Karte zu Beginn des Spiels
              gezogen wird, entscheidet der beginnende Spieler, welche Farbe als nächstes gelegt werden soll.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="2" sm="12">
        <v-card :elevation="0">
          <v-card-text>
            <img src="../assets/S+4.png" width="100">
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="10" sm="12">
        <v-card :elevation="0">
          <v-card-text>
            <h4 class="text-sm-center text-md-left">Zieh Vier Farbauswahlkarte</h4>
            <p class="text-justify pb-sm-10 pb-md-2">
              Diese Karte ist die beste. Der Spieler, der sie legt, entscheidet, welche Farbe als nächstes gelegt
              werden soll. Zudem muss der nächste Spieler 4 Karten von dem Kartenstapel nehmen. Er darf in
              dieser Runde keine Karte ablegen. Leider darf die Karte nur dann gelegt werden, wenn der Spieler der
              sie hat, keine Karte in der Hand hält, die der Farbe auf dem Ablegestapel entspricht. Hat der
              Spieler eine Karte mit der entsprechenden Nummer oder Aktionskarten, kann die Zieh Vier
              Farbauswahlkarte dennoch gelegt werden.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-card :elevation="0">
      <v-card-text>
        <hr/>
      </v-card-text>
    </v-card>

    <template>
      <v-footer padless >
        <v-card class="flex" flat tile >

          <v-card-title class="white--text">


            <a href="/" class="text-decoration-none">
              <img src="../assets/Uno_Logo.png" width="50" alt="Logo"/>
            </a>

            <v-spacer></v-spacer>

            <strong class="footer-names">© {{ new Date().getFullYear() }} • Moritz Knauer & Florian Lanz</strong>

            <v-spacer></v-spacer>

            <a href="https://github.com/florian-lanz/WA_Uno/" class="text-decoration-none" target="_blank" >
              <v-icon class="footer-icon">mdi-github</v-icon>
            </a>
            <a href="mailto:moritz.knauer@htwg-konstanz.de" class="text-decoration-none" target="_blank" >
              <v-icon class="footer-icon">mdi-email</v-icon>
            </a>
          </v-card-title>
        </v-card>
      </v-footer>
    </template>

  </v-container>
</template>

<script>
export default {
  name: "AboutComponent"
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .footer-names {
    font-family: Comfortaa;
    color: #FFFFFF;
  }

  .footer-icon {
     color: #FFFFFF;
     font-size: 32px;
     padding: 0px 15px 0px 15px;
   }

  .footer-icon:hover {
    color: #999999;
    transition-duration: 0.3s;
  }

  div {
    background-color: #141427 !important;
  }

  h1 {
    font-family: Comfortaa;
    color: #FFFFFF;
    padding: 15px 15px 15px 15px;
  }

  h3 {
    font-family: Comfortaa;
    color: #FFFFFF;
    padding: 15px 15px 15px 15px;
  }

  h4 {
    font-family: Comfortaa;
    color: #FFFFFF;
  }

  p {
    font-family: Comfortaa;
    font-size: 16px;
    font-weight: normal;
    text-align: justify;
    color: #FFFFFF;
    padding-top: 15px;
    padding-left: 30px;
    padding-right: 30px;
  }

  hr {
    color: #FFFFFF !important;
  }
</style>