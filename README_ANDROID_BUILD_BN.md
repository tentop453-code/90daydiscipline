# 90 DAY DISCIPLINE — Android APK build

এই প্রজেক্টে Android APK তৈরির জন্য Capacitor configuration ও GitHub Actions workflow যোগ করা হয়েছে। বর্তমান ZIP-এ APK অন্তর্ভুক্ত নেই; APK তখনই তৈরি হবে যখন workflow বাস্তবে সফলভাবে চলবে।

## সবচেয়ে সহজ উপায়: GitHub দিয়ে APK তৈরি
1. GitHub-এ নতুন repository তৈরি করো, যেমন `90-day-discipline`।
2. এই ZIP extract করে ভেতরের সব ফাইল repository-তে upload/commit করো। `.github/workflows/android-apk.yml` ফাইলটিও অবশ্যই থাকতে হবে।
3. GitHub repository-র **Actions** tab খোলো। প্রথমবার workflow enable করতে বললে enable করো।
4. **Build Android APK** workflow নির্বাচন করে **Run workflow** চাপো (অথবা `main`/`master` branch-এ push করো)।
5. সব step সবুজ/Success হলে ওই run-এর নিচে **Artifacts** থেকে `90-day-discipline-debug-apk` ডাউনলোড করো। ZIP-এর ভিতরের `app-debug.apk` ফোনে পাঠিয়ে Android-এ install করো।
6. Build fail হলে Actions-এর failed step-এর log দেখো; ব্যর্থ build-কে APK হিসেবে ব্যবহার কোরো না।

## স্থানীয়ভাবে
Node.js 20+, Java 17 এবং Android SDK প্রয়োজন।
```bash
npm install
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug --no-daemon
```
APK প্রত্যাশিত অবস্থান: `android/app/build/outputs/apk/debug/app-debug.apk`.

**যাচাইয়ের নিয়ম:** শুধু file নাম/আকার দেখে installability নিশ্চিত হয় না। সফল Gradle build-এর পর আসল APK পরীক্ষা করে ফোনে install করে দেখা উচিত।
