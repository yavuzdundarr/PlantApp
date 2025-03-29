
🌱 PlantApp - React Native Case Study

PlantApp, bitkileri tanımlayarak kullanıcılarına bitkiler hakkında bilgiler sunan, React Native ile geliştirilmiş bir 
mobil uygulama projesidir. Bu proje, verilen Figma tasarımının birebir uygulanmasıyla geliştirilmiştir.


📦 Kullanılan Teknolojiler

React Native

TypeScript

Redux Toolkit

React Navigation

REST API Entegrasyonu

Jest (Unit Testing) (opsiyonel)

Pixel-perfect & Responsive UI


🚀 Projeyi Çalıştırmak İçin Gereksinimler

Node.js (v16+)

npm veya yarn

React Native CLI 


🛠️ Kurulum Adımları

1. Repoyu Klonla
 
git clone https://github.com/yavuzdundarr/PlantApp.git

2. Proje dizinine geç

cd plant-app-react-native

3. Gerekli Bağımlılıkları Yükle

npm install
# veya yarn kullanıyorsan
yarn install

4. Projeyi Çalıştır

Android için:

Anroid Studio emülatörünü çalıştırdıktan sonra;

npm run android
# veya
yarn android

iOS için:

Öncelikle pod'ları yükle:
cd ios && pod install && cd ..

npm run ios
# veya
yarn ios

📁 Proje Yapısı

Proje dizin yapısı genel olarak şu şekildedir:

├── src
│   ├── api            # API istekleri
│   ├── components     # UI komponentleri
│   ├── navigation     # Navigasyon ve stack yapıları
│   ├── redux          # Redux store, slice ve actions
│   ├── screens        # Ekranlar
│   ├── assets         # Görseller, ikonlar, fontlar 
└── App.tsx            # Uygulamanın başlangıç noktası

📱 Test Edilen Cihazlar & Emülatörler

Pixel 7 (1080x2400)

Pixel 4 (1080x2280)

Pixel 2 (1080x1920)
