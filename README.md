# Expo Image Styling App - *Artify2*

This repository contains a cross-platform mobile application built with **Expo** and **React Native**. The app, **Artify2**, allows users to apply various styles to images, making it a versatile tool for quick image customization and enhancement. It is fully compatible with both **iOS** and **Android** devices.

---

## Features

- **Cross-Platform Support**: Runs seamlessly on both iOS and Android.
- **Image Upload**: Users can select images from their gallery or capture photos directly from the camera.
- **Styling Tools**:
  - Apply filters (e.g., grayscale, sepia, brightness adjustments).
  - Resize, crop, or rotate images.
  - Add overlays, borders, or other graphical enhancements.
- **Real-Time Preview**: View changes as you apply styles.
- **Export Options**: Save the styled images to your device or share them on social media.
- **Offline Mode**: Basic styling features work without an internet connection.
- **Development Build for Debug**: A special mode for developers to test and debug new features.

---

## Getting Started

### Prerequisites
- Install [Node.js](https://nodejs.org/) (v16 or higher recommended).
- Install the Expo CLI:
  ```bash
  npm install -g expo-cli
  ```

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Betucciny/Artify2.git
   cd Artify2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   expo start
   ```

### Running on Devices
- **iOS**: Use the Expo Go app from the App Store to scan the QR code in the Expo CLI.
- **Android**: Use the Expo Go app from Google Play to scan the QR code in the Expo CLI.

---

## Folder Structure

```
Artify2/
├── app/          # 
├── assets/      # Static assets like images and icons
├── components/         # Reusable React Components
├── constants/          # Constants for the app
├── hooks/           # Hooks for the React components
├── patches/           # Patches for the libraries used
├── app.json         # App configuration for Expo
├── LICENSE          # License file
└── package.json     # Project dependencies and scripts
```

---

## License

The project is licensed under the custom **Artify2 License Agreement**.  
This license permits **non-commercial use** only. Any commercial use, including selling derivatives or making profits from the app or its derivatives, is strictly prohibited.  

See the [LICENSE](LICENSE) file for the full terms and conditions.

---

## Development Build for Debug

To test and debug the application:
1. Ensure you are running the development server (`expo start`).
2. Launch the development build for the app and launch it
3. Any new features or changes you make will be hot-reloaded for immediate feedback.
4. **Note**: Debug builds are strictly for development purposes and should not be distributed.

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:  
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:  
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## Contact

For questions or suggestions, please contact:  
[Betucciny on GitHub](https://github.com/Betucciny)  

---

### Happy Coding! 🚀
