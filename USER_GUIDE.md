# IMU-CET Mock Test - User Guide

## 🎯 Overview

A smooth, user-friendly IMU-CET mock test application with one-time access code authentication.

---

## 🔐 Access Code System

### How It Works:

1. **First Visit:**
   - User opens the website
   - Access code modal appears
   - User enters one of the valid codes
   - After successful entry, access is granted permanently

2. **Subsequent Visits:**
   - User opens the website
   - Main content appears directly (NO code required)
   - Smooth experience without repeated authentication

### Valid Access Codes:

```
IMU9846
IMU350
IMU456
```

**Note:** Any of these codes will grant permanent access.

---

## ✨ Key Features

### 1. One-Time Authentication
- ✅ Access code required only ONCE
- ✅ Uses `localStorage.setItem("isAuthorized", "true")`
- ✅ No repeated code asking after refresh
- ✅ Works across browser sessions

### 2. Smooth User Experience
- ✅ Success message: "Access unlocked successfully"
- ✅ Smooth fade-in/fade-out animations
- ✅ Auto-focus on input field
- ✅ Enter key support
- ✅ Real-time error clearing

### 3. Modern UI Design
- ✅ Clean, centered modal
- ✅ Background blur effect
- ✅ Rounded corners and shadows
- ✅ Hover animations on cards
- ✅ Responsive design

### 4. Reset Access Feature
- ✅ "Reset Access" button on home page
- ✅ Clears authorization
- ✅ Useful for testing or switching users

---

## 🚀 User Flow

```
┌─────────────────────────────────────────────┐
│  User Opens Website (First Time)           │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Access Code Modal Appears                  │
│  - Background blurred                       │
│  - Input field auto-focused                 │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  User Enters Code                           │
│  - IMU9846, IMU350, or IMU456              │
└─────────────────┬───────────────────────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
        ▼                   ▼
┌──────────────┐    ┌──────────────┐
│ Valid Code   │    │ Invalid Code │
└──────┬───────┘    └──────┬───────┘
       │                   │
       ▼                   ▼
┌──────────────┐    ┌──────────────┐
│ Success Msg  │    │ Error Msg    │
│ "Access      │    │ "Invalid     │
│ unlocked!"   │    │ Code"        │
└──────┬───────┘    └──────┬───────┘
       │                   │
       ▼                   │
┌──────────────┐           │
│ Store in     │           │
│ localStorage │           │
└──────┬───────┘           │
       │                   │
       ▼                   │
┌──────────────┐           │
│ Hide Modal   │           │
│ Show Content │           │
└──────────────┘           │
                           │
       ┌───────────────────┘
       │
       ▼
┌──────────────┐
│ Try Again    │
└──────────────┘

┌─────────────────────────────────────────────┐
│  User Opens Website (Next Time)            │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Check localStorage                         │
│  if(isAuthorized === "true")               │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  Show Main Content Directly                 │
│  - No modal                                 │
│  - No code required                         │
│  - Smooth experience                        │
└─────────────────────────────────────────────┘
```

---

## 🎨 UI Components

### 1. Access Code Modal
- **Title:** "Enter Access Code"
- **Icon:** 🔐 (animated bounce)
- **Input Field:** 
  - Centered text
  - Uppercase transformation
  - Letter spacing
  - Max length: 15 characters
- **Submit Button:** Gradient blue
- **Error Message:** Red text with fade-in

### 2. Main Content (3 Cards)
- **Beginner Card** 🟢
  - Fundamental concepts
  - 200 Questions · 180 Min
  
- **Medium Card** 🟡
  - Intermediate problems
  - 200 Questions · 180 Min
  
- **Hard Card** 🔴
  - Advanced questions
  - 200 Questions · 180 Min

### 3. Reset Access Button
- Located in header
- Icon: 🔄
- Clears localStorage
- Reloads page

---

## 💾 Technical Details

### localStorage Usage:

```javascript
// Store authorization
localStorage.setItem("isAuthorized", "true");

// Check authorization
const isAuthorized = localStorage.getItem("isAuthorized");

// Clear authorization
localStorage.removeItem("isAuthorized");
```

### Access Code Validation:

```javascript
const ACCESS_CODES = ["IMU9846", "IMU350", "IMU456"];

function verifyAccessCode(inputCode) {
  if (ACCESS_CODES.includes(inputCode.toUpperCase())) {
    localStorage.setItem("isAuthorized", "true");
    return true;
  }
  return false;
}
```

---

## 🎭 Animations

1. **Modal Entrance:**
   - Fade in overlay (0.3s)
   - Slide up modal box (0.4s)
   - Bounce lock icon (0.6s)

2. **Success Message:**
   - Pop animation (0.5s)
   - Scale effect
   - Auto-dismiss after 1.5s

3. **Error State:**
   - Shake input field (0.4s)
   - Red error text fade-in

4. **Card Hover:**
   - Lift effect (translateY -6px)
   - Shadow enhancement

---

## 🔧 Testing Guide

### Test Scenario 1: First Time User
1. Open website
2. See access code modal
3. Enter "IMU9846"
4. See success message
5. Modal disappears
6. Main content appears

### Test Scenario 2: Returning User
1. Close browser
2. Reopen website
3. Main content appears directly
4. No modal shown

### Test Scenario 3: Invalid Code
1. Open website (clear localStorage first)
2. Enter "WRONG123"
3. See error message
4. Input field shakes
5. Try again with valid code

### Test Scenario 4: Reset Access
1. Click "Reset Access" button
2. Confirm dialog
3. Page reloads
4. Access code modal appears again

---

## 📱 Responsive Design

- **Desktop:** 3 cards in a row
- **Tablet:** 2 cards per row
- **Mobile:** 1 card per column

---

## 🎯 Best Practices Implemented

1. ✅ **User Experience First**
   - One-time authentication
   - No frustration from repeated codes
   - Clear success/error feedback

2. ✅ **Smooth Animations**
   - Professional feel
   - Not overwhelming
   - Purposeful transitions

3. ✅ **Accessibility**
   - Auto-focus on input
   - Enter key support
   - Clear error messages

4. ✅ **Clean Code**
   - Modular functions
   - Clear naming
   - Well-commented

5. ✅ **Security Considerations**
   - Client-side validation
   - Multiple valid codes
   - Easy to reset

---

## 🚨 Important Notes

1. **localStorage Persistence:**
   - Authorization persists across sessions
   - Only cleared by:
     - User clicking "Reset Access"
     - Clearing browser data
     - Incognito/Private mode

2. **Multiple Codes:**
   - All 3 codes grant same access
   - No difference between codes
   - Choose any code to distribute

3. **Browser Compatibility:**
   - Works on all modern browsers
   - Requires localStorage support
   - Responsive on all devices

---

## 📞 Support

For issues or questions:
- Check localStorage in browser DevTools
- Use "Reset Access" to start fresh
- Clear browser cache if needed

---

**Version:** 2.0  
**Last Updated:** 2024  
**Status:** Production Ready ✅
