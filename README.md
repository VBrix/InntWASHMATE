# INNTWASHMATE

Vejledning til at køre INNTWASHMATE appen på både en emulator og en fysisk Android-enhed (NFC funktionalitet kan ikke testes med emulator kun fysisk - ihvertfal efter egne erfaringer).

EAS CLI (Expo Application Services) build er brugt til at bygge InntWASHMATE appen. Dette skyldes at expo go ikke understøtter implementering af native code eller brugerdefinerede native moduler.
Da appen implementere npm pakken: react-native-nfc-manager, som er et brugerdefineret native modul (indeholder native kode) for at kunne interegere med NFC teknologien i Android enheden.

### Forudsætninger

- [Node.js](https://nodejs.org/) (version 14 eller senere - Brugte selv v18.20.5)
- [Android Studio](https://developer.android.com/studio)
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (Skal være en lts version - Brugte selv v17.0.13 men en lts v11 burde også virke)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (en expo bruger (samme som en expo go bruger)
- Et fysisk NFC tag, som er tomt

### Demo video

- Da der naturligt er en del forudsætninger til kørsel af dette projekt har vi lavet en mere dybdegående demo video, som gennemgår appen.
- Link til YT video: https://www.youtube.com/watch?v=5MfgnWfRNpw

### Installation

1. Clone repo

   ```sh
   git clone https://github.com/yourusername/INNTWASHMATE.git
   cd INNTWASHMATE
   ```

2. Installer dependencies:
   ```sh
   npm install
   ```

### Kørsel på en Emulator

1. Åbn Android Studio og opret en ny virtuel enhed (AVD), hvis du ikke allerede har en.
2. Start AVD'en fra AVD Manager.
3. I projektmappen, kør:
   ```sh
   npx react-native run-android
   ```

### Kørsel på en Fysisk Enhed

1. Installer Expo Go appen fra Google Play Store på din Android-enhed.
2. Installer APK filen (apk filen er komprimerert i en .7z mappe og ligger under apk fil i InntWASHMATE mappen) på Android enheden - sørg for, at Developer Mode og USB Debugging er aktiveret på din Android-enhed
3. Åben appen (ikke expo go, men den installerede app fra APK filen, den hedder InntWASHMATE) og log på med din expo bruger og luk appen helt ned efter
4. I root mappen, kør:
   ```sh
   npx expo start
   ```
5. Åben appen igen efter metro builder er startet

### Fejlfinding

- Hvis du støder på problemer med Android build, så prøv at rense projektet:

  ```sh
  cd android
  ./gradlew clean
  ```

- Sørg for, at dine miljøvariabler er korrekt indstillet for Android SDK og JDK.
  ```sh
  export ANDROID_HOME=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_HOME/emulator
  export PATH=$PATH:$ANDROID_HOME/tools
  export PATH=$PATH:$ANDROID_HOME/tools/bin
  export PATH=$PATH:$ANDROID_HOME/platform-tools
  ```

### Ressourcer jeg brugte til at sætte det op

- [Expo Dokumentation](https://docs.expo.dev/)
- [React Native Dokumentation](https://reactnative.dev/docs/getting-started)
- [Android Studio Dokumentation](https://developer.android.com/studio/intro)
