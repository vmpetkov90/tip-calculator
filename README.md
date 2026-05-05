# 🧮 Tip Calculator — React + Vite + Tailwind

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-563D7C?style=for-the-badge&logo=vite&logoColor=yellow)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)

A clean and responsive **Tip Calculator** built with **React**, **Vite**, and **Tailwind CSS**.  
This project calculates **tip per person** and **total per person**, featuring reusable components, controlled inputs, and polished UI interactions.

---

## 🌐 Live Demo

🔗 https://tip-calculator-three-sandy.vercel.app/

---

## 🚀 Features

- **Real‑time Calculations**  
  Automatically computes:
  - Tip amount per person  
  - Total amount per person  

- **Preset Tip Buttons**  
  Quick‑select buttons (5%, 10%, 15%, etc.) with active highlighting.

- **Custom Tip Input**  
  Users can enter any percentage manually.

- **Smart Input Handling**  
  - Sanitizes numeric input  
  - Limits decimals  
  - Prevents invalid characters  
  - Moves caret to the end for smooth editing  

- **Reusable Components**  
  Shared `<FormInput />` and `<TipButton />` components keep the UI consistent and scalable.

- **Reset Functionality**  
  Clears all values and resets the calculator instantly.

- **Fully Responsive Layout**  
  Optimized for mobile, tablet, and desktop.

---

## 🧩 Component Structure

### **`App.jsx`**
- Holds main state (`bill`, `tip`, `people`)
- Performs all calculations
- Handles:
  - Input sanitization  
  - Tip button highlighting  
  - Custom tip clearing  
  - Reset logic  
- Renders:
  - Input form  
  - Tip buttons  
  - Results panel  

---

### **`FormInput.jsx`**
- Reusable input component for:
  - Bill amount  
  - Number of people  
- Supports:
  - Custom label (currency or icon)  
  - Caret repositioning  
  - Unified input handler  
- Fully controlled input with Tailwind styling

---

### **`TipButton.jsx`**
- Represents a single preset tip percentage  
- Sends its value to the shared input handler  
- Works with App’s highlighting logic  
- Styled with Tailwind for consistent UI

---

## 🛠️ Technologies Used

- **JavaScript (ES6+)**
- **React**
- **Vite**
- **Tailwind CSS**
- **Vercel**

---

## 📸 Screenshot
<img width="100%" alt="tip-calculator" src="https://github.com/user-attachments/assets/5522369e-fdf2-49c2-87f6-3dbf10c70932" />

---

## 📜 License

This project was created as part of ongoing frontend development practice.  
It is open‑source and available for anyone to explore, learn from, or extend.
