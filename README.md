# Partnership Form - README

## 📋 Project Overview
A modern, responsive partnership form for Prophet Stephen Kpodo A.'s ministry. This form collects partnership information and redirects users to a WhatsApp group upon successful submission.

## 🚀 Features
- **Modern Glass Morphism Design** - Beautiful gradient background with glass-like elements
- **Responsive Layout** - Works perfectly on desktop and mobile devices
- **Form Validation** - Client-side validation for all required fields
- **Google Forms Integration** - Submits data directly to Google Forms
- **Success Page** - Full-screen success message with WhatsApp group link
- **Accessibility** - Proper form labels and ARIA attributes

## 📁 File Structure
```
partnership-form/
├── index.html          # Main form file
└── images/             # Banner images (external path)
```

## 🛠️ Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and glass morphism effects
- **JavaScript** - Form validation and success page handling
- **Font Awesome** - Icons for form elements
- **Google Forms** - Backend form processing

## 📝 Form Fields
### Personal Details
- **Surname** (Required)
- **First Name** (Required)
- **Gender** (Required)
- **Location** (Required)
- **Contact** (Required)
- **Email Address** (Required)

### Partnership Agreement
- **Amount GH¢** (Required)
- **Reminder Needed** (Required)
- **Reminder Method** (Required)
- **Terms & Conditions Agreement** (Required - Checkbox)

## 🎨 Design Features
- **Color Scheme**:
  - Primary: #6C4DF6 (Purple)
  - Secondary: #FF7BA9 (Pink)
  - Accent: #4DF6C8 (Teal)
  - Dark: #0F0F1A (Dark blue)

- **Glass Morphism Effects**:
  - Backdrop filters
  - Semi-transparent backgrounds
  - Glow effects

## ⚙️ Setup Instructions
1. **Clone or Download** the HTML file
2. **Update Google Form URL** (if needed):
   - Find and replace the form action URL in the `<form>` tag
3. **Update Banner Image**:
   - Replace the banner image path in the `<img>` tag
4. **Update WhatsApp Group Link**:
   - Replace the WhatsApp group URL in the success page section
5. **Deploy** to any web server or hosting platform

## 🔧 Customization
### Changing Colors
Update CSS variables in the `:root` selector:
```css
:root {
    --primary: #your-color;
    --secondary: #your-color;
    --accent: #your-color;
    --dark: #your-color;
}
```

### Modifying Form Fields
1. Update form field names to match your Google Form entry IDs
2. Add/remove form groups as needed
3. Update validation logic in the JavaScript section

## 📱 Responsive Design
The form is fully responsive with:
- Mobile-first approach
- Flexible grid layout
- Adaptive font sizes
- Touch-friendly form elements

## 🔒 Privacy & Security
- Form data is submitted directly to Google Forms
- No sensitive data is stored locally
- HTTPS recommended for production use

## 🎯 Browser Compatibility
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## 📞 Support
For technical support or customization requests, contact Ska Digital Hub.

## 📄 License
© 2025 Ska Digital Hub. All rights reserved.

---

## 🚀 Quick Deployment
1. Upload the HTML file to your web server
2. Ensure all external resources (Font Awesome) are accessible
3. Test the form submission process
4. Verify the WhatsApp group link functionality

## 🔄 Update Log
- **Initial Release**: Complete partnership form with success page
- **Features**: Form validation, responsive design, WhatsApp integration
- **Styling**: Modern glass morphism design with gradient effects

**Note**: Remember to update the banner image path and test all form functionality before deploying to production.



